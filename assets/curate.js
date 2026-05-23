// Hero Tales — Curate mode.
// Walks through the seed-20 stories one at a time. User hits Approve or Disapprove.
// Verdicts live in localStorage and can be exported (copied / shared to file-share)
// so the build owner can shape the next batch based on what passed.

const TRADITION_VARS = {
  Greek: ['--t-greek-1', '--t-greek-2'],
  Roman: ['--t-roman-1', '--t-roman-2'],
  English: ['--t-english-1', '--t-english-2'],
  Scottish: ['--t-scottish-1', '--t-scottish-2'],
  Norse: ['--t-norse-1', '--t-norse-2'],
  Frankish: ['--t-frankish-1', '--t-frankish-2'],
  French: ['--t-french-1', '--t-french-2'],
  Italian: ['--t-italian-1', '--t-italian-2'],
  Swiss: ['--t-swiss-1', '--t-swiss-2'],
  Arabian: ['--t-arabian-1', '--t-arabian-2'],
  Asian: ['--t-asian-1', '--t-asian-2'],
  American: ['--t-american-1', '--t-american-2'],
  European: ['--t-european-1', '--t-european-2'],
  Mixed: ['--t-mixed-1', '--t-mixed-2'],
  Fable: ['--t-fable-1', '--t-fable-2'],
  Celtic: ['--t-celtic-1', '--t-celtic-2'],
  Medieval: ['--t-medieval-1', '--t-medieval-2'],
  Carthaginian: ['--t-roman-1', '--t-roman-2'],  // share Roman palette
  Spartan: ['--t-greek-1', '--t-greek-2'],
  Ancient: ['--t-greek-1', '--t-greek-2'],
};

function tradStyle(t) {
  const v = TRADITION_VARS[t] || TRADITION_VARS.Mixed;
  return `--c1: var(${v[0]}); --c2: var(${v[1]});`;
}

const VERDICT_KEY = 'ht-verdicts';
const ENGINE_KEY = 'ht-engine';

const state = {
  seeds: [],          // ordered list of seed story metas
  bodies: {},
  cursor: 0,
  verdicts: JSON.parse(localStorage.getItem(VERDICT_KEY) || '{}'),  // { id: 'approve' | 'disapprove' }
};

let engineMode = localStorage.getItem(ENGINE_KEY) || 'echo';
let speaking = false;

// --- voice ---
function reflectEngine() {
  TTS.setEngineMode(engineMode);
  const b = document.getElementById('voice-toggle');
  if (engineMode === 'echo') {
    b.textContent = '🌐 Echo';
    b.classList.add('echo');
  } else {
    b.textContent = '📱 System';
    b.classList.remove('echo');
  }
}
function toast(msg) {
  const t = document.getElementById('voice-toast');
  t.textContent = msg;
  t.hidden = false;
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.hidden = true, 2200);
}

document.getElementById('voice-toggle').onclick = () => {
  engineMode = engineMode === 'echo' ? 'web' : 'echo';
  localStorage.setItem(ENGINE_KEY, engineMode);
  reflectEngine();
  if (speaking) stopReading();
  toast(engineMode === 'echo' ? '🌐 Echo voice' : '📱 Device voice');
};

function stopReading() {
  TTS.stop();
  speaking = false;
  const b = document.getElementById('btn-read-aloud');
  if (b) { b.textContent = '▶︎ Read aloud'; b.classList.remove('speaking'); }
}

function startReading() {
  const s = state.seeds[state.cursor];
  const body = state.bodies[s.id] || '';
  speaking = true;
  const b = document.getElementById('btn-read-aloud');
  b.textContent = '■ Stop';
  b.classList.add('speaking');
  TTS.play(`${s.title}. ${body}`, {
    onStop: () => {
      speaking = false;
      const btn = document.getElementById('btn-read-aloud');
      if (btn) { btn.textContent = '▶︎ Read aloud'; btn.classList.remove('speaking'); }
    },
    onFallback: () => toast('📱 Echo unreachable — using device voice'),
  });
}

// --- load + render ---
async function load() {
  const [libRes, bodyRes] = await Promise.all([
    fetch('stories/library.json', { cache: 'no-store' }),
    fetch('stories/bodies.json', { cache: 'no-store' }),
  ]);
  const lib = (await libRes.json()).stories;
  state.bodies = await bodyRes.json();
  state.seeds = lib.filter(s => s.seed === true);
  // Stable order: by tradition then minutes — produces a varied reading order.
  state.seeds.sort((a, b) => a.tradition.localeCompare(b.tradition) || a.minutes - b.minutes);
  advance();
}

function advance() {
  // Find next ungraded seed starting from cursor.
  for (let i = 0; i < state.seeds.length; i++) {
    const idx = (state.cursor + i) % state.seeds.length;
    if (!state.verdicts[state.seeds[idx].id]) {
      state.cursor = idx;
      renderStory();
      return;
    }
  }
  // All graded
  renderDone();
}

function renderStory() {
  document.getElementById('curate-loading').hidden = true;
  document.getElementById('done').hidden = true;
  const article = document.getElementById('story');
  article.hidden = false;

  const s = state.seeds[state.cursor];
  const body = state.bodies[s.id] || '';
  document.title = `${s.title} — Curate`;
  document.body.style.cssText = tradStyle(s.tradition);
  document.getElementById('story-tradition').textContent = s.tradition;
  document.getElementById('story-title').textContent = s.title;
  document.getElementById('story-meta').textContent =
    `${s.minutes} min read · ${s.word_count.toLocaleString()} words`;

  const bodyEl = document.getElementById('story-body');
  bodyEl.innerHTML = '';
  for (const para of body.split(/\n{2,}/)) {
    if (!para.trim()) continue;
    const p = document.createElement('p');
    p.textContent = para.trim();
    bodyEl.appendChild(p);
  }
  document.getElementById('story-source').textContent =
    `From ${s.source} by ${s.author} (${s.year}) · public domain`;

  updateProgress();
  window.scrollTo({ top: 0, behavior: 'instant' });
  stopReading();
}

