# Wye Valley Plumbing, Heating & Renewables

Standalone Astro site for Wye Valley Plumbing, Heating & Renewables. This folder is a fully
self-contained project (own `package.json`, Astro/Tailwind config) so it can be copied straight
into its own git repository for hosting.

## Development

- `npm install`
- `npm run dev`

## Build

- `npm run build`
- `npm run preview`

## Moving to its own repo

From the repo root:

```powershell
git subtree split --prefix=wyevalleyheating -b wyevalleyheating-history
```

Then push `wyevalleyheating-history` to the new repository, or simply copy this folder's
contents into a fresh repo if history isn't needed.

## Before going live

Content is currently placeholder/demo data — replace before launch:

- Real phone number, email and Gas Safe registration number in `src/data/business.ts`
- Real testimonials/reviews
- Real photos in `public/images/` (hero, about, gallery-1/2/3, logo, icon, gas-safe logo)
- Remove `noindex, nofollow` from `src/layouts/Layout.astro` once ready for search engines
