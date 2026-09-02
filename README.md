# MCA Notes 2026 — RGPV First Semester

Complete teaching/study material for **MCA First Semester (RGPV Bhopal)** — an interactive bilingual (Hinglish) notes web app covering all 5 theory subjects and 2 labs, built from the official RGPV syllabus.

## Subjects Covered

| Code | Subject | Units |
|------|---------|-------|
| MCA 101 | Programming in C with Data Structure | 5 |
| MCA 102 | Statistical Mathematics | 5 |
| MCA 103 | Operating System and Architecture | 5 |
| MCA 104 | Information Technology | 5 |
| MCA 105 | Communication Skills | 5 |
| MCA 106 | C and DS Lab | 13 programs |
| MCA 107 | Operating System Lab | 8 programs |

Syllabus source: `I_Sem_Syllabus_MCA_041120040757.pdf` (official RGPV syllabus, included in this repo).

## What's Inside

### Interactive Notes App (`/notes-app`)

A React + Vite web app with bilingual (Hinglish) notes:

- Subject → Unit → Topic navigation for all 7 papers
- Unit-wise PDF download to share/print
- Syntax-highlighted C code examples (for MCA 101 and the labs)
- Real-life analogies and exam-focused callouts (Yaad Rakho, Tip, Warning, etc.)
- A semester-wide study plan view
- Responsive design (desktop + mobile)

## Development

```bash
cd notes-app
npm install
npm run dev
```

## Deployment (Vercel)

The app is configured for Vercel deployment:
- **Framework:** Vite
- **Root Directory:** repo root (uses `vercel.json` to build `notes-app`)
- **Build Command:** `cd notes-app && npm install && npm run build`
- **Output Directory:** `notes-app/dist`

## Content Status

Notes are being filled in progressively, unit by unit. Topics without detailed notes yet show a "coming soon" placeholder in the app.

## License

Open source for educational purposes.
