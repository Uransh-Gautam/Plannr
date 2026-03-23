# Plannr — Group Outing & Trip Planner

**"Stop the 47-message WhatsApp thread. Open Plannr, pick a place, vote, check the weather, split the bill — sorted."**

Plannr is a web app built for groups. Whether you're planning a birthday dinner, a weekend trip, or just figuring out which café to hit after college — Plannr brings everyone into one shared space to suggest places, vote, check the weather, and settle expenses. No more scattered DMs, no more forgotten debts.

---

## The Problem

Every group goes through the same loop. Someone drops 5 restaurant names in the chat. Three people react, two don't reply, and somehow you still end up at the same place you always go. Then after the trip, nobody remembers who paid for petrol. And whoever paid for the hotel is still waiting to be reimbursed two weeks later.

Plannr is built to fix exactly that — not just the decision, but the whole process from "where should we go?" to "here's what everyone owes."

---

## What It Does

**Interactive Map** — Search any café, restaurant, hill station, or city by name. Drop a pin, tag it, and it shows up on a shared map that everyone in the group can see.

**Group Chat** — A simple message thread attached to each plan. Share location links in the chat and they automatically drop a pin on the group map.

**Voting** — Every suggested place has a vote button. The most voted place rises to the top and gets highlighted as the group pick.

**Weather at the Destination** — Before committing to a spot, see the live temperature, UV index, and air quality for that exact location. Especially useful for outdoor plans or trips.

**Expense Splitter** — Log who paid for what, tag the people involved, and Plannr calculates exactly who owes whom and how much. Clean, simple, no arguments.

---

## APIs Used

Everything below is **completely free** — no API key needed, no billing, no account signup.

| API | What it's used for |
|-----|--------------------|
| **Leaflet.js + OpenStreetMap** | The interactive map itself — renders tiles, handles pins and popups |
| **Nominatim** | Converts a place name like "Café Coffee Day Sonipat" into map coordinates |
| **Open-Meteo Forecast** | Live temperature, UV index, humidity, and feels-like heat at any location |
| **Open-Meteo Air Quality** | PM2.5, AQI, dust levels — relevant for anywhere near Delhi NCR |
| **RestCountries** | Country and city info for the trip planning section |

> Google Maps is not used anywhere in this project. Leaflet.js with OpenStreetMap is a free, open-source alternative used in production by Wikipedia, Apple, and Facebook.

---

## Tech Stack

Built entirely with **vanilla JavaScript** — no frameworks, no npm, no build tools. Just HTML, CSS, and JS running straight in the browser.

- **Leaflet.js** for the map (loaded via CDN)
- **Fetch API** for all external data calls
- **localStorage** for saving chat messages, votes, and expenses across sessions — no backend needed
- **Tailwind CSS** *(optional)* for styling

All the searching, filtering, and sorting is done using JavaScript array methods — `.filter()`, `.sort()`, `.map()`, and `.reduce()` — as required by the project spec.

---

## Features

**Done in this milestone:**
- Project idea finalized
- All APIs researched and confirmed free
- GitHub repository created
- README written

**Planned for upcoming milestones:**
- Map rendering with live place search
- Weather and AQI display on pin popups
- Group chat with location link detection
- Voting system with live count and auto-sort
- Expense logger with per-person balance calculator
- Search, filter, and sort using Array HOFs
- Responsive design across mobile, tablet, and desktop
- Dark mode toggle (saved in localStorage)
- Debounced search input to avoid unnecessary API calls
- Loading indicators on every fetch call

---

## Author

**URANSH GAUTAM**

Web & Applications — 2025

[github.com/Uransh-Gautam]
