# Updated Milestone Project (Different from project details filled in the google form)

---

# Archive Explorer — Historical Media Search

**"Stop googling 'old historical photos' and getting stock images. Open Archive Explorer, type a word, and pull real records straight from the world's largest public archives."**

Archive Explorer is a web app for discovering historical images, videos, and texts from two of the biggest open cultural archives on the internet — the Internet Archive and Europeana. No account needed, no paywalls, no fluff. Just type, filter, and browse.

---

## The Problem

Finding genuine historical media online is weirdly hard. Search engines surface stock photos, Wikipedia thumbnails, or paywalled museum sites. The actual primary sources — digitised photographs from 1910, old silent films, scanned manuscripts — are sitting in massive public databases that most people don't know exist, and are even harder to actually search through in one place.

Archive Explorer puts both the Internet Archive and Europeana behind one clean interface, with filters that actually work.

---

## What It Does

**Dual-Source Search** — Switch between the Internet Archive and Europeana using a dropdown. One search bar, two entire archives worth of material.

**Media Type Filter** — Filter results to just images, videos, or text documents depending on what you're looking for.

**Time Period Filter** — Narrow results down to a specific era: Before 1900, 1900–1950, 1950–2000, or After 2000. The date filter is passed directly into the API query so results are genuinely scoped, not just labelled.

**Sort Options** — Sort by newest, oldest, or A–Z by title. The A–Z sort runs client-side so it works consistently across both APIs without relying on either platform's ranking.

**Paginated Results** — Each search loads 50 results. If there's more, a Show More button loads the next 50 from exactly where the last batch left off — using `&page=` for the Archive and `&start=` for Europeana.

**Result Cards** — Each result shows a thumbnail, title (cut to 2 lines), year, and source label. Clicking opens the original record directly on the archive's site.

---

## APIs Used

Both APIs below are **completely free** — the Internet Archive requires no key at all. Europeana requires a free key you can get in under a minute.

| API | What it's used for |
|-----|---------------------|
| **Internet Archive Advanced Search** | Searches across millions of digitised images, videos, audio, and texts from the Archive's public collection |
| **Europeana REST API** | Searches across cultural heritage items from thousands of European museums, galleries, libraries, and archives |

> The Europeana API key is stored in `config.js`. Get your own free key at [apis.europeana.eu](https://pro.europeana.eu/page/get-api) and replace the placeholder value on line 3.

---

## Tech Stack

Built entirely with **vanilla JavaScript** — no frameworks, no npm, no build tools. Just HTML, CSS, and JS running straight in the browser.

- **Fetch API** for all calls to both external APIs
- **encodeURIComponent()** to properly encode search terms and filter values into valid URL params
- **Client-side sort** using `.slice().sort()` for the A–Z title option
- All filtering, sorting, and pagination handled through URL construction — no backend needed

---

## Project Structure

```
Archive Explorer/
├── index.html       the page structure and dropdowns
├── style.css        all the styling
├── script.js        search logic, API calls, result rendering
├── config.js        API keys and base URLs — edit this file only
└── header-bg.png    the Parthenon painting used as the header background
```

---

## Features

**Done:**
- Dual-source search across Internet Archive and Europeana
- Media type filter (images, videos, texts) working on both APIs
- Time period filter with proper date range injection into the query string
- Sort by newest, oldest, and A–Z (client-side)
- 50 results per page with working Show More pagination
- Landscape Parthenon painting header with dark gradient overlay
- Clean card grid with image thumbnails, 2-line title clamp, year and source label
- All API params properly URL-encoded to prevent broken requests

**Could be added later:**
- Save or bookmark individual results
- Side-by-side comparison of two items
- Download link for public domain items
- Keyboard navigation through the result grid

---

## Author

**URANSH GAUTAM**

Web & Applications — 2025

[github.com/Uransh-Gautam](https://github.com/Uransh-Gautam)
