// Generate public/og-default.png (1200x630 social share image) in the
// site's propane-orange identity. Downloads Big Shoulders Display from
// Google Fonts into a temp dir so librsvg can render the wordmark, so it
// needs network access. Run with: node scripts/build-og-image.mjs

import { mkdtemp, readFile, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const outPath = join(root, 'public', 'og-default.png');

// Fetch the font before sharp/libvips loads fontconfig.
const fontDir = await mkdtemp(join(tmpdir(), 'og-fonts-'));
const cssUrl =
  'https://fonts.googleapis.com/css2?family=Big+Shoulders+Display:wght@800&display=swap';
// A curl-ish user agent makes Google Fonts serve plain TTF instead of woff2.
const css = await (
  await fetch(cssUrl, { headers: { 'User-Agent': 'curl/8' } })
).text();
const fontUrls = [...css.matchAll(/url\((https:[^)]+\.ttf)\)/g)].map(
  (m) => m[1]
);
if (fontUrls.length === 0) {
  throw new Error('No TTF URLs found in Google Fonts CSS response');
}
await Promise.all(
  fontUrls.map(async (url, i) => {
    const buf = Buffer.from(await (await fetch(url)).arrayBuffer());
    await writeFile(join(fontDir, `big-shoulders-${i}.ttf`), buf);
  })
);
await writeFile(
  join(fontDir, 'fonts.conf'),
  `<?xml version="1.0"?>
<!DOCTYPE fontconfig SYSTEM "fonts.dtd">
<fontconfig>
  <dir>${fontDir}</dir>
  <cachedir>${fontDir}</cachedir>
</fontconfig>`
);
process.env.FONTCONFIG_FILE = join(fontDir, 'fonts.conf');
process.env.FONTCONFIG_PATH = fontDir;

const { default: sharp } = await import('sharp');

// Brand colors (hex twins of the oklch tokens in global.css / favicon.svg).
const ink950 = '#0E0A08';
const ink200 = '#C9BFB4';
const flare500 = '#ED7A2C';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="${ink950}"/>
  <!-- Orange band, anchored right, echoing the homepage architecture. -->
  <rect x="816" y="0" width="384" height="630" fill="${flare500}"/>

  <g font-family="Big Shoulders Display" font-weight="800">
    <!-- The name as architecture: two stacked monumental lines. -->
    <text x="72" y="330" font-size="190" fill="#F7F2EB">mike<tspan fill="${flare500}">.</tspan></text>
    <text x="86" y="480" font-size="190" fill="#F7F2EB">cousins<tspan fill="${flare500}">.</tspan></text>
  </g>

  <g font-family="Big Shoulders Display" font-weight="800" letter-spacing="4">
    <!-- Top-left marginalia. -->
    <text x="72" y="84" font-size="26" fill="${ink200}"><tspan fill="${flare500}">&#9674;</tspan> CALGARY &#183; 51.0&#176;N &#183; 114.0&#176;W</text>
    <!-- Bottom-left roles. -->
    <text x="72" y="566" font-size="30" fill="${ink200}">ARCHITECT &#183; DEVELOPER &#183; FRACTIONAL CTO</text>
    <!-- Vertical manifesto line on the band, dark ink for contrast. -->
    <text x="1132" y="566" font-size="26" fill="${ink950}" fill-opacity="0.75" transform="rotate(-90 1132 566)">MIKECOUSINS.COM &#183; PRACTICING SINCE 2003</text>
  </g>
</svg>`;

const png = await sharp(Buffer.from(svg), { density: 96 })
  .png({ compressionLevel: 9 })
  .toBuffer();
await writeFile(outPath, png);
console.log(`wrote ${outPath} (${png.length} bytes, 1200x630)`);
