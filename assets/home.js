// home.js — the launcher.
//
// Builds the app bar, the "For today" feed and the shelf tiles. The feed is
// the whole point of coming back: eight cards, picked by the day number so
// they stand all day and turn over at midnight, each one opening a modal.
// Shuffle walks forward through every list at once.

renderAppbar();

/* ---------------------------------------------------------------- the modal */

const modal = document.getElementById('htModal');

function openModal({ c, cd, glyph, kicker, title, html }) {
  document.getElementById('htKicker').innerHTML = `${glyph} ${esc(kicker)}`;
  document.getElementById('htTitle').textContent = title;
  const body = document.getElementById('htBody');
  body.innerHTML = html;

  const head = modal.querySelector('.ht-mhead');
  head.style.setProperty('--mc', c);   head.style.setProperty('--mcd', cd);
  body.style.setProperty('--mc', c);   body.style.setProperty('--mcd', cd);

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  modal.querySelector('.ht-modal').scrollTop = 0;

  const rb = body.querySelector('.ht-read');
  if (rb) rb.addEventListener('click', () => readAloud(rb.getAttribute('data-read') || body.textContent, rb));
}

function closeModal() {
  ttsStop();
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
}

document.getElementById('htClose').addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ----------------------------------------------------------------- the bars */

// Category images that sit behind the fixed daily cards. Missing files just
// fall back to the gradient + glyph (the <img> removes itself on 404).
const CAT_IMG = {
  quote: 'images/cat/quote.jpg',
  thought: 'images/cat/thought.jpg',
  rule: 'images/cat/rule.jpg',
  word: 'images/cat/word.jpg',
  feat: 'images/cat/feat.jpg',
  stand: 'images/cat/stand.jpg',
  ledger: 'images/cat/ledger.jpg',
};
const tradImg = t => `images/trad/${String(t || '').toLowerCase()}.jpg`;

function bar({ c, cd, glyph, kicker, title, teaser, img, onOpen }) {
  const b = document.createElement('button');
  b.className = 'today-bar';
  b.type = 'button';
  b.style.setProperty('--tc', c);
  b.style.setProperty('--tcd', cd);
  const photo = img
    ? `<img src="${img}" alt="" loading="lazy" onerror="this.remove()">`
    : '';
  b.innerHTML = `
    <span class="tb-text">
      <span class="tb-kicker">${glyph} ${esc(kicker)}</span>
      <span class="tb-title">${esc(title)}</span>
      <span class="tb-teaser">${esc(teaser)}</span>
    </span>
    <span class="tb-photo" aria-hidden="true"><span class="tb-glyph">${glyph}</span>${photo}</span>`;
  b.addEventListener('click', onOpen);
  return b;
}

/* -------------------------------------------------------------- the content */

// Chronicles minus anything the owner has put away.
const chroniclesOnShelf = () => Keeper.keep(window.CHRONICLES || []);
const chroniclesOn = shelf => chroniclesOnShelf().filter(x => x.shelf === shelf);

let library = [];   // filled in when stories/library.json lands

// A chronicle card: teaser in the bar, the opening of the tale in the modal,
// then a link through to the full page.
//
// The daily card is kept UPBEAT for the good shelves: great works and stands
// show the scale and the breakthrough, not the cost — the cost lives on the
// full page. The ledger is the exception: it is the cautionary shelf, so its
// daily card keeps the cost, because that is the whole point of it.
function chronicleCard(entry, kicker, glyph) {
  const sh = shelfOf(entry.shelf);
  const upbeat = entry.shelf !== 'ledger';
  const note = upbeat
    ? (entry.reckoning ? `<p class="ht-note"><b>What made it work.</b> ${esc(entry.reckoning)}</p>` : '')
    : (entry.cost ? `<p class="ht-note"><b>The cost.</b> ${esc(entry.cost)}</p>` : '');
  return bar({
    c: entry.color || sh.c, cd: entry.colorDeep || sh.cd,
    glyph, kicker,
    title: entry.title,
    teaser: entry.teaser,
    img: entry.image || CAT_IMG[entry.shelf],
    onOpen: () => openModal({
      c: entry.color || sh.c, cd: entry.colorDeep || sh.cd,
      glyph, kicker, title: entry.title,
      html:
        `<p class="ht-source" style="margin-top:0">${esc(entry.kicker)}</p>`
        + `<p>${esc(entry.body[0])}</p>`
        + note
        + `<a class="ht-morelink" href="chronicle.html?id=${encodeURIComponent(entry.id)}">Read the whole thing →</a>`
    })
  });
}

