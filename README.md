# Atlas — Field Index of Africa

A searchable field index of African countries — capital, language,
and region — filtered in real time as you type.

Built as an original reimagining of the freeCodeCamp Music Instruments
Filter project.

## Live Demo

[View Live](https://simeonatarr231.github.io/atlas/)

---

## About

Atlas is a single-page JavaScript application styled as a field
expedition ledger rather than a conventional card grid. Thirty
African countries are indexed with their capital, dominant language,
and region. A single search input filters the full index in real
time — matching against country name, capital, language, or region
simultaneously.

The project was designed and built from scratch — original concept,
original ledger-style UI, original design system. The only thing
shared with the freeCodeCamp curriculum is the underlying JavaScript
objective: real-time search filtering.

---

## Features

- Thirty African countries with capital, language, and region data
- Real-time filtering on every keystroke — no submit button
- Multi-field search matching name, capital, language, and region
- Live result count that updates with every search
- Empty state when no entries match the query
- Asymmetric ledger-row layout — no generic card-grid design
- Full light and dark mode
- Responsive down to mobile

---

## Built With

- HTML5 — semantic structure
- CSS3 — custom design tokens, CSS Grid, responsive layout
- Vanilla JavaScript — the input event, Array.filter(), real-time
  re-rendering, empty state handling
- Google Fonts — Fraunces, Inter

---

## JavaScript Concepts Practiced

- The input event for real-time response to typing
- Array.filter() with multiple OR conditions
- String.includes() for substring matching
- Case-insensitive comparison via toLowerCase()
- Conditional rendering for empty states
- String.padStart() for formatted index numbers
- Trimming and normalizing user input

---

## Project Structure
atlas/
├── index.html      — semantic HTML structure
├── style.css       — design tokens, reset, ledger layout
├── script.js       — data layer, render engine, filter logic
└── README.md       — project documentation

---

## Local Setup

```bash
git clone https://github.com/SimeonATarr231/atlas.git
cd atlas
```

Open `index.html` in your browser. No build tools or dependencies required.

---

## Designed & Built by [Simeon Aseon Tarr](https://github.com/SimeonATarr231)

© 2025 Tarr. All rights reserved.