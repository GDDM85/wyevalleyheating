import fs from 'node:fs';
import path from 'node:path';

/**
 * Checks whether a file exists in the `public/` directory at build/dev time.
 * Used so pages can show a friendly placeholder instead of a broken image
 * while real photos haven't been added yet.
 *
 * @param publicPath - path relative to `public/`, e.g. '/images/hero.jpg'
 */
export function imageExists(publicPath: string): boolean {
  const filePath = path.join(process.cwd(), 'public', publicPath.replace(/^\//, ''));
  return fs.existsSync(filePath);
}
