// Generate favicon.ico (multi-resolution PNG-in-ICO) from public/favicon.svg.
// Run with: node scripts/build-favicon.mjs

import sharp from 'sharp';
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const svgPath = join(root, 'public', 'favicon.svg');
const icoPath = join(root, 'public', 'favicon.ico');
const appleTouchPath = join(root, 'public', 'apple-touch-icon.png');

const sizes = [16, 32, 48, 64, 128, 256];

const svg = await readFile(svgPath);

const pngs = await Promise.all(
  sizes.map((s) =>
    sharp(svg, { density: 384 })
      .resize(s, s, { fit: 'contain' })
      .png({ compressionLevel: 9 })
      .toBuffer()
  )
);

// Build ICO header + directory + image data (PNGs embedded).
const headerSize = 6;
const entrySize = 16;
const dirSize = headerSize + sizes.length * entrySize;

const header = Buffer.alloc(headerSize);
header.writeUInt16LE(0, 0); // reserved
header.writeUInt16LE(1, 2); // type: icon
header.writeUInt16LE(sizes.length, 4); // count

let offset = dirSize;
const entries = sizes.map((size, i) => {
  const png = pngs[i];
  const entry = Buffer.alloc(entrySize);
  entry.writeUInt8(size >= 256 ? 0 : size, 0); // width (0 = 256)
  entry.writeUInt8(size >= 256 ? 0 : size, 1); // height
  entry.writeUInt8(0, 2); // color count (0 for >256)
  entry.writeUInt8(0, 3); // reserved
  entry.writeUInt16LE(1, 4); // color planes
  entry.writeUInt16LE(32, 6); // bits per pixel
  entry.writeUInt32LE(png.length, 8); // image data size
  entry.writeUInt32LE(offset, 12); // image data offset
  offset += png.length;
  return entry;
});

const ico = Buffer.concat([header, ...entries, ...pngs]);
await writeFile(icoPath, ico);

// Apple touch icon: 180x180 PNG, padded onto the same dark background so it
// reads well on iOS home screens (no transparent corners).
const appleTouch = await sharp(svg, { density: 720 })
  .resize(180, 180, { fit: 'contain' })
  .png({ compressionLevel: 9 })
  .toBuffer();
await writeFile(appleTouchPath, appleTouch);

console.log(
  `wrote ${icoPath} (${ico.length} bytes, sizes: ${sizes.join(', ')})`
);
console.log(`wrote ${appleTouchPath} (${appleTouch.length} bytes, 180x180)`);
