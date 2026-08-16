// chronicle.js — read one chronicle.
//
// Same reading furniture as a story page, plus the two things that make this
// shelf different: the cost, stated separately so it cannot be skimmed past,
// and the reckoning, which is the only place in the app where the writer is
// allowed to say what a thing means.

const id = new URLSearchParams(location.search).get('id');
const all = window.CHRONICLES || [];
const entry = all.find(c => c.id === id) || all[0];

if (!entry) {
  document.getElementById('c-title').textContent = 'Not found';
} else {
  const sh = shelfOf(entry.shelf);
  const back = `chronicles.html?shelf=${entry.shelf}`;
  renderAppbar({ back, title: sh.name });
  document.title = `${entry.title} — Hero Tales`;

  document.body.style.setProperty('--c1', entry.color || sh.c);
  document.body.style.setProperty('--c2', entry.colorDeep || sh.cd);

  document.getElementById('c-shelf').textContent = `${sh.glyph} ${sh.name}`;
  document.getElementById('c-title').textContent = entry.title;
  document.getElementById('c-kicker').textContent = entry.kicker;
  document.getElementById('c-meta').textContent = `${entry.where} · ${entry.when}`;
  document.getElementById('c-body').innerHTML = entry.body.map(p => `<p>${esc(p)}</p>`).join('');

  if (entry.cost) {
    const el = document.getElementById('c-cost');
    el.innerHTML = `<div class="cr-label">The cost</div><p>${esc(entry.cost)}</p>`;
    el.hidden = false;
  }
  if (entry.reckoning) {
    const el = document.getElementById('c-reckoning');
    el.innerHTML = `<div class="cr-label">The reckoning</div><p>${esc(entry.reckoning)}</p>`;
    el.hidden = false;
  }

  document.getElementById('c-source').innerHTML =
    `<b>${esc(entry.who)}</b><br>Written for Hero Tales. Figures are the commonly cited ones and are hedged where historians disagree.`;

  // Read aloud gets the whole thing, cost and reckoning included — the cost is
  // not an appendix, it is part of the tale.
  const readText = [entry.title, entry.kicker, ...entry.body,
                    entry.cost ? `The cost. ${entry.cost}` : '',
                    entry.reckoning ? `The reckoning. ${entry.reckoning}` : '']
    .filter(Boolean).join('\n\n');

  const readBtn = document.getElementById('read-aloud');
  readBtn.onclick = () => readAloud(readText, readBtn);

  document.getElementById('another').onclick = () => {
    const pool = Keeper.keep(all).filter(c => c.id !== entry.id);
    if (!pool.length) { toast('Nothing else on the shelf'); return; }
    location.href = `chronicle.html?id=${encodeURIComponent(pool[Math.floor(Math.random() * pool.length)].id)}`;
  };

  const awayBtn = document.getElementById('put-away');
  function reflectAway() {
    const away = Keeper.isAway(entry.id);
    awayBtn.textContent = away ? '↩︎ Bring back' : 'Put away';
    awayBtn.classList.toggle('disapprove', away);
  }
  awayBtn.onclick = () => {
    const nowAway = Keeper.toggle(entry.id);
    reflectAway();
    toast(nowAway ? 'Put away — off every list' : 'Back on the shelf');
  };
  reflectAway();
}

bootShell();
