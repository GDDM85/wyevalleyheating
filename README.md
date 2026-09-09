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
- [ ] Real photos in `public/images/` — `hero.jpg` and `gallery-1/2/3.jpg` still missing (`about.png`, logos already added)
- [x] Removed `noindex, nofollow` from `src/layouts/Layout.astro` — site is now indexable
