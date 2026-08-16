// tales.js — browse the two public-domain shelves (hero tales, fables).
//
// Same filtering the old library page had — tradition chips and a sort — but
// in the shell's vocabulary, and filtered through the shelf-keeper so that
// anything put away stays away.

const params = new URLSearchParams(location.search);

const state = {
  shelf: params.get('shelf') || localStorage.getItem('ht-shelf') || 'hero',
  filter: 'All',
  sort: 'short',
  stories: [],
};
if (!['hero', 'fable'].includes(state.shelf)) state.shelf = 'hero';

renderAppbar({ back: 'index.html', title: SHELVES[state.shelf].name });

// Tradition accents live in style.css as CSS variables; anything unlisted
// falls back to the shelf colour rather than going grey.
const TRADITION_VARS = {
  Greek: ['--t-greek-1', '--t-greek-2'],           Roman: ['--t-roman-1', '--t-roman-2'],
  English: ['--t-english-1', '--t-english-2'],     Scottish: ['--t-scottish-1', '--t-scottish-2'],
  Norse: ['--t-norse-1', '--t-norse-2'],           Frankish: ['--t-frankish-1', '--t-frankish-2'],
  French: ['--t-french-1', '--t-french-2'],        Italian: ['--t-italian-1', '--t-italian-2'],
  Swiss: ['--t-swiss-1', '--t-swiss-2'],           Arabian: ['--t-arabian-1', '--t-arabian-2'],
  Asian: ['--t-asian-1', '--t-asian-2'],           American: ['--t-american-1', '--t-american-2'],
  European: ['--t-european-1', '--t-european-2'],  Mixed: ['--t-mixed-1', '--t-mixed-2'],
  Fable: ['--t-fable-1', '--t-fable-2'],           Celtic: ['--t-celtic-1', '--t-celtic-2'],
  Medieval: ['--t-medieval-1', '--t-medieval-2'],  Carthaginian: ['--t-roman-1', '--t-roman-2'],
  Spartan: ['--t-greek-1', '--t-greek-2'],         Ancient: ['--t-greek-1', '--t-greek-2'],
};
function tradStyle(t) {
  const v = TRADITION_VARS[t];
  const sh = SHELVES[state.shelf];
  return v ? `--c1: var(${v[0]}); --c2: var(${v[1]});` : `--c1: ${sh.c}; --c2: ${sh.cd};`;
}

const onShelf = () => state.stories.filter(s => (s.section || 'hero') === state.shelf);

function renderHeader() {
  const sh = SHELVES[state.shelf];
  document.getElementById('shelf-title').textContent = sh.name;
  document.getElementById('shelf-blurb').textContent = sh.blurb;
  document.querySelector('.appbar .brand').textContent = sh.name;

  document.getElementById('shelf-switch').innerHTML = ['hero', 'fable'].map(key => {
    const s = SHELVES[key];
    const on = key === state.shelf;
    return `<button type="button" class="shelf-btn${on ? ' active' : ''}" data-shelf="${key}"
              style="--c1:${s.c};--c2:${s.cd};">${s.glyph} ${esc(s.name)}</button>`;
  }).join('');

  document.querySelectorAll('.shelf-btn').forEach(b => {
    b.onclick = () => {
      state.shelf = b.dataset.shelf;
      state.filter = 'All';
      localStorage.setItem('ht-shelf', state.shelf);
      history.replaceState(null, '', `tales.html?shelf=${state.shelf}`);
      renderHeader(); renderChips(); renderList();
    };
  });
}

function renderChips() {
  const pool = onShelf();
  const counts = { All: pool.length };
  for (const s of pool) counts[s.tradition] = (counts[s.tradition] || 0) + 1;
  const order = ['All', ...Object.keys(counts).filter(k => k !== 'All').sort((a, b) => counts[b] - counts[a])];

  const wrap = document.getElementById('tradition-chips');
  wrap.innerHTML = '';
  for (const name of order) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'chip' + (state.filter === name ? ' active' : '');
    btn.style.cssText = name === 'All'
      ? `--c1:${SHELVES[state.shelf].c};--c2:${SHELVES[state.shelf].cd};`
      : tradStyle(name);
    btn.innerHTML = `${esc(name)}<span class="chip-count">${counts[name]}</span>`;
    btn.onclick = () => { state.filter = name; renderChips(); renderList(); };
    wrap.appendChild(btn);
  }
}

function renderList() {
  let list = onShelf();
  if (state.filter !== 'All') list = list.filter(s => s.tradition === state.filter);

  if (state.sort === 'short') list.sort((a, b) => a.minutes - b.minutes || a.title.localeCompare(b.title));
  else if (state.sort === 'alpha') list.sort((a, b) => a.title.localeCompare(b.title));
  else list.sort((a, b) => a.tradition.localeCompare(b.tradition) || a.minutes - b.minutes);

  const ul = document.getElementById('story-list');
  ul.innerHTML = list.length ? '' : '<div class="empty-note">Nothing on this shelf. If you have put tales away, the shelf-keeper can bring them back.</div>';
  for (const s of list) {
    const li = document.createElement('li');
    li.className = 'story-item';
    li.style.cssText = tradStyle(s.tradition);
    li.innerHTML = `
      <span class="story-thumb"><img src="images/trad/${String(s.tradition || '').toLowerCase()}.jpg" alt="" loading="lazy" onerror="this.remove()"></span>
      <a href="story.html?id=${encodeURIComponent(s.id)}">${esc(s.title)}</a>
      <span class="story-trad-pill">${esc(s.tradition)}</span>
      <span class="story-time">${s.minutes} min</span>`;
    ul.appendChild(li);
  }

  const label = state.shelf === 'hero' ? 'All hero tales' : 'All fables';
  document.getElementById('list-title').textContent =
    state.filter === 'All' ? `${label} (${list.length})` : `${state.filter} (${list.length})`;
}

document.getElementById('sort-by').onchange = e => { state.sort = e.target.value; renderList(); };

fetch('stories/library.json', { cache: 'no-store' })
  .then(r => r.json())
  .then(data => {
    state.stories = Keeper.keep(data.stories || []);
    renderHeader(); renderChips(); renderList();
  })
  .catch(() => {
    document.getElementById('story-list').innerHTML =
      '<div class="empty-note">Could not load the library. Check your connection and pull to refresh.</div>';
  });

renderHeader();
bootShell();
