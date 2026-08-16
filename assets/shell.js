// shell.js — shared plumbing for every page.
//
// Icons, the shelf definitions, the "kept / put away" store that powers the
// purge, and the small helpers the pages share. Loaded before every page
// script. Nothing here touches the DOM until a page asks it to.

const APP_VERSION = 'v10';

/* ------------------------------------------------------------------ helpers */

const esc = s => String(s == null ? '' : s)
  .replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

// Day number since the epoch — the feed picks by this, so a card stands all
// day and turns over at midnight local time.
const dayNum = () => Math.floor((Date.now() - new Date().getTimezoneOffset() * 60000) / 86400000);

// Deterministic pick with an offset, so Shuffle walks the list.
const pickBy = (arr, off) => (arr && arr.length)
  ? arr[(((dayNum() + off) % arr.length) + arr.length) % arr.length]
  : null;

function store(key, fallback) {
  try { const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; }
  catch { return fallback; }
}
function save(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch {}
}

function toast(msg, ms = 2200) {
  document.querySelectorAll('.toast').forEach(t => t.remove());
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), ms);
}

/* --------------------------------------------------------------- the shelves */

// One definition of each shelf, used by the launcher tiles, the browse pages,
// the readers and the daily feed, so a colour or a name only changes here.
const SHELVES = {
  hero:   { key: 'hero',   name: 'Hero Tales',   glyph: '⚔️', icon: 'sword',
            c: '#B4560F', cd: '#7A360A',
            blurb: 'The tales themselves, in the words of the storytellers who first put them into a child-readable form.' },
  fable:  { key: 'fable',  name: 'Fables',       glyph: '🦊', icon: 'fox',
            c: '#65A30D', cd: '#3F6B08',
            blurb: 'Aesop and the animal folk-tales — short, sharp, and each one carrying its point without a sermon.' },
  feat:   { key: 'feat',   name: 'Great Works',  glyph: '🏗', icon: 'tower',
            c: '#2F9E77', cd: '#1F6B52',
            blurb: 'Things built. The canal, the bridge, the cable, the dome — and what they actually cost the men who made them.' },
  stand:  { key: 'stand',  name: 'The Stands',   glyph: '🛡', icon: 'shield',
            c: '#8C2F39', cd: '#5E1F26',
            blurb: 'Defence, endurance and daring — weighted toward the ones that are not in every book.' },
  ledger: { key: 'ledger', name: 'The Ledger',   glyph: '⚖️', icon: 'scales',
            c: '#4F5560', cd: '#2B3038',
            blurb: 'Great power turned to destruction. Monumental achievements with a monstrous price. Told as warnings, not as models.' },
};

const CHRONICLE_SHELVES = ['feat', 'stand', 'ledger'];

function shelfOf(key) { return SHELVES[key] || SHELVES.hero; }

/* -------------------------------------------------- kept / put away (purge) */
//
// The shelf-keeper. Anything the owner does not want on the shelf goes in
// here by id, and every list in the app filters against it. Nothing is
// deleted from the data files — a put-away item can always be brought back
// from keep.html, and the list can be exported so the ids can be baked into
// a build if wanted.

const AWAY_KEY = 'ht-away';

const Keeper = {
  ids() { return store(AWAY_KEY, []); },
  set() { return new Set(this.ids()); },
  isAway(id) { return this.set().has(id); },
  putAway(id) {
    const ids = this.ids();
    if (!ids.includes(id)) { ids.push(id); save(AWAY_KEY, ids); }
  },
  bringBack(id) { save(AWAY_KEY, this.ids().filter(x => x !== id)); },
  toggle(id) {
    if (this.isAway(id)) { this.bringBack(id); return false; }
    this.putAway(id); return true;
  },
  clear() { save(AWAY_KEY, []); },
  count() { return this.ids().length; },
  // Filter any list of {id: ...} down to what is still on the shelf.
  keep(list) { const away = this.set(); return list.filter(x => !away.has(x.id)); },
};

/* --------------------------------------------------------------------- icons */

