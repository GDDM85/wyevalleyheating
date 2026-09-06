// Generates a printable QR code (PNG + SVG) for a given URL using the `qrcode` package.
// Usage: node scripts/generate-qr.mjs <url> [output-name]
import QRCode from 'qrcode';
import { mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const [, , url, outputName] = process.argv;

if (!url) {
  console.error('Usage: node scripts/generate-qr.mjs <url> [output-name]');
  process.exit(1);
}

const name = outputName || new URL(url).hostname.replace(/^www\./, '');
const outDir = fileURLToPath(new URL('../qr-codes/', import.meta.url));
mkdirSync(outDir, { recursive: true });

const options = { margin: 2, color: { dark: '#141b30', light: '#ffffff' } };

await QRCode.toFile(`${outDir}${name}-qr.png`, url, { ...options, type: 'png', width: 1000 });
await QRCode.toFile(`${outDir}${name}-qr.svg`, url, { ...options, type: 'svg' });

console.log(`QR code generated for ${url} -> qr-codes/${name}-qr.png / .svg`);
