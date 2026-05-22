# Hero Tales — Project Rules

A library of short, public-domain hero tales — for a parent to read aloud at a campfire, at bedtime, or whenever there's a quiet hour with children or teenagers. Inspired by what the Romans and Greeks did with their children: tell great stories of courage, cleverness, mercy and loyalty to inspire greatness.

## Voice and content rule

The stories are not commentary — they are the tales themselves, in the storytelling voice of the 19th-century editors who first put them into a child-readable form (Baldwin, Bulfinch, Kingsley, Colum). Don't moralise. Don't bowdlerise. Don't add modern editorial framing. The tales carry their own weight.

## Scope discipline

- **Public domain only.** Every story sourced from Project Gutenberg, pre-1929. Source attribution is shown on every story page.
- **Short.** Target 2–10 minutes read-aloud time. Longer chapters (Theseus, Quest of Medusa's Head) are included but marked honestly with read time so the user can choose.
- **No accounts, no cloud, no sign-in.** Local-only. Optional favourites in LocalStorage later.
- **Light and warm.** Cream / amber / gold. Never dark UI.
- **Read-aloud uses system voice.** Web Speech API speechSynthesis. Prefers a male UK English voice (Daniel on iOS) to match the storyteller register.

## Stack

- Plain HTML, CSS, vanilla JS. No build step. Static deploy.
- Stories live in `stories/library.json` (index, no bodies) and `stories/bodies.json` ({id: body}). Bodies fetched once at load.
- PWA via `manifest.json` and `sw.js`.
- Deploy: GitHub AeonReon → Vercel aeonreon (static site, no build command).

## Adding a new collection

1. Drop the Gutenberg `.txt` into `/data/` (use `pgXXXXX.txt` filename).
2. Add a `BOOKS` entry in `scripts/build_library.py`:
   - `body_start_marker`: an ALL-CAPS string that appears at the start of the first story body
   - `allow_titles`: list of TOC titles to whitelist (filters out license boilerplate and stray sub-headings)
   - `tradition_map`: optional `{title: tradition}` overrides
3. Run `python3 scripts/build_library.py`. It rebuilds `library.json` + `bodies.json`.
4. Commit + push. Vercel auto-deploys.

## Design

Same vocabulary as Classical Mind and New Beginnings:
- Warm cream background with soft amber/gold sunbursts
- System sans throughout, heavy weights, tight letter-spacing
- Gradient-outline tiles in the tradition's accent colour (Greek deep blue, Roman oxblood, Norse ice blue, etc.)
- Campfire mode: same warm cream but bigger text, fewer controls — for when the user is the storyteller
- Read-aloud button on every story page