const ICONS = {
  sword: `<g><path d="M32 4 L38 14 V38 H26 V14 Z" fill="currentColor"/><rect x="14" y="38" width="36" height="6" rx="3" fill="currentColor"/><rect x="29" y="44" width="6" height="12" fill="currentColor"/><circle cx="32" cy="58" r="4.5" fill="currentColor"/></g>`,
  shield: `<g><path d="M32 6 L54 14 V32 C54 44 44 54 32 58 C20 54 10 44 10 32 V14 Z" fill="currentColor"/><path d="M32 14 L46 19 V32 C46 40 40 47 32 50 Z" fill="rgba(255,255,255,.28)"/></g>`,
  scales: `<g><line x1="32" y1="10" x2="32" y2="52" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/><line x1="12" y1="19" x2="52" y2="19" stroke="currentColor" stroke-width="3.5" stroke-linecap="round"/><circle cx="32" cy="10" r="3.5" fill="currentColor"/><rect x="22" y="52" width="20" height="5" rx="2" fill="currentColor"/><path d="M12 19 L5 33 L19 33 Z" fill="currentColor"/><path d="M52 19 L45 33 L59 33 Z" fill="currentColor"/></g>`,
  fox: `<g><path d="M12 18 L20 34 L12 40 Z" fill="currentColor"/><path d="M52 18 L44 34 L52 40 Z" fill="currentColor"/><path d="M32 20 C44 20 50 30 50 38 C50 48 42 56 32 56 C22 56 14 48 14 38 C14 30 20 20 32 20 Z" fill="currentColor"/><circle cx="25" cy="36" r="2.8" fill="rgba(0,0,0,.35)"/><circle cx="39" cy="36" r="2.8" fill="rgba(0,0,0,.35)"/><path d="M32 44 L28 48 H36 Z" fill="rgba(0,0,0,.35)"/></g>`,
  tower: `<g><path d="M25 22 H39 L43 50 H21 Z" fill="currentColor"/><rect x="22" y="16" width="20" height="6" rx="2" fill="currentColor"/><path d="M26 16 L32 6 L38 16 Z" fill="currentColor"/><rect x="17" y="50" width="30" height="6" rx="2" fill="currentColor"/><g stroke="currentColor" stroke-width="3" stroke-linecap="round" opacity=".75"><line x1="14" y1="14" x2="6" y2="11"/><line x1="50" y1="14" x2="58" y2="11"/></g><rect x="28" y="28" width="8" height="9" rx="2" fill="rgba(0,0,0,.28)"/></g>`,
  canal: `<g><path d="M6 26 H58 V38 H6 Z" fill="currentColor" opacity=".9"/><path d="M6 40 Q 16 46 26 40 T 46 40 T 58 40 V52 H6 Z" fill="currentColor"/><rect x="14" y="14" width="6" height="14" fill="currentColor"/><rect x="44" y="14" width="6" height="14" fill="currentColor"/><path d="M6 32 H58" stroke="rgba(255,255,255,.45)" stroke-width="2"/></g>`,
  bridge: `<g><path d="M4 44 Q 32 12 60 44" fill="none" stroke="currentColor" stroke-width="4"/><rect x="4" y="44" width="56" height="5" rx="1.5" fill="currentColor"/><g stroke="currentColor" stroke-width="2.5"><line x1="16" y1="34" x2="16" y2="44"/><line x1="24" y1="28" x2="24" y2="44"/><line x1="32" y1="26" x2="32" y2="44"/><line x1="40" y1="28" x2="40" y2="44"/><line x1="48" y1="34" x2="48" y2="44"/></g><rect x="6" y="49" width="6" height="9" fill="currentColor"/><rect x="52" y="49" width="6" height="9" fill="currentColor"/></g>`,
  cable: `<g><circle cx="32" cy="32" r="20" fill="none" stroke="currentColor" stroke-width="4"/><ellipse cx="32" cy="32" rx="9" ry="20" fill="none" stroke="currentColor" stroke-width="3"/><line x1="12" y1="32" x2="52" y2="32" stroke="currentColor" stroke-width="3"/><circle cx="14" cy="24" r="4" fill="currentColor"/><circle cx="50" cy="40" r="4" fill="currentColor"/></g>`,
  rail: `<g><rect x="14" y="6" width="5" height="52" fill="currentColor"/><rect x="45" y="6" width="5" height="52" fill="currentColor"/><g fill="currentColor" opacity=".85"><rect x="8" y="14" width="48" height="5" rx="1.5"/><rect x="8" y="28" width="48" height="5" rx="1.5"/><rect x="8" y="42" width="48" height="5" rx="1.5"/></g></g>`,
  dome: `<g><path d="M12 40 a20 20 0 0 1 40 0 Z" fill="currentColor"/><rect x="10" y="40" width="44" height="5" rx="1.5" fill="currentColor"/><rect x="14" y="46" width="36" height="10" rx="1.5" fill="currentColor" opacity=".9"/><rect x="30" y="10" width="4" height="8" fill="currentColor"/><path d="M32 22 v18" stroke="rgba(255,255,255,.4)" stroke-width="2"/></g>`,
  road: `<g><path d="M22 58 L28 8 H36 L42 58 Z" fill="currentColor"/><g fill="rgba(255,255,255,.75)"><rect x="31" y="14" width="2.5" height="7"/><rect x="31" y="26" width="2.5" height="8"/><rect x="31" y="39" width="2.5" height="9"/></g></g>`,
  dam: `<g><path d="M8 20 Q 32 30 56 20 V50 H8 Z" fill="currentColor"/><path d="M8 14 Q 32 24 56 14 V22 Q 32 32 8 22 Z" fill="currentColor" opacity=".7"/><g stroke="rgba(255,255,255,.5)" stroke-width="2"><line x1="20" y1="26" x2="20" y2="50"/><line x1="32" y1="28" x2="32" y2="50"/><line x1="44" y1="26" x2="44" y2="50"/></g></g>`,
  wave: `<g><path d="M4 26 Q 14 16 24 26 T 44 26 T 60 26" fill="none" stroke="currentColor" stroke-width="4.5" stroke-linecap="round"/><path d="M4 40 Q 14 30 24 40 T 44 40 T 60 40" fill="none" stroke="currentColor" stroke-width="4.5" stroke-linecap="round"/><path d="M4 52 Q 14 42 24 52 T 44 52 T 60 52" fill="none" stroke="currentColor" stroke-width="4.5" stroke-linecap="round"/></g>`,
  star: `<polygon points="32,5 39,24 59,24 43,36 49,55 32,43 15,55 21,36 5,24 25,24" fill="currentColor"/>`,
  temple: `<g><polygon points="32,8 56,22 8,22" fill="currentColor"/><rect x="10" y="24" width="44" height="5" rx="1.5" fill="currentColor"/><g fill="currentColor" opacity=".92"><rect x="14" y="31" width="5" height="19"/><rect x="24" y="31" width="5" height="19"/><rect x="35" y="31" width="5" height="19"/><rect x="45" y="31" width="5" height="19"/></g><rect x="8" y="52" width="48" height="5" rx="1.5" fill="currentColor"/></g>`,
  arch: `<g><path d="M12 54 V30 a20 20 0 0 1 40 0 V54 h-8 V30 a12 12 0 0 0 -24 0 V54 Z" fill="currentColor"/><rect x="8" y="54" width="48" height="5" rx="1.5" fill="currentColor"/></g>`,
  flame: `<g><path d="M32 6 C 38 18 48 22 48 36 C 48 47 41 56 32 56 C 23 56 16 47 16 36 C 16 26 24 22 26 14 C 30 20 30 22 32 6 Z" fill="currentColor"/><path d="M32 30 C 35 36 38 38 38 43 C 38 48 35 52 32 52 C 29 52 26 48 26 43 C 26 38 29 36 32 30 Z" fill="rgba(255,255,255,.55)"/></g>`,
  snow: `<g stroke="currentColor" stroke-width="3.5" stroke-linecap="round"><line x1="32" y1="8" x2="32" y2="56"/><line x1="11" y1="20" x2="53" y2="44"/><line x1="53" y1="20" x2="11" y2="44"/></g><g stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M26 14 L32 20 L38 14"/><path d="M26 50 L32 44 L38 50"/></g>`,
  horse: `<g><path d="M14 56 V38 C14 26 22 18 34 18 L38 10 L44 16 L52 14 L48 24 C52 30 52 36 50 42 L46 56 H38 L40 42 L28 40 L26 56 Z" fill="currentColor"/><circle cx="42" cy="20" r="2" fill="#fff"/></g>`,
  compass: `<g><circle cx="32" cy="32" r="24" fill="none" stroke="currentColor" stroke-width="4"/><polygon points="32,14 38,32 32,50 26,32" fill="currentColor"/><circle cx="32" cy="32" r="3.5" fill="#fff"/></g>`,
  anchor: `<g><circle cx="32" cy="12" r="6" fill="none" stroke="currentColor" stroke-width="4"/><line x1="32" y1="18" x2="32" y2="54" stroke="currentColor" stroke-width="4.5" stroke-linecap="round"/><line x1="20" y1="26" x2="44" y2="26" stroke="currentColor" stroke-width="4" stroke-linecap="round"/><path d="M12 38 C 12 50 22 56 32 56 C 42 56 52 50 52 38" fill="none" stroke="currentColor" stroke-width="4.5" stroke-linecap="round"/></g>`,
  rocket: `<g><path d="M32 6 C 40 16 44 28 44 40 H20 C 20 28 24 16 32 6 Z" fill="currentColor"/><circle cx="32" cy="26" r="5" fill="#fff" opacity=".8"/><path d="M20 40 L10 52 L20 48 Z" fill="currentColor"/><path d="M44 40 L54 52 L44 48 Z" fill="currentColor"/><path d="M28 44 L32 58 L36 44 Z" fill="rgba(255,255,255,.6)"/></g>`,
  chain: `<g stroke="currentColor" stroke-width="5" fill="none" stroke-linecap="round"><path d="M22 26 L18 30 a9 9 0 0 0 13 13 L35 39"/><path d="M42 38 L46 34 a9 9 0 0 0 -13 -13 L29 25"/></g><line x1="26" y1="38" x2="38" y2="26" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>`,
  crown: `<g><path d="M8 46 L14 18 L24 32 L32 12 L40 32 L50 18 L56 46 Z" fill="currentColor"/><rect x="8" y="48" width="48" height="7" rx="2" fill="currentColor"/><circle cx="32" cy="34" r="3" fill="rgba(0,0,0,.3)"/></g>`,
  wall: `<g fill="currentColor"><rect x="6" y="16" width="16" height="9" rx="1.5"/><rect x="24" y="16" width="16" height="9" rx="1.5"/><rect x="42" y="16" width="16" height="9" rx="1.5"/><rect x="6" y="27" width="25" height="9" rx="1.5"/><rect x="33" y="27" width="25" height="9" rx="1.5"/><rect x="6" y="38" width="16" height="9" rx="1.5"/><rect x="24" y="38" width="16" height="9" rx="1.5"/><rect x="42" y="38" width="16" height="9" rx="1.5"/></g>`,
  furnace: `<g><path d="M16 56 V26 L32 10 L48 26 V56 Z" fill="currentColor"/><path d="M26 56 V40 a6 6 0 0 1 12 0 V56 Z" fill="rgba(0,0,0,.32)"/><rect x="12" y="56" width="40" height="5" rx="2" fill="currentColor"/></g>`,
  book: `<g><path d="M8 12 C 18 8 26 8 32 14 V56 C 26 50 18 50 8 54 Z" fill="currentColor"/><path d="M56 12 C 46 8 38 8 32 14 V56 C 38 50 46 50 56 54 Z" fill="currentColor" opacity=".78"/></g>`,
  books: `<g><rect x="8" y="44" width="48" height="12" rx="1.5" fill="currentColor"/><rect x="12" y="30" width="40" height="12" rx="1.5" fill="currentColor" opacity=".85"/><rect x="20" y="10" width="24" height="20" rx="1.5" fill="currentColor" opacity=".7"/></g>`,
  dice: `<g><rect x="11" y="11" width="42" height="42" rx="9" fill="none" stroke="currentColor" stroke-width="4"/><g fill="currentColor"><circle cx="23" cy="23" r="4"/><circle cx="41" cy="23" r="4"/><circle cx="32" cy="32" r="4"/><circle cx="23" cy="41" r="4"/><circle cx="41" cy="41" r="4"/></g></g>`,
  broom: `<g><line x1="42" y1="10" x2="26" y2="34" stroke="currentColor" stroke-width="5" stroke-linecap="round"/><path d="M14 38 L30 30 L38 44 L20 54 Z" fill="currentColor"/><g stroke="rgba(255,255,255,.55)" stroke-width="2"><line x1="20" y1="40" x2="26" y2="50"/><line x1="26" y1="37" x2="32" y2="47"/></g></g>`,
  fire: `<g><path d="M32 4 C 36 16 46 20 46 34 C 46 46 40 58 32 58 C 24 58 18 46 18 34 C 18 24 26 20 28 12 C 31 18 30 20 32 4 Z" fill="currentColor"/></g>`,
};

