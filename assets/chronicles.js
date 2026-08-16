// chronicles.js — browse the three written shelves: works, stands, ledger.

const shelfParam = new URLSearchParams(location.search).get('shelf');
let shelf = CHRONICLE_SHELVES.includes(shelfParam) ? shelfParam : 'feat';

renderAppbar({ back: 'index.html', title: SHELVES[shelf].name });

function render() {
  const sh = SHELVES[shelf];
  document.getElementById('shelf-title').textContent = sh.name;
  document.getElementById('shelf-blurb').textContent = sh.blurb;
  document.querySelector('.appbar .brand').textContent = sh.name;
  document.getElementById('ledger-warning').hidden = shelf !== 'ledger';

  document.getElementById('shelf-switch').innerHTML = CHRONICLE_SHELVES.map(key => {
    const s = SHELVES[key];
    return `<button type="button" class="shelf-btn${key === shelf ? ' active' : ''}" data-shelf="${key}"
              style="--c1:${s.c};--c2:${s.cd};">${s.glyph} ${esc(s.name)}</button>`;
  }).join('');
  document.querySelectorAll('.shelf-btn').forEach(b => {
    b.onclick = () => {
      shelf = b.dataset.shelf;
      history.replaceState(null, '', `chronicles.html?shelf=${shelf}`);
      render();
    };
  });

  const list = Keeper.keep(window.CHRONICLES || []).filter(c => c.shelf === shelf);
  const el = document.getElementById('chronicle-list');

  if (!list.length) {
    el.innerHTML = '<div class="empty-note">Nothing on this shelf. If you have put entries away, the shelf-keeper can bring them back.</div>';
    return;
  }

  el.innerHTML = list.map(c => `
    <a href="chronicle.html?id=${encodeURIComponent(c.id)}" class="rtile" style="--c:${c.color};--cd:${c.colorDeep};">
      <span class="rtile-photo"><span class="rtile-ic">${svgIcon(c.icon)}</span></span>
      <span class="rtile-body">
        <span class="rtile-name">${esc(c.title)}</span>
        <span class="rtile-tagline">${esc(c.kicker)}</span>
        <span class="rtile-count">${esc(c.where)} · ${esc(c.when)}</span>
      </span>
      <span class="rtile-chev" aria-hidden="true">→</span>
    </a>`).join('');
}

render();
bootShell();
