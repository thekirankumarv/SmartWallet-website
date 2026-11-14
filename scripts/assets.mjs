import { mkdir, readdir, writeFile } from 'node:fs/promises';
import QRCode from 'qrcode';
import sharp from 'sharp';

const SRC = 'screenshots';
const SITE = 'https://thekirankumarv.github.io/SmartWallet-website/';
await mkdir('public/shots', { recursive: true });

const pngs = (await readdir(SRC)).filter((f) => /^\d\d-.*\.png$/.test(f));
await Promise.all(
  pngs.map((f) => sharp(`${SRC}/${f}`).resize({ width: 720 }).webp({ quality: 84 }).toFile(`public/shots/${f.replace('.png', '.webp')}`)),
);

await sharp(`${SRC}/icon.png`).resize(512).png().toFile('app/icon.png');
await sharp(`${SRC}/icon.png`).resize(180).png().toFile('app/apple-icon.png');
await sharp(`${SRC}/icon.png`).resize(256).webp().toFile('public/icon.webp');

await writeFile('public/qr.svg', await QRCode.toString(SITE, { type: 'svg', margin: 1, color: { dark: '#0A0A0F', light: '#FFFFFF' } }));

// 1200×630 share card: title on the left, three phones on the right.
const W = 1200, H = 630, PH = 520, PW = Math.round((PH * 1170) / 2532);
const round = Buffer.from(`<svg width="${PW}" height="${PH}"><rect width="${PW}" height="${PH}" rx="28" fill="#fff"/></svg>`);
const phone = (f) => sharp(`${SRC}/${f}`).resize(PW, PH).composite([{ input: round, blend: 'dest-in' }]).png().toBuffer();
const bg = Buffer.from(`<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="a" cx="0.85" cy="0.2" r="0.7"><stop offset="0" stop-color="#8B7CFF" stop-opacity="0.55"/><stop offset="1" stop-color="#0A0A0F" stop-opacity="0"/></radialGradient>
    <radialGradient id="b" cx="0.1" cy="1" r="0.6"><stop offset="0" stop-color="#2FD9A0" stop-opacity="0.3"/><stop offset="1" stop-color="#0A0A0F" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="100%" height="100%" fill="#0A0A0F"/><rect width="100%" height="100%" fill="url(#a)"/><rect width="100%" height="100%" fill="url(#b)"/>
  <text x="70" y="250" font-family="Helvetica, Arial" font-weight="800" font-size="76" fill="#F4F4F8">SmartWallet</text>
  <text x="72" y="315" font-family="Helvetica, Arial" font-size="32" fill="#C9C9DA">Track every rupee in seconds.</text>
  <text x="72" y="360" font-family="Helvetica, Arial" font-size="32" fill="#C9C9DA">Tap, speak or scan a bill.</text>
  <rect x="72" y="410" width="330" height="58" rx="29" fill="#8B7CFF"/>
  <text x="237" y="448" text-anchor="middle" font-family="Helvetica, Arial" font-weight="700" font-size="24" fill="#0A0A0F">Free for Android</text>
</svg>`);
const [a, b, c] = await Promise.all(['10-stats.png', '01-transactions.png', '08-scan-review.png'].map(phone));
await sharp(bg)
  .composite([
    { input: a, left: 600, top: 80 },
    { input: c, left: 960, top: 80 },
    { input: b, left: 760, top: 55 },
  ])
  .png()
  .toFile('public/og.png');

console.log(`assets: ${pngs.length} screenshots, icon, qr, og`);