function svgIcon(name, cls) {
  return `<svg viewBox="0 0 64 64" class="${cls || ''}" aria-hidden="true">${ICONS[name] || ICONS.star}</svg>`;
}

/* ------------------------------------------------------------- read aloud */
//
// One wrapper over tts.js so every page drives the voice the same way, and
// pages that do not load tts.js degrade to a disabled button rather than an
// error. Must be called from inside a click handler — iOS will not start
// audio otherwise.

function readAloud(text, btn, labels = {}) {
  const play = labels.play || '\u25B6\uFE0E Read aloud';
  const stop = labels.stop || '\u23F9 Stop';
  if (typeof TTS === 'undefined') { toast('Read-aloud is not available here'); return; }
  if (TTS.isPlaying()) {
    TTS.stop();
    if (btn) btn.textContent = play;
    return;
  }
  if (btn) btn.textContent = stop;
  TTS.play(text, { onStop: () => { if (btn) btn.textContent = play; } });
}

function ttsStop() { if (typeof TTS !== 'undefined') TTS.stop(); }

/* --------------------------------------------------------------- app bar UI */

function renderAppbar({ back = null, title = 'Hero Tales' } = {}) {
  const left = back
    ? `<a href="${back}" class="abback">← <span>Back</span></a>`
    : `<img src="icon-192.png" alt="" class="abico">`;
  document.body.insertAdjacentHTML('afterbegin', `
    <div class="appbar"><div class="row">
      ${left}
      <span class="brand">${esc(title)}</span>
      <button class="hbtn" type="button" onclick="openInstall()" title="Add to Home Screen">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v12M12 3l-4 4M12 3l4 4"/><path d="M4 13v6a2 2 0 002 2h12a2 2 0 002-2v-6"/></svg>
        <span>Get app</span>
      </button>
    </div></div>`);
}