function render(off) {
  const grid = document.getElementById('todayGrid');
  grid.innerHTML = '';
  const cards = [];

  // 1 — Tonight's tale, straight off the hero shelf.
  const tale = pickBy(library.filter(s => (s.section || 'hero') === 'hero'), off);
  if (tale) {
    const sh = SHELVES.hero;
    cards.push(bar({
      c: sh.c, cd: sh.cd, glyph: '⚔️', kicker: "Tonight's tale",
      title: tale.title,
      teaser: `${tale.tradition} · ${tale.minutes} min to read aloud · from ${tale.source}`,
      img: tradImg(tale.tradition),
      onOpen: () => { location.href = `story.html?id=${encodeURIComponent(tale.id)}`; }
    }));
  }

  // 2 — A line from someone who did something.
  const q = pickBy(window.QUOTES, off);
  if (q) cards.push(bar({
    c: '#C6811A', cd: '#8A5A0F', glyph: '❝', kicker: 'Line of the day',
    title: q.author, teaser: q.text, img: CAT_IMG.quote,
    onOpen: () => openModal({
      c: '#C6811A', cd: '#8A5A0F', glyph: '❝', kicker: 'Line of the day', title: q.author,
      html: `<p class="ht-quote">${esc(q.text)}</p>`
        + `<p class="ht-source">— ${esc(q.author)}</p>`
        + (q.source ? `<p class="ht-note">${esc(q.source)}</p>` : '')
    })
  }));

  // 3 — A great work.
  const feat = pickBy(chroniclesOn('feat'), off);
  if (feat) cards.push(chronicleCard(feat, 'A great work', '🏗'));

  // 4 — A stand.
  const stand = pickBy(chroniclesOn('stand'), off);
  if (stand) cards.push(chronicleCard(stand, 'A stand worth knowing', '🛡'));

  // 5 — Something to turn over during the day.
  const t = pickBy(window.THOUGHTS, off);
  if (t) cards.push(bar({
    c: '#1F8F5E', cd: '#146046', glyph: '💭', kicker: 'A thought to turn over',
    title: t.source, teaser: t.text, img: CAT_IMG.thought,
    onOpen: () => openModal({
      c: '#1F8F5E', cd: '#146046', glyph: '💭', kicker: 'A thought to turn over', title: t.source,
      html: `<p>${esc(t.text)}</p>`
        + `<button class="ht-read" type="button" data-read="${esc(t.text)}">▶︎ Read aloud</button>`
    })
  }));

  // 6 — A rule to hold, the way the old schools taught them.
  const m = pickBy(window.MAXIMS, off);
  if (m) cards.push(bar({
    c: '#7C3AED', cd: '#5B21B6', glyph: '📜', kicker: 'A rule to hold',
    title: m.title, teaser: m.text.replace(/\n/g, ' '), img: CAT_IMG.rule,
    onOpen: () => openModal({
      c: '#7C3AED', cd: '#5B21B6', glyph: '📜', kicker: 'A rule to hold', title: m.title,
      html: `<p class="ht-verse">${esc(m.text)}</p>`
        + `<p class="ht-source">— ${esc(m.author)}</p>`
        + (m.note ? `<p class="ht-note">${esc(m.note)}</p>` : '')
        + `<button class="ht-read" type="button" data-read="${esc(m.text)}">▶︎ Read aloud</button>`
    })
  }));

  // 7 — A word of the old virtues.
  const w = pickBy(window.WORDS, off);
  if (w) cards.push(bar({
    c: '#0EA5A4', cd: '#0F766E', glyph: '🔤', kicker: 'Word of the day',
    title: w.word, teaser: w.meaning, img: CAT_IMG.word,
    onOpen: () => openModal({
      c: '#0EA5A4', cd: '#0F766E', glyph: '🔤', kicker: 'Word of the day', title: w.word,
      html: `<div class="ht-word-line"><b>Origin</b><span>${esc(w.lang)} · ${esc(w.root)}</span></div>`
        + `<div class="ht-word-line"><b>Means</b><span>${esc(w.meaning)}</span></div>`
        + `<div class="ht-word-line"><b>In practice</b><span>${esc(w.english)}</span></div>`
    })
  }));

  // 8 — And one from the ledger, so the shelf is never only flattering.
  const led = pickBy(chroniclesOn('ledger'), off);
  if (led) cards.push(chronicleCard(led, 'From the ledger', '⚖️'));

  cards.forEach(c => grid.appendChild(c));
}