function updateProgress() {
  const graded = Object.keys(state.verdicts).filter(id => state.seeds.find(s => s.id === id)).length;
  document.getElementById('curate-progress').textContent = `${graded} / ${state.seeds.length}`;
}

function setVerdict(verdict) {
  const s = state.seeds[state.cursor];
  state.verdicts[s.id] = verdict;
  localStorage.setItem(VERDICT_KEY, JSON.stringify(state.verdicts));
  toast(verdict === 'approve' ? '✓ Approved' : '✗ Disapproved');
  state.cursor = (state.cursor + 1) % state.seeds.length;
  advance();
}

document.getElementById('btn-approve').onclick = () => setVerdict('approve');
document.getElementById('btn-disapprove').onclick = () => setVerdict('disapprove');
document.getElementById('btn-read-aloud').onclick = () => {
  if (speaking) stopReading(); else startReading();
};

// keyboard shortcuts
window.addEventListener('keydown', (e) => {
  if (e.target.matches('input,textarea')) return;
  if (e.key === 'a' || e.key === 'ArrowRight') {
    document.getElementById('btn-approve')?.click();
  } else if (e.key === 'd' || e.key === 'ArrowLeft') {
    document.getElementById('btn-disapprove')?.click();
  } else if (e.key === ' ') {
    e.preventDefault();
    document.getElementById('btn-read-aloud')?.click();
  }
});

// --- done view ---
function renderDone() {
  document.getElementById('curate-loading').hidden = true;
  document.getElementById('story').hidden = true;
  document.getElementById('done').hidden = false;
  document.title = 'Curate — done';
  document.body.style.cssText = '';

  const approved = Object.values(state.verdicts).filter(v => v === 'approve').length;
  const disapproved = Object.values(state.verdicts).filter(v => v === 'disapprove').length;
  document.getElementById('tally-approve').textContent = approved;
  document.getElementById('tally-disapprove').textContent = disapproved;

  // Per-story list
  const list = document.getElementById('verdict-list');
  list.innerHTML = '';
  for (const s of state.seeds) {
    const v = state.verdicts[s.id];
    const li = document.createElement('li');
    li.className = 'verdict-item';
    li.innerHTML = `
      <span class="verdict-mark ${v}">${v === 'approve' ? '✓' : v === 'disapprove' ? '✗' : '·'}</span>
      <span class="verdict-title">${s.title}</span>
      <span class="verdict-meta">${s.tradition} · ${s.minutes}m</span>
    `;
    list.appendChild(li);
  }

  updateProgress();
}

// --- export ---
function buildExport() {
  const out = {
    app: 'hero-tales',
    exported_at: new Date().toISOString(),
    total_seeds: state.seeds.length,
    approved: Object.keys(state.verdicts).filter(id => state.verdicts[id] === 'approve'),
    disapproved: Object.keys(state.verdicts).filter(id => state.verdicts[id] === 'disapprove'),
    detail: state.seeds.map(s => ({
      id: s.id,
      title: s.title,
      tradition: s.tradition,
      minutes: s.minutes,
      verdict: state.verdicts[s.id] || null,
    })),
  };
  return JSON.stringify(out, null, 2);
}

document.getElementById('btn-export').onclick = async () => {
  const json = buildExport();
  try {
    await navigator.clipboard.writeText(json);
    toast('📋 Copied to clipboard — paste into a chat with Claude');
  } catch {
    // Fallback: download as a file
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'hero-tales-verdicts.json';
    a.click(); URL.revokeObjectURL(url);
    toast('💾 Downloaded as JSON');
  }
};

document.getElementById('btn-share').onclick = async () => {
  const json = buildExport();
  // Try Web Share with files (iOS); fall back to share text; fall back to copy.
  const file = new File([json], 'hero-tales-verdicts.json', { type: 'application/json' });
  try {
    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      await navigator.share({ files: [file], title: 'Hero Tales verdicts' });
      return;
    }
  } catch {}
  try {
    await navigator.share({ title: 'Hero Tales verdicts', text: json });
  } catch {
    document.getElementById('btn-export').click();
  }
};

document.getElementById('btn-restart').onclick = () => {
  if (!confirm('Clear all verdicts and start over?')) return;
  state.verdicts = {};
  localStorage.removeItem(VERDICT_KEY);
  state.cursor = 0;
  advance();
};

// --- build stamp ---
let _initialStamp = null;
async function checkBuildStamp() {
  try {
    const res = await fetch('build-stamp.json', { cache: 'no-store' });
    const { stamp } = await res.json();
    if (_initialStamp === null) {
      _initialStamp = stamp;
      const pill = document.getElementById('version-pill');
      if (pill) pill.textContent = `v${String(stamp).slice(-6)}`;
    }
  } catch {}
}
checkBuildStamp();

window.addEventListener('beforeunload', stopReading);

reflectEngine();
load().catch(err => {
  console.error(err);
  document.getElementById('curate-loading').textContent = 'Could not load. Check connection.';
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}
