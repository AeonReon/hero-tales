# Hero Tales — curation standard

The rules for what earns a place on the hero shelf, moved out of Claude's memory 2026-07-30 (side project, not part of the Days Out / Conscious Parenting primary workload). **Read this before adding any new source book.**

---

# 1. project_hero_tales

> Public-domain hero-tale library PWA. Static, light-cream, campfire mode. Folder APPS/hero-tales/, repo AeonReon/hero-tales, live hero-tales-coral.vercel.app.

Library of short, public-domain "stories of greatness" — Baldwin / Bulfinch / Aesop / Kingsley / Colum / Pyle / Hawthorne — for a parent to read aloud at a campfire or bedtime. Inspired by user's brief: "what the Romans and Greeks did with their children".

**Why:** User wanted a curated, one- or two-page hero-tale library — courage, cleverness, mercy, loyalty — pulled from the 19th-century children's-literature canon that already did the curation work. Funnel-shaped: parent picks a tale, reads aloud, or hits Read-Aloud (Web Speech / Daniel iOS voice).

**How to apply:**
- Folder: `APPS/hero-tales/`
- Repo: `https://github.com/AeonReon/hero-tales`
- Live: `https://hero-tales-coral.vercel.app/` (Vercel project name `hero-tales`)
- Stack: static PWA (HTML/CSS/JS only, no build step). Stories in `stories/library.json` + `stories/bodies.json`. Raw Gutenberg sources in `data/`. Parser at `scripts/build_library.py`.
- v1 = 81 stories from 3 Baldwin collections (Fifty Famous Stories Retold, Old Greek Stories, Hero Tales). Aesop / Bulfinch / Kingsley / Colum / Pyle / Hawthorne / Steel raw text already in `data/` waiting for parsers (each book just needs a `BOOKS` entry with `body_start_marker` + `allow_titles`).
- Design language: warm cream + amber/gold gradient outlines (matches `classical-mind` + `new-beginnings`). Campfire mode = bigger text + warmer glow.
- Sibling to `classical-mind` (which is the *system* — Trivium/Quadrivium curriculum). Hero Tales is the *stories*.

---

# 2. feedback_hero_tales_human_greatness

> For the hero-tales project, the primary library is STORIES OF HUMAN (or mythic-human) GREATNESS — heroes, founders, civilisation-builders, mythic warriors. Not animal fables. Not "rabbits playing guitars". This is a cultural-restoration project.

For APPS/hero-tales/, the primary library must be stories of HUMAN GREATNESS — courage, cunning, negotiation, vision, mercy, loyalty, civilisation-building. Greeks / Romans / Spartans / Celts / Norse / Founders. Real humans, mythic humans, demigods-as-humans, even talking-giants-vs-clever-human (Finn MacCool style). Some war is fine; not only war — also the vision and negotiation that built civilisations (founders holding ground, Franklin in Paris, Cincinnatus laying down power).

**Not allowed in the primary library:**
- Animal fables (Aesop tortoise-and-hare, ant-and-grasshopper)
- Talking-animal moral tales (Three Little Pigs, Henny-Penny, Titty Mouse)
- "Rabbits playing guitars" modern children's nonsense

**Why:** User's exact framing — "These stories have been largely removed from our society. Most stories are trash that only vaguely entertain. Having humans doing great things as a big part of children's consciousness is what builds civilisations. The stories they tell or what help them shape their future." This is a cultural-restoration project, not a content-completionist project.

**How to apply:**
- Each story carries a `section` field: `hero` (primary, default front door) or `fable` (secondary, "also useful but not the point").
- Don't reach for Project Gutenberg volume just because a book is public domain. Check the *content* matches "human doing something worth remembering" before adding the whole collection.
- When in doubt about a borderline story (Picciola — flower in prison; The Old Woman and her Pig — human + animals): err toward `fable`, not `hero`. The hero shelf is for unambiguous human-greatness only.
- Canonical sources for this shelf: Baldwin's Fifty Famous Stories + Old Greek Stories + Hero Tales; Lodge & Roosevelt's *Hero Tales from American History*; Lady Gregory's *Gods and Fighting Men* (Finn MacCool, Cuchulain); Plutarch's Lives (children's editions); Guerber's *Story of the Greeks/Romans*; Charles Morris's *Historical Tales* series; Kingsley's *The Heroes*; Colum's *Children's Homer*; Pyle's *King Arthur* & *Robin Hood*.

---

# 3. feedback_hero_tales_bravery_template

> The hero-tales shelf is BRAVERY / COURAGE / GREATNESS deeds only. Self-contained, who/what/where context, beginning-middle-end. Not wisdom anecdotes, not mid-narrative book chapters, not moral tales.

For APPS/hero-tales/ the primary "hero" shelf entry standard is the **Horatius template**:
- **A single human** (or mythic-human) named clearly at the start
- **A single great deed** of bravery, courage, vision, or moral greatness
- **Self-contained** — a stranger could read it cold and understand who this person is, what is happening, why it matters
- **Beginning, middle, end** — sets the scene, the deed unfolds, the deed completes
- **3–10 minute read** ideal

**REJECT — does not belong on the hero shelf:**
- Wisdom anecdotes (Diogenes choosing poverty, Socrates' small house, Miller of the Dee being contented, men of Gotham being silly) — no deed, just a quirky position
- Mid-narrative book chapters that reference characters introduced earlier (Lady Gregory's *Gods and Fighting Men* "The Reign of Bres" — you've walked into chapter 4)
- Moral tales where the "hero" is the lesson, not a deed (The Bell of Atri, The Inchcape Rock, The King and his Hawk)
- Sad / tragic / quirky vignettes (Mignon, Casabianca, Picciola, He Never Smiled Again)
- Origin / cosmology chapters with no human protagonist (Jupiter and his Mighty Company, The Golden Age)

**Why:** User exact words — "Horatius on the bridge was a good story, very short, but tales of bravery are what we are looking for. Or courage, or greatness. Not people who just want to do nothing, and weird odd bizarre people, or just weird tales about someone with no context. There's tales of it just jumped straight into something about someone but no context about who they are, what they're doing, what's going on. It just doesn't make any sense." — they read the v3 library and many stories failed this bar.

**How to apply:**
- When adding a new source: don't dump the whole book. Audit chapter-by-chapter against the template. Hide the misses with a `section: "hidden"` override.
- When unsure: err toward HIDE, not KEEP. The shelf earns more by being tight than by being big.
- Lady Gregory's *Gods and Fighting Men* is **archived** — its chapters fail standalone; do NOT re-include without per-chapter contextual rewrites.
- Plutarch's Lives (Boys' & Girls' edition), Lodge & Roosevelt, Haaren's Famous Men of the Middle Ages, and the bravery-deed portion of Baldwin's Fifty Famous Stories are the canonical sources that DO match the template — use these to keep adding.

---
