// Hero Tales — story page.

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
};

function tradStyle(tradition) {
  const v = TRADITION_VARS[tradition] || TRADITION_VARS.Mixed;
  return `--c1: var(${v[0]}); --c2: var(${v[1]});`;
}

const params = new URLSearchParams(location.search);
let currentId = params.get('id');
let libraryIndex = [];
let bodies = {};
let currentBody = '';
let currentTitle = '';

async function loadAll() {
  const [libRes, bodyRes] = await Promise.all([
    fetch('stories/library.json', { cache: 'no-store' }),
    fetch('stories/bodies.json', { cache: 'no-store' }),
  ]);
  libraryIndex = (await libRes.json()).stories;
  bodies = await bodyRes.json();

  if (!currentId || !bodies[currentId]) currentId = pickRandomId();
  showStory(currentId);
}

function pickRandomId() {
  // Pick from the same section as the current story (hero/fable) so "Another tale" stays on-shelf.
  const currentMeta = libraryIndex.find(s => s.id === currentId);
  const section = (currentMeta && currentMeta.section) || localStorage.getItem('ht-section') || 'hero';
  const pool = libraryIndex.filter(s => (s.section || 'hero') === section);
  return pool[Math.floor(Math.random() * pool.length)].id;
}

function showStory(id) {
  const meta = libraryIndex.find(s => s.id === id);
  if (!meta) return;
  const body = bodies[id] || '';
  currentId = id;
  currentBody = body;
  currentTitle = meta.title;

  document.title = `${meta.title} — Hero Tales`;
  history.replaceState(null, '', `?id=${encodeURIComponent(id)}`);

  document.body.style.cssText = tradStyle(meta.tradition);
  document.getElementById('story-tradition').textContent = meta.tradition;
  document.getElementById('story-title').textContent = meta.title;
  document.getElementById('story-meta').textContent =
    `${meta.minutes} min read · ${meta.word_count.toLocaleString()} words`;

  const bodyEl = document.getElementById('story-body');
  bodyEl.innerHTML = '';
  for (const para of body.split(/\n{2,}/)) {
    if (!para.trim()) continue;
    const p = document.createElement('p');
    p.textContent = para.trim();
    bodyEl.appendChild(p);
  }

  document.getElementById('story-source').textContent =
    `From ${meta.source} by ${meta.author} (${meta.year}) · public domain via Project Gutenberg`;

  window.scrollTo({ top: 0, behavior: 'instant' });
  stopReading();
}

// --- read aloud (via TTS module: Echo / Kokoro on Mac mini, falls back to device voice) ---
const ENGINE_KEY = 'ht-engine';
let engineMode = localStorage.getItem(ENGINE_KEY) || 'echo';  // 'echo' | 'web'
let speaking = false;
const readBtn = () => document.getElementById('read-aloud');
const voiceBtn = () => document.getElementById('voice-toggle');
const toastEl = () => document.getElementById('voice-toast');

function reflectEngine() {
  TTS.setEngineMode(engineMode);
  const b = voiceBtn();
  if (engineMode === 'echo') {
    b.textContent = '🌐 Echo';
    b.classList.add('echo');
    b.title = 'Reading with Echo (Kokoro on Mac mini) — tap to switch to device voice';
  } else {
    b.textContent = '📱 System';
    b.classList.remove('echo');
    b.title = 'Reading with the device system voice — tap to switch to Echo';
  }
}

function showToast(msg) {
  const t = toastEl();
  t.textContent = msg;
  t.hidden = false;
  clearTimeout(t._timer);
  t._timer = setTimeout(() => { t.hidden = true; }, 2200);
}

function stopReading() {
  TTS.stop();
  speaking = false;
  const b = readBtn();
  b.textContent = '▶︎ Read aloud';
  b.classList.remove('speaking');
}

function startReading() {
  // Build the script: title + body, with paragraph breaks preserved.
  const text = `${currentTitle}. ${currentBody}`;
  speaking = true;
  const b = readBtn();
  b.textContent = '■ Stop';
  b.classList.add('speaking');

  TTS.play(text, {
    onStop: () => {
      speaking = false;
      const btn = readBtn();
      btn.textContent = '▶︎ Read aloud';
      btn.classList.remove('speaking');
    },
    onFallback: (reason) => {
      // Echo unreachable / offline — module already switched to 'web'.
      if (reason === 'offline') showToast('📱 Offline — using device voice');
      else showToast('📱 Echo unreachable — using device voice');
    },
  });
}

document.getElementById('read-aloud').onclick = () => {
  if (speaking) stopReading();
  else startReading();
};

document.getElementById('voice-toggle').onclick = () => {
  engineMode = engineMode === 'echo' ? 'web' : 'echo';
  localStorage.setItem(ENGINE_KEY, engineMode);
  reflectEngine();
  if (speaking) stopReading();  // changing engine mid-read sounds weird; user can re-press play
  showToast(engineMode === 'echo' ? '🌐 Echo voice' : '📱 Device voice');
};

reflectEngine();

document.getElementById('another').onclick = () => {
  let next;
  do { next = pickRandomId(); } while (next === currentId && libraryIndex.length > 1);
  showStory(next);
};

// --- campfire mode ---
const campfireBtn = document.getElementById('campfire-toggle');
campfireBtn.onclick = () => {
  const on = document.body.classList.toggle('campfire');
  campfireBtn.setAttribute('aria-pressed', on ? 'true' : 'false');
  campfireBtn.textContent = on ? '✕ Exit campfire' : '🔥 Campfire';
};

// Stop speech when leaving page
window.addEventListener('beforeunload', stopReading);

loadAll().catch(err => {
  console.error(err);
  document.getElementById('story-title').textContent = 'Could not load story';
});

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
    } else if (stamp !== _initialStamp) {
      const b = document.createElement('div');
      b.className = 'refresh-banner';
      b.textContent = '🔄 New tales available — tap to reload';
      b.onclick = () => location.reload();
      document.body.appendChild(b);
    }
  } catch {}
}
checkBuildStamp();
setInterval(checkBuildStamp, 60000);

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}
