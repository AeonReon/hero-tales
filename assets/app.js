// Hero Tales — library page.
// Loads stories/library.json, renders the tonight pick, tradition chips, and the list.

const TRADITION_VARS = {
  Greek:    ['--t-greek-1', '--t-greek-2'],
  Roman:    ['--t-roman-1', '--t-roman-2'],
  English:  ['--t-english-1', '--t-english-2'],
  Scottish: ['--t-scottish-1', '--t-scottish-2'],
  Norse:    ['--t-norse-1', '--t-norse-2'],
  Frankish: ['--t-frankish-1', '--t-frankish-2'],
  French:   ['--t-french-1', '--t-french-2'],
  Italian:  ['--t-italian-1', '--t-italian-2'],
  Swiss:    ['--t-swiss-1', '--t-swiss-2'],
  Arabian:  ['--t-arabian-1', '--t-arabian-2'],
  Asian:    ['--t-asian-1', '--t-asian-2'],
  American: ['--t-american-1', '--t-american-2'],
  European: ['--t-european-1', '--t-european-2'],
  Mixed:    ['--t-mixed-1', '--t-mixed-2'],
  Fable:    ['--t-fable-1', '--t-fable-2'],
};

function tradStyle(tradition) {
  const v = TRADITION_VARS[tradition] || TRADITION_VARS.Mixed;
  return `--c1: var(${v[0]}); --c2: var(${v[1]});`;
}

const state = {
  stories: [],
  filter: 'All',
  sort: 'short',
};

async function loadLibrary() {
  const res = await fetch('stories/library.json', { cache: 'no-store' });
  const data = await res.json();
  state.stories = data.stories;
  renderTonight();
  renderChips();
  renderList();
}

function pickRandom() {
  return state.stories[Math.floor(Math.random() * state.stories.length)];
}

function renderTonight() {
  const s = pickRandom();
  const card = document.getElementById('tonight-card');
  card.href = `story.html?id=${encodeURIComponent(s.id)}`;
  card.style.cssText = tradStyle(s.tradition);
  card.querySelector('.tonight-title').textContent = s.title;
  card.querySelector('.tonight-meta').textContent =
    `${s.tradition} · ${s.minutes} min read · from ${s.source}`;
}

function renderChips() {
  const counts = { All: state.stories.length };
  for (const s of state.stories) counts[s.tradition] = (counts[s.tradition] || 0) + 1;

  const order = ['All', ...Object.keys(counts).filter(k => k !== 'All')
    .sort((a, b) => counts[b] - counts[a])];

  const wrap = document.getElementById('tradition-chips');
  wrap.innerHTML = '';
  for (const name of order) {
    const btn = document.createElement('button');
    btn.className = 'chip' + (state.filter === name ? ' active' : '');
    if (name !== 'All') btn.style.cssText = tradStyle(name);
    btn.innerHTML = `${name}<span class="chip-count">${counts[name]}</span>`;
    btn.onclick = () => {
      state.filter = name;
      renderChips();
      renderList();
    };
    wrap.appendChild(btn);
  }
}

function renderList() {
  let list = state.stories.slice();
  if (state.filter !== 'All') list = list.filter(s => s.tradition === state.filter);

  if (state.sort === 'short') list.sort((a, b) => a.minutes - b.minutes || a.title.localeCompare(b.title));
  else if (state.sort === 'alpha') list.sort((a, b) => a.title.localeCompare(b.title));
  else if (state.sort === 'tradition') list.sort((a, b) =>
    a.tradition.localeCompare(b.tradition) || a.minutes - b.minutes);

  const ul = document.getElementById('story-list');
  ul.innerHTML = '';
  for (const s of list) {
    const li = document.createElement('li');
    li.className = 'story-item';
    li.style.cssText = tradStyle(s.tradition);
    li.innerHTML = `
      <a href="story.html?id=${encodeURIComponent(s.id)}">${s.title}</a>
      <span class="story-trad-pill" style="${tradStyle(s.tradition)}">${s.tradition}</span>
      <span class="story-time">${s.minutes} min</span>
    `;
    ul.appendChild(li);
  }

  document.getElementById('list-title').textContent =
    state.filter === 'All' ? `All tales (${list.length})` : `${state.filter} (${list.length})`;
}

document.getElementById('reshuffle').onclick = renderTonight;
document.getElementById('sort-by').onchange = (e) => {
  state.sort = e.target.value;
  renderList();
};

loadLibrary().catch(err => {
  console.error(err);
  document.querySelector('.tonight-title').textContent = 'Could not load library';
});

// --- build stamp / cache busting ---
let _initialStamp = null;
async function checkBuildStamp() {
  try {
    const res = await fetch('build-stamp.json', { cache: 'no-store' });
    const { stamp } = await res.json();
    if (_initialStamp === null) {
      _initialStamp = stamp;
      const pill = document.getElementById('version-pill');
      if (pill) pill.textContent = `v${String(stamp).slice(-6)}`;
    } else if (stamp !== _initialStamp) {
      showRefreshBanner();
    }
  } catch {}
}
function showRefreshBanner() {
  if (document.getElementById('refresh-banner')) return;
  const b = document.createElement('div');
  b.id = 'refresh-banner';
  b.className = 'refresh-banner';
  b.textContent = '🔄 New tales available — tap to reload';
  b.onclick = () => location.reload();
  document.body.appendChild(b);
}
checkBuildStamp();
setInterval(checkBuildStamp, 60000);

// SW
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}
