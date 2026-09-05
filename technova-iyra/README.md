# TechNova — Iyra Bahal Digital Learning Record

Open `index.html` directly in any browser. No server or build step is required.

## Editing content

All content lives in two places:

- **`script.js`** — the data arrays at the top of the file (`projects`, `certificates`,
  `skills`, `achievements`, `milestones`, `performance`). Edit these directly; the
  page re-renders from this data automatically.
- **`index.html`** — static copy (hero text, educator bio, timeline narrative,
  footer) that doesn't change based on data.

## Placeholders you should replace

- **Projects**: all 8 entries in the `projects` array are placeholders
  ("Project 01" … "Project 08"). Replace `title`, `description`,
  `learningObjective`, `learned`, `github`, and `demo` with real project
  information, and add real screenshots to `assets/projects/`.
- **Certificates**: the 4 entries in the `certificates` array are placeholder
  learning-stage certificates issued internally by TechNova, matching the
  2024–2025 timeline described on the site. Confirm titles/dates/skills match
  reality, and update `image` if you have scanned originals to reference
  alongside the on-page certificate design in `assets/certificates/`.
- Certificate numbers follow the pattern `TN-IYRA-<year>-<sequence>` and are
  TechNova's internal reference numbers — not a third-party or government
  verification ID.

## Certificate viewer & printing

Clicking **View Certificate** opens a full document viewer with zoom controls.
**Print** and **Download** both open the browser's print dialog — choosing
"Save as PDF" there produces a correctly sized A4 landscape file without any
external libraries.

## Folder structure

```
technova-iyra/
├── index.html
├── style.css
├── script.js
└── assets/
    ├── projects/      (project screenshots — add your own)
    ├── certificates/  (referenced certificate images — add your own)
    └── icons/         (reserved for future use)
```