/* ------------------------------------------------------------- PWA + install */

let deferredInstallPrompt = null;
window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); deferredInstallPrompt = e; });

function openInstall() {
  if (deferredInstallPrompt) {
    deferredInstallPrompt.prompt();
    deferredInstallPrompt.userChoice.finally(() => { deferredInstallPrompt = null; });
    return;
  }
  alert('To add to your home screen:\n\niPhone/iPad — tap the Share icon in Safari, then "Add to Home Screen".\n\nAndroid — tap the ⋮ menu in Chrome, then "Add to Home screen".');
}
window.openInstall = openInstall;

function registerSW() {
  if (!('serviceWorker' in navigator)) return;
  let reloading = false;
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (reloading) return; reloading = true; location.reload();
  });
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js')
      .then(reg => { reg.update(); setInterval(() => reg.update(), 60000); })
      .catch(() => {});
  });
}

// The build stamp is the cache-busting signal — if it changes while the page
// is open, offer a reload rather than silently serving stale tales.
let _shellStamp = null;
async function shellCheckStamp() {
  try {
    const res = await fetch('build-stamp.json', { cache: 'no-store' });
    const { stamp } = await res.json();
    if (_shellStamp === null) {
      _shellStamp = stamp;
      const pill = document.getElementById('version-pill');
      if (pill) pill.textContent = APP_VERSION;
    } else if (stamp !== _shellStamp && !document.getElementById('refresh-banner')) {
      const b = document.createElement('div');
      b.id = 'refresh-banner';
      b.className = 'refresh-banner';
      b.textContent = '🔄 New tales available — tap to reload';
      b.onclick = () => location.reload();
      document.body.appendChild(b);
    }
  } catch {}
}

function bootShell() {
  const pill = document.getElementById('version-pill');
  if (pill) pill.textContent = APP_VERSION;
  registerSW();
  shellCheckStamp();
  setInterval(shellCheckStamp, 60000);
}
