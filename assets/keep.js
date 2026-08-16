// keep.js — the shelf-keeper.
//
// Two views. "Put away" is what has been removed, with the power to bring any
// of it back. "Everything on the shelf" is the purge tool: the whole library
// and all the chronicles in one searchable list, each with a toggle.
//
// Put-away ids live in localStorage under ht-away. Nothing is ever deleted
// from the data files, so this is always reversible.

renderAppbar({ back: 'index.html', title: 'The shelf-keeper' });

const items = [];          // every item in the app, normalised
let view = 'away';
let filter = 'all';
let query = '';

function normaliseChronicle(c) {
  const sh = shelfOf(c.shelf);
  return { id: c.id, title: c.title, shelf: c.shelf, shelfName: sh.name, glyph: sh.glyph,
           c: c.color || sh.c, cd: c.colorDeep || sh.cd,
           sub: `${c.where} · ${c.when}`,
           href: `chronicle.html?id=${encodeURIComponent(c.id)}` };
}
function normaliseStory(s) {
  const key = (s.section || 'hero');
  const sh = shelfOf(key);
  return { id: s.id, title: s.title, shelf: key, shelfName: sh.name, glyph: sh.glyph,
           c: sh.c, cd: sh.cd,
           sub: `${s.tradition} · ${s.minutes} min · ${s.source}`,
           href: `story.html?id=${encodeURIComponent(s.id)}` };
}

(window.CHRONICLES || []).forEach(c => items.push(normaliseChronicle(c)));

/* ------------------------------------------------------------------ render */

function row(it, isAway) {
  return `<div class="keeper-row" style="--c:${it.c};--cd:${it.cd};">
      <a class="keeper-open" href="${it.href}">
        <span class="keeper-glyph">${it.glyph}</span>
        <span class="keeper-text">
          <span class="keeper-title">${esc(it.title)}</span>
          <span class="keeper-sub">${esc(it.shelfName)} · ${esc(it.sub)}</span>
        </span>
      </a>
      <button type="button" class="keeper-toggle${isAway ? ' back' : ''}" data-id="${esc(it.id)}">
        ${isAway ? '↩︎ Bring back' : 'Put away'}
      </button>
    </div>`;
}

function wireToggles(container) {
  container.querySelectorAll('.keeper-toggle').forEach(b => {
    b.onclick = () => {
      const nowAway = Keeper.toggle(b.dataset.id);
      toast(nowAway ? 'Put away' : 'Back on the shelf');
      renderAll();
    };
  });
}

function renderAway() {
  const away = Keeper.set();
  const list = items.filter(it => away.has(it.id));
  const el = document.getElementById('away-list');

  document.getElementById('away-count').textContent = Keeper.count();
  document.getElementById('away-actions').hidden = !Keeper.count();

  if (!Keeper.count()) {
    el.innerHTML = '<div class="empty-note">Nothing put away. Everything on the shelf is in play.<br><br>Put something away from its own page, or from “Everything on the shelf”.</div>';
    return;
  }

  // Ids we recognise, then any left over — a story put away before its library
  // entry loaded, or an id from a build that no longer carries that item.
  const knownIds = new Set(items.map(i => i.id));
  const orphans = Keeper.ids().filter(id => !knownIds.has(id));

  el.innerHTML = list.map(it => row(it, true)).join('')
    + (orphans.length
        ? `<div class="keeper-orphans"><b>${orphans.length} more put away</b> that are not in the current build — kept so they stay away if they return.<br>${orphans.map(esc).join('<br>')}</div>`
        : '');
  wireToggles(el);
}

function renderShelfList() {
  const away = Keeper.set();
  let list = items;
  if (filter !== 'all') list = list.filter(it => it.shelf === filter);
  if (query) {
    const q = query.toLowerCase();
    list = list.filter(it => it.title.toLowerCase().includes(q) || it.sub.toLowerCase().includes(q));
  }
  list = list.slice().sort((a, b) => a.shelf.localeCompare(b.shelf) || a.title.localeCompare(b.title));

  const el = document.getElementById('all-list');
  el.innerHTML = list.length
    ? list.map(it => row(it, away.has(it.id))).join('')
    : '<div class="empty-note">Nothing matches.</div>';
  wireToggles(el);

  const counts = { all: items.length };
  items.forEach(it => { counts[it.shelf] = (counts[it.shelf] || 0) + 1; });
  document.getElementById('all-filters').innerHTML =
    [['all', 'Everything'], ...Object.keys(SHELVES).map(k => [k, SHELVES[k].name])]
      .filter(([k]) => k === 'all' || counts[k])
      .map(([k, name]) => {
        const s = k === 'all' ? { c: '#C6811A', cd: '#8A5A0F' } : SHELVES[k];
        return `<button type="button" class="chip${filter === k ? ' active' : ''}" data-filter="${k}"
                  style="--c1:${s.c};--c2:${s.cd};">${esc(name)}<span class="chip-count">${counts[k] || 0}</span></button>`;
      }).join('');
  document.querySelectorAll('#all-filters .chip').forEach(b => {
    b.onclick = () => { filter = b.dataset.filter; renderShelfList(); };
  });
}

function renderAll() { renderAway(); renderShelfList(); }

/* ------------------------------------------------------------------- wiring */

document.querySelectorAll('.keeper-tab').forEach(b => {
  b.onclick = () => {
    view = b.dataset.view;
    document.querySelectorAll('.keeper-tab').forEach(x => x.classList.toggle('active', x === b));
    document.getElementById('away-view').hidden = view !== 'away';
    document.getElementById('all-view').hidden = view !== 'all';
  };
});

document.getElementById('all-search').oninput = e => { query = e.target.value.trim(); renderShelfList(); };

document.getElementById('restore-all').onclick = () => {
  if (!confirm(`Bring back all ${Keeper.count()} put-away items?`)) return;
  Keeper.clear();
  renderAll();
  toast('Everything back on the shelf');
};

document.getElementById('export-away').onclick = async () => {
  const text = JSON.stringify(Keeper.ids(), null, 2);
  try { await navigator.clipboard.writeText(text); toast('List copied'); }
  catch { prompt('Copy this list:', text); }
};

/* --------------------------------------------------------------------- boot */

fetch('stories/library.json', { cache: 'no-store' })
  .then(r => r.json())
  .then(data => { (data.stories || []).forEach(s => items.push(normaliseStory(s))); renderAll(); })
  .catch(() => renderAll());

renderAll();
bootShell();
