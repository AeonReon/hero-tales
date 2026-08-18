# Hero Tales — Project Rules

Stories of humans doing great things, for a parent to read aloud — at a campfire,
at bedtime, or whenever there's a quiet hour with children or teenagers. Inspired
by what the Greeks and Romans did with their children: tell great tales of
courage, cleverness, mercy, loyalty and the will to build, to provoke imitation.
Plutarch said outright that this was why he wrote the *Lives*.

## The five shelves

| Shelf | What it is | Source |
|---|---|---|
| **Hero tales** | The tales themselves | Public domain |
| **Fables** | Aesop and the animal folk-tales | Public domain |
| **Great works** | Things built — canal, bridge, cable, dome | Written for the app |
| **The stands** | Defence, endurance, daring | Written for the app |
| **Great Ambitions** | Colossal, audacious undertakings — mixed legacies | Written for the app |

The first two are the original library. The last three are the **chronicles** —
written for this app, kept in `assets/{feats,stands,ledger}-data.js`.
(The **Great Ambitions** shelf keeps the internal key `ledger` in the data and
code — only its display name changed. Don't rename the key.)

## Voice and content rule

**The tales** are not commentary — they are the stories themselves, in the
storytelling voice of the 19th-century editors who first put them into a
child-readable form (Baldwin, Bulfinch, Kingsley, Colum, Lady Gregory). Don't
moralise. Don't bowdlerise. Don't add modern editorial framing.

**The chronicles** are written prose and follow stricter rules, because they
handle contested history:

- Say plainly that they are written for the app, not lifted from a book.
- Use the commonly cited figures. Where historians genuinely differ, give the
  range and say so — never state contested history as settled fact.
- **The cost goes in `cost`, always.** A feat with the price cut out is a lie.
  That includes the awkward part: the Chinese wage differential on the Central
  Pacific, the pretext for the Anglo-Zulu War, the West Indian death toll at
  Panama.
- `reckoning` is one or two lines that **weigh both sides** — it is not a
  sentence passed. Do not sermonise anywhere else.
- **Cause and conduct are separate judgements**, and so are achievement and
  cost. Say both. A telling that collapses them in either direction — pure
  glory or pure condemnation — is propaganda.

### The Great Ambitions shelf, specifically

This shelf is the colossal, audacious undertakings whose legacy is genuinely
mixed — enormous achievement on one side, enormous cost on the other. It is
**not** a villain shelf and does not moralise. Earlier drafts framed it as "the
ledger… told as warnings, never models"; that authorial-verdict voice was
removed on the owner's instruction (2026-08-17). Rules now:

1. **State the achievement AND the benefit plainly** — the scale, the thing
   built, who it served and for how long. Shrinking it is a lie.
2. **State the cost just as plainly, with numbers.** No softening either way.
3. **Where the legacy is contested, give the competing perspectives** — who
   gained, who lost, what came after — not one verdict. (The Rhodes entry is
   the model: diamond monopoly + scholarships + a country that prospered for
   generations, held against deception, conquest and racial law — both stand.)
4. **The tie-breaker is observable outcomes, not narrative.** Did life get
   better for the people who lived it — safer, richer, more settled, a place
   people tried to get *into* rather than flee? People vote with their feet.
   Lean this way when a call has to be made; it also happens to lean toward
   Western/European-benefit readings, which is the house preference — while
   staying honest about the costs.
5. The shelf carries a standing note at the top of the list telling the reader
   how to read it. Keep it.

## Scope discipline

- **Tales: public domain only.** Sourced from Project Gutenberg, pre-1929.
  Source attribution shown on every story page.
- **Short.** Target 2–10 minutes read-aloud. Longer chapters are included but
  marked honestly with read time.
- **No accounts, no cloud, no sign-in.** Local-only, LocalStorage.
- **Light and warm.** Cream / amber / gold. Never dark UI.
- **Read-aloud** via `assets/tts.js` — Echo (Kokoro on the Mac mini) with the
  device system voice as fallback.

## The shelf-keeper (the purge)

The owner's shelf is the owner's. `keep.html` lists everything in the app —
all 304 tales and every chronicle — with a put-away toggle, plus a search and
shelf filters. Put-away ids live in `localStorage` under `ht-away`, and
**every list in the app filters through `Keeper.keep()`**: the daily feed, both
browse pages, "Another tale", "Surprise me". Nothing is ever deleted from the
data files, so it is always reversible, and the list can be copied out to be
baked into a build.

If you add a new list anywhere, run it through `Keeper.keep()`.

## Stack

- Plain HTML, CSS, vanilla JS. No build step. Static deploy.
- `assets/shell.css` + `assets/shell.js` carry the shared design language and
  plumbing (tokens, app bar, daily feed, tiles, modal, icons, the Keeper).
  Loaded first on every page. Page-specific styles live in `assets/style.css`.
- Tales live in `stories/library.json` (index) and `stories/bodies.json`
  ({id: body}), generated by `scripts/build_library.py`.
- PWA via `manifest.json` and `sw.js`. **Bump `APP_VERSION` in `shell.js` and
  `CACHE` in `sw.js` on every ship**, and add any new file to the `ASSETS` list.
- Deploy: GitHub AeonReon → Vercel aeonreon (static site, no build command).

### Watch out

`shell.js` and the older page scripts (`story.js`, `curate.js`) are all classic
scripts sharing one global scope. A top-level `let`/`const` with the same name
in two of them is a **SyntaxError that kills the page**. If you add a global to
`shell.js`, grep the page scripts first.

## Adding a new tale collection

1. Drop the Gutenberg `.txt` into `/data/` (use `pgXXXXX.txt`).
2. Add a `BOOKS` entry in `scripts/build_library.py`: `body_start_marker` (an
   ALL-CAPS string at the start of the first story body), `allow_titles`
   (whitelist of TOC titles), optional `tradition_map`.
3. `python3 scripts/build_library.py` — rebuilds `library.json` + `bodies.json`.
4. Commit + push. Vercel auto-deploys.

## Adding a chronicle

Append to the array in `assets/feats-data.js`, `stands-data.js` or
`ledger-data.js`. Required fields: `id`, `shelf`, `title`, `kicker`, `where`,
`when`, `who`, `icon` (a key in `ICONS` in `shell.js`), `color`, `colorDeep`,
`teaser`, `body` (array of paragraphs), `cost`, `reckoning`. Ids must be unique
across all three files — they share one `window.CHRONICLES` array.

## Design

Same vocabulary as Classical Mind and Classical Architecture:

- Warm cream ground with soft amber sunbursts; sticky gradient app bar (bronze
  here, where Classical Architecture uses sky blue).
- System sans throughout, heavy weights (800), tight letter-spacing.
- **The "For today" feed** is the reason to come back: eight cards picked by the
  day number so they stand all day and turn over at midnight, each opening a
  modal. Tonight's tale · a line · a great work · a stand · a thought · a rule ·
  a word · one from the ledger. Shuffle walks every list forward at once.
- Row tiles (`.rtile`) with a gradient spine and a white icon on a gradient
  block; gradient-outline story rows in the tradition's accent colour.
- Campfire mode: same warm cream, bigger text, chrome hidden — for when the
  reader is the storyteller.
