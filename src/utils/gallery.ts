import fs from 'node:fs';
import path from 'node:path';

const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp']);

export interface GalleryImage {
  path: string;
  alt: string;
}

export interface BeforeAfterPair {
  before: string;
  after: string;
  label: string;
}

function toLabel(filename: string): string {
  return filename
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function listImageFiles(publicFolder: string): string[] {
  const dirPath = path.join(process.cwd(), 'public', publicFolder.replace(/^\//, ''));
  if (!fs.existsSync(dirPath)) return [];
  return fs
    .readdirSync(dirPath)
    .filter((file) => IMAGE_EXTENSIONS.has(path.extname(file).toLowerCase()))
    .sort((a, b) => a.localeCompare(b));
}

/**
 * Scans a folder under `public/` at build time and returns every image found,
 * so photos can just be dropped in without touching any code.
 */
export function getGalleryImages(publicFolder: string): GalleryImage[] {
  return listImageFiles(publicFolder).map((file) => ({
    path: `${publicFolder}/${file}`,
    alt: toLabel(path.parse(file).name),
  }));
}

/**
 * Scans a folder for `<name>-before.ext` / `<name>-after.ext` pairs.
 * Unmatched files (missing the other half of the pair) are skipped.
 */
export function getBeforeAfterPairs(publicFolder: string): BeforeAfterPair[] {
  const files = listImageFiles(publicFolder);
  const pairs: BeforeAfterPair[] = [];

  for (const file of files) {
    const match = file.match(/^(.+)-before(\.[^.]+)$/i);
    if (!match) continue;
    const [, base, ext] = match;
    const afterFile = files.find((f) => f.toLowerCase() === `${base}-after${ext}`.toLowerCase());
    if (afterFile) {
      pairs.push({
        before: `${publicFolder}/${file}`,
        after: `${publicFolder}/${afterFile}`,
        label: toLabel(base),
      });
    }
  }

  return pairs.sort((a, b) => a.label.localeCompare(b.label));
}
