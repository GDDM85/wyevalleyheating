// Swaps src/pages/index.astro and src/pages/_full-site.astro so you can
// preview the full site locally (npm run dev) for demos, then switch back.
// Run again to toggle back. Do not commit/push while showing the full site.
import { renameSync, existsSync, readFileSync } from 'node:fs';

const indexPath = new URL('../src/pages/index.astro', import.meta.url);
const fullSitePath = new URL('../src/pages/_full-site.astro', import.meta.url);
const tmpPath = new URL('../src/pages/_swap-tmp.astro', import.meta.url);

if (!existsSync(indexPath) || !existsSync(fullSitePath)) {
  console.error('Expected both src/pages/index.astro and src/pages/_full-site.astro to exist.');
  process.exit(1);
}

renameSync(indexPath, tmpPath);
renameSync(fullSitePath, indexPath);
renameSync(tmpPath, fullSitePath);

const isComingSoonLive = readFileSync(indexPath, 'utf8').includes('Coming soon');

console.log(isComingSoonLive ? 'Now showing: COMING SOON page (default/live state).' : 'Now showing: FULL SITE (demo mode — do not commit/push like this).');
