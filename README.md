# Wye Valley Plumbing, Heating & Renewables

Astro site for Wye Valley Plumbing, Heating & Renewables.

## Development

- `npm install`
- `npm run dev`

## Build

- `npm run build`
- `npm run preview`

## QR code (business cards etc.)

- `npm run generate-qr -- <url> [output-name]`
- Outputs `qr-codes/<output-name>-qr.png` (1000x1000) and `.svg`, e.g.:
  - `npm run generate-qr -- https://wyevalleyheating.co.uk/ wyevalleyheating`

## Before going live

Content is currently placeholder/demo data — replace before launch:

- [x] Real phone number, email and Gas Safe registration number in `src/data/business.ts`
- [ ] Real testimonials/reviews — current ones in `src/data/business.ts` (`testimonials`) are placeholder copy, not real customer quotes
- [ ] `hero.jpg` still missing from `public/images/` (`about.png`, logos, and gallery photos already added)
- [x] Removed `noindex, nofollow` from `src/layouts/Layout.astro` — site is now indexable

## Photo gallery

Drop photos straight into these folders — no code changes needed, the site picks them up automatically at build time:

- `public/images/gallery/` — normal project photos shown in the grid with a click-to-enlarge lightbox. Filenames become the captions (e.g. `bathroom-suite-installation.jpeg` → "Bathroom Suite Installation"), so name files descriptively with hyphens.
- `public/images/gallery/before-after/` — genuine same-angle before/after pairs, named `<job-name>-before.jpg` and `<job-name>-after.jpg` (e.g. `boiler-swap-1-before.jpg` / `boiler-swap-1-after.jpg`). These render as an interactive drag-to-compare slider. Pairs only appear once both files exist; unmatched files are skipped. A pre-made collage (like the current boiler before/after image) should just go in the main `gallery/` folder instead, since the slider needs two separate matching photos, not one combined image.
