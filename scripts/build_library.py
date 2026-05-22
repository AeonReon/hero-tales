#!/usr/bin/env python3
"""Build the unified hero-tales library from Project Gutenberg sources.

Reads /data/*.txt, parses each book into its constituent stories, writes:
  /stories/<source-slug>.json   per-source files
  /stories/library.json         unified index (all stories, alphabetical by title)

All sources here are public-domain works published before 1929 (US PD threshold).
"""

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA_DIR = ROOT / "data"
OUT_DIR = ROOT / "stories"
OUT_DIR.mkdir(parents=True, exist_ok=True)


# ---------- text cleanup ----------

SMALL_WORDS = {
    "a", "an", "and", "as", "at", "but", "by", "for", "from",
    "in", "into", "of", "on", "or", "the", "to", "with", "his", "her",
}


def titlecase(s: str) -> str:
    s = s.strip().rstrip(".").rstrip(",")
    words = s.split()
    out = []
    for i, w in enumerate(words):
        wl = w.lower()
        if i != 0 and wl in SMALL_WORDS:
            out.append(wl)
        else:
            parts = wl.split("'")
            parts[0] = parts[0][:1].upper() + parts[0][1:]
            out.append("'".join(parts))
    return " ".join(out)


def clean_body(text: str) -> str:
    # Strip illustration markers
    text = re.sub(r"\[Illustration[^\]]*\]", "", text)
    # Strip syllabification hyphens (Eng-lish → English)
    text = re.sub(r"([a-zA-Z])-([a-zA-Z])", r"\1\2", text)
    # Strip 1896 pronunciation stress marks
    text = text.replace("´", "").replace("`", "")
    # _italic_ → italic (plain — markdown rendering optional later)
    text = re.sub(r"_([^_\n]+)_", r"\1", text)
    # Collapse runs of blank lines
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()


def slugify(s: str) -> str:
    s = s.lower()
    s = re.sub(r"[^a-z0-9]+", "-", s)
    return s.strip("-")


def estimate_minutes(words: int) -> int:
    return max(1, round(words / 150))


# ---------- parser ----------

def parse_book(book: dict) -> list[dict]:
    """Parse one Gutenberg book into a list of story dicts."""
    path = DATA_DIR / book["file"]
    raw = path.read_text(encoding="utf-8")

    # Locate body window
    body_start_marker = book.get("body_start_marker")
    body_end_marker = book.get("body_end_marker", "End of Project Gutenberg")
    if not body_start_marker:
        raise ValueError(f"{book['file']}: body_start_marker required")
    start_idx = raw.find(body_start_marker)
    if start_idx < 0:
        raise ValueError(f"{book['file']}: body_start_marker {body_start_marker!r} not found")
    end_idx = raw.find(body_end_marker, start_idx)
    if end_idx < 0:
        end_idx = len(raw)
    body = raw[start_idx:end_idx]

    # Story title regex — defaults to a line that is ALL CAPS + spaces + apostrophes + hyphens,
    # length 3..80, optionally trailing period.
    title_pat = book.get(
        "title_pattern",
        r"^([A-Z][A-Z '\-]{2,80}\.?)\s*$",
    )
    title_re = re.compile(title_pat, re.MULTILINE)

    # Find candidate title positions
    candidates = [(m.start(), m.end(), m.group(1).strip()) for m in title_re.finditer(body)]

    # Optional title allowlist (exact ALL-CAPS forms, no trailing period). If supplied, only
    # accept candidates whose normalised form is in this set. Catches TOC entries vs body titles.
    allow = book.get("allow_titles")
    if allow:
        allow_norm = {t.upper().rstrip(".").strip() for t in allow}
        candidates = [c for c in candidates if c[2].rstrip(".").strip().upper() in allow_norm]

    # Dedup: TOC and body both have ALL-CAPS titles. Keep last occurrence per title in body order.
    # We expect: first hit = TOC, second = body. So drop first occurrence of each title.
    seen = {}
    for idx, (start, end, t) in enumerate(candidates):
        key = t.rstrip(".").strip().upper()
        seen.setdefault(key, []).append(idx)
    keep_indices = set()
    for key, indices in seen.items():
        # If a title appears multiple times, the LAST occurrence is the body chapter heading.
        # (TOC appears earlier, sometimes a body header appears once.)
        keep_indices.add(indices[-1])
    candidates = [c for i, c in enumerate(candidates) if i in keep_indices]
    candidates.sort()  # by start position

    tradition_map = book.get("tradition_map", {})
    default_tradition = book.get("default_tradition", "Mixed")

    stories = []
    for i, (start, end, raw_title) in enumerate(candidates):
        body_start_i = end
        body_end_i = candidates[i + 1][0] if i + 1 < len(candidates) else len(body)
        story_body = clean_body(body[body_start_i:body_end_i])

        title = titlecase(raw_title)

        words = len(story_body.split())
        if words < book.get("min_words", 100):
            continue

        tradition = tradition_map.get(title, default_tradition)

        stories.append({
            "id": f"{book['source_slug']}__{slugify(title)}",
            "title": title,
            "body": story_body,
            "source": book["source"],
            "author": book["author"],
            "year": book["year"],
            "tradition": tradition,
            "word_count": words,
            "minutes": estimate_minutes(words),
            "public_domain": True,
            "gutenberg_id": book["gutenberg_id"],
        })

    return stories


