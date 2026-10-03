import fs from 'node:fs';
import path from 'node:path';

const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp']);

export interface GalleryImage {
  path: string;
  alt: string;
}

export const PROJECT_CATEGORIES = [
  'Bathrooms',
  'Underfloor Heating',
  'Boilers & Heating',
  'Plumbing',
] as const;

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];

export interface GalleryProject {
  id: string;
  title: string;
  category: ProjectCategory;
  location?: string;
  photos: GalleryImage[];
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
export function getGalleryProjects(publicFolder: string): GalleryProject[] {
  const projects: Array<Omit<GalleryProject, 'photos'> & { filename: string }> = [
    { id: 'accessible-shower', title: 'Accessible Level-Access Shower', category: 'Bathrooms', filename: 'accessible-level-access-shower.jpeg' },
    { id: 'air-source-heat-pump', title: 'Air Source Heat Pump Installation', category: 'Boilers & Heating', filename: 'air-source-heat-pump-installation.jpeg' },
    { id: 'bathroom-suite', title: 'Bathroom Suite Installation', category: 'Bathrooms', filename: 'bathroom-suite-installation.jpeg' },
    { id: 'bathroom-vanity', title: 'Bathroom Vanity & Radiator', category: 'Bathrooms', filename: 'bathroom-vanity-and-radiator.jpeg' },
    { id: 'designer-radiator', title: 'Designer Radiator Installation', category: 'Boilers & Heating', filename: 'designer-radiator-installation.jpeg' },
    { id: 'underfloor-heating-installation', title: 'Underfloor Heating Installation', category: 'Underfloor Heating', filename: 'underfloor-heating-installation.jpeg' },
    { id: 'underfloor-heating-pipework', title: 'Underfloor Heating Pipework', category: 'Underfloor Heating', filename: 'underfloor-heating-pipework.jpeg' },
    { id: 'walk-in-shower', title: 'Walk-In Shower Enclosure', category: 'Bathrooms', filename: 'walk-in-shower-enclosure.jpeg' },
  ];
  const availableFiles = new Set(listImageFiles(publicFolder));

  return projects
    .filter((project) => availableFiles.has(project.filename))
    .map(({ filename, ...project }) => ({
      ...project,
      photos: [{
        path: `${publicFolder}/${filename}`,
        alt: project.title,
      }],
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
