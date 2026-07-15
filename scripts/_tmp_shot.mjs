import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';

const outDir = 'C:/Users/PAVANC~1/AppData/Local/Temp/claude/D--last-parmana-site/a8c7a080-e993-4b7d-b58b-63dde9bf9f92/scratchpad/shots';
await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();

const sizes = [
  { name: 'home-360', path: '/', width: 360, height: 800 },
  { name: 'home-1440', path: '/', width: 1440, height: 900 },
  { name: 'product-1440', path: '/product', width: 1440, height: 1400 },
  { name: 'company-1440', path: '/company', width: 1440, height: 900 },
];

for (const s of sizes) {
  const page = await browser.newPage({ viewport: { width: s.width, height: s.height } });
  await page.goto(`http://localhost:4174${s.path}`, { waitUntil: 'networkidle' });
  await page.screenshot({ path: `${outDir}/${s.name}.png`, fullPage: true });
  await page.close();
}

const page2 = await browser.newPage({ viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce' });
await page2.goto('http://localhost:4174/', { waitUntil: 'networkidle' });
await page2.screenshot({ path: `${outDir}/home-reduced-motion.png`, fullPage: false });
await page2.close();

await browser.close();
console.log('done');