let offset = 0;
render(offset);
document.getElementById('todayShuffle').addEventListener('click', () => { offset++; render(offset); });

/* ------------------------------------------------------------------- tiles */

function rtile({ href, icon, c, cd, name, tagline, count, img }) {
  const photo = img
    ? `<span class="rtile-photo has-img"><img src="${img}" alt="" loading="lazy" onerror="this.parentNode.classList.remove('has-img');this.remove()"><span class="rtile-ic">${svgIcon(icon)}</span></span>`
    : `<span class="rtile-photo"><span class="rtile-ic">${svgIcon(icon)}</span></span>`;
  return `<a href="${href}" class="rtile" style="--c:${c};--cd:${cd};">
      ${photo}
      <span class="rtile-body">
        <span class="rtile-name">${esc(name)}</span>
        <span class="rtile-tagline">${esc(tagline)}</span>
        <span class="rtile-count">${esc(count)}</span>
      </span>
      <span class="rtile-chev" aria-hidden="true">→</span>
    </a>`;
}

function renderTiles() {
  const onShelf = Keeper.keep(library);
  const countIn = section => onShelf.filter(s => (s.section || 'hero') === section).length;
  const chronCount = shelf => chroniclesOn(shelf).length;

  document.getElementById('tiles-tales').innerHTML = ['hero', 'fable'].map(key => {
    const sh = SHELVES[key];
    return rtile({
      href: `tales.html?shelf=${key}`, icon: sh.icon, c: sh.c, cd: sh.cd,
      name: sh.name, tagline: sh.blurb,
      count: `${countIn(key)} tales`,
      img: key === 'fable' ? 'images/trad/fable.jpg' : 'images/cat/hero.jpg'
    });
  }).join('');

  document.getElementById('tiles-chronicles').innerHTML = CHRONICLE_SHELVES.map(key => {
    const sh = SHELVES[key];
    return rtile({
      href: `chronicles.html?shelf=${key}`, icon: sh.icon, c: sh.c, cd: sh.cd,
      name: sh.name, tagline: sh.blurb,
      count: `${chronCount(key)} ${chronCount(key) === 1 ? 'chronicle' : 'chronicles'}`,
      img: CAT_IMG[key]
    });
  }).join('');

  const away = Keeper.count();
  document.getElementById('tiles-tools').innerHTML = [
    rtile({
      href: 'random.html', icon: 'dice', c: '#7C3AED', cd: '#5B21B6',
      name: 'Surprise me', tagline: 'One thing at random from any shelf — a tale, a work, a stand. Press again for another.',
      count: 'Random'
    }),
    rtile({
      href: 'keep.html', icon: 'broom', c: '#6B7280', cd: '#3F4650',
      name: 'The shelf-keeper', tagline: 'Everything you have put away, and the power to bring it back. Your shelf is yours.',
      count: away ? `${away} put away` : 'Nothing put away'
    }),
    rtile({
      href: 'curate.html', icon: 'star', c: '#C6811A', cd: '#8A5A0F',
      name: 'Curate the seed', tagline: 'Walk the seed tales one at a time and mark each one. The verdicts shape what gets added next.',
      count: 'Approve / disapprove'
    }),
  ].join('');
}

/* ------------------------------------------------------------------- boot */

fetch('stories/library.json', { cache: 'no-store' })
  .then(r => r.json())
  .then(data => {
    library = Keeper.keep(data.stories || []);
    render(offset);
    renderTiles();
  })
  .catch(() => { renderTiles(); });

renderTiles();
bootShell();