# ---------- per-source classification ----------

BALDWIN_FIFTY_TRADITION = {
    "King Alfred and the Cakes": "English",
    "King Alfred and the Beggar": "English",
    "King Canute on the Seashore": "English",
    "The Sons of William the Conqueror": "English",
    "The White Ship": "English",
    "He Never Smiled Again": "English",
    "King John and the Abbot": "English",
    "A Story of Robin Hood": "English",
    "Bruce and the Spider": "Scottish",
    "The Black Douglas": "Scottish",
    "Three Men of Gotham": "English",
    "Other Wise Men of Gotham": "English",
    "The Miller of the Dee": "English",
    "Sir Philip Sidney": "English",
    "The Ungrateful Soldier": "European",
    "Sir Humphrey Gilbert": "English",
    "Sir Walter Raleigh": "English",
    "Pocahontas": "American",
    "George Washington and His Hatchet": "American",
    "Grace Darling": "English",
    "The Story of William Tell": "Swiss",
    "Arnold Winkelried": "Swiss",
    "The Bell of Atri": "Italian",
    "How Napoleon Crossed the Alps": "French",
    "The Story of Cincinnatus": "Roman",
    "The Story of Regulus": "Roman",
    "Cornelia's Jewels": "Roman",
    "Androclus and the Lion": "Roman",
    "Horatius at the Bridge": "Roman",
    "Julius Caesar": "Roman",
    "The Sword of Damocles": "Greek",
    "Damon and Pythias": "Greek",
    "A Laconic Answer": "Greek",
    "The Ungrateful Guest": "Greek",
    "Alexander and Bucephalus": "Greek",
    "Diogenes the Wise Man": "Greek",
    "The Brave Three Hundred": "Greek",
    "Socrates and His House": "Greek",
    "The King and His Hawk": "Asian",
    "Doctor Goldsmith": "English",
    "The Kingdoms": "Greek",
    "The Barmecide Feast": "Arabian",
    "The Endless Tale": "Asian",
    "The Blind Men and the Elephant": "Asian",
    "Maximilian and the Goose Boy": "European",
    "The Inchcape Rock": "Scottish",
    "Whittington and His Cat": "English",
    "Casabianca": "French",
    "Antonio Canova": "Italian",
    "Picciola": "French",
    "Mignon": "European",
}

BALDWIN_HERO_TRADITION = {
    "How Apollo Came to Parnassus": "Greek",
    "The Hunt in the Wood of Calydon": "Greek",
    "The Choice of Hercules": "Greek",
    "Alpheus and Arethusa": "Greek",
    "The Golden Apple": "Greek",
    "Paris and Oenone": "Greek",
    "Hesione": "Greek",
    "Paris and Helen": "Greek",
    "Iphigenia": "Greek",
    "The Hoard of the Elves": "Norse",
    "The Forging of Balmung": "Norse",
    "Idun and Her Apples": "Norse",
    "The Doom of the Mischief-maker": "Norse",
    "The Hunt in the Wood of Puelle": "Frankish",
    "Ogier the Dane and the Fairies": "Frankish",
    "How Charlemagne Crossed the Alps": "Frankish",
    "What Happened at Roncevaux": "Frankish",
}


BOOKS = [
    {
        "file": "baldwin-fifty.txt",
        "source": "Fifty Famous Stories Retold",
        "source_slug": "baldwin-fifty",
        "author": "James Baldwin",
        "year": 1896,
        "gutenberg_id": 18442,
        "body_start_marker": "KING ALFRED AND THE CAKES.",
        "tradition_map": BALDWIN_FIFTY_TRADITION,
        "default_tradition": "Mixed",
    },
    {
        "file": "baldwin-old-greek.txt",
        "source": "Old Greek Stories",
        "source_slug": "baldwin-old-greek",
        "author": "James Baldwin",
        "year": 1895,
        "gutenberg_id": 11582,
        "body_start_marker": "JUPITER AND HIS MIGHTY COMPANY",
        "default_tradition": "Greek",
        "allow_titles": list(BALDWIN_HERO_TRADITION.keys()) + [
            "Jupiter and His Mighty Company",
            "The Golden Age",
            "The Story of Prometheus",
            "The Flood",
            "The Story of Io",
            "The Wonderful Weaver",
            "The Lord of the Silver Bow",
            "Admetus and Alcestis",
            "Cadmus and Europa",
            "The Quest of Medusa's Head",
            "The Story of Atalanta",
            "The Horse and the Olive",
            "The Adventures of Theseus",
            "The Wonderful Artisan",
            "The Cruel Tribute",
        ],
    },
    {
        "file": "baldwin-hero-tales.txt",
        "source": "Hero Tales",
        "source_slug": "baldwin-hero-tales",
        "author": "James Baldwin",
        "year": 1904,
        "gutenberg_id": 15616,
        "body_start_marker": "HOW APOLLO CAME TO PARNASSUS",
        "tradition_map": BALDWIN_HERO_TRADITION,
        "default_tradition": "Greek",
        "allow_titles": list(BALDWIN_HERO_TRADITION.keys()),
    },
]


def main():
    all_stories = []
    for book in BOOKS:
        try:
            stories = parse_book(book)
        except Exception as e:
            print(f"ERROR parsing {book['file']}: {e}")
            continue
        out = OUT_DIR / f"{book['source_slug']}.json"
        out.write_text(json.dumps(stories, indent=2, ensure_ascii=False), encoding="utf-8")
        all_stories.extend(stories)
        print(f"  {book['source']:<32}  {len(stories):>3} stories")

    # Unified index: drop body for index, keep summary fields
    index = [
        {k: v for k, v in s.items() if k != "body"}
        for s in all_stories
    ]
    index.sort(key=lambda s: s["title"].lower())
    (OUT_DIR / "library.json").write_text(
        json.dumps({"stories": index, "count": len(index)}, indent=2, ensure_ascii=False),
        encoding="utf-8",
    )
    print(f"\nTotal: {len(all_stories)} stories  →  stories/library.json")

    # Also a per-story files map keyed by id for the runtime to fetch one body at a time
    bodies = {s["id"]: s["body"] for s in all_stories}
    (OUT_DIR / "bodies.json").write_text(
        json.dumps(bodies, indent=2, ensure_ascii=False), encoding="utf-8"
    )

    # Traditions summary
    by_trad = {}
    for s in all_stories:
        by_trad.setdefault(s["tradition"], 0)
        by_trad[s["tradition"]] += 1
    print("\nBy tradition:")
    for t, n in sorted(by_trad.items(), key=lambda x: -x[1]):
        print(f"  {t:<15} {n}")


if __name__ == "__main__":
    main()
