import { chromium } from 'playwright';

const browser = await chromium.launch();
for (const path of ['/', '/product', '/company']) {
  const page = await browser.newPage({ viewport: { width: 360, height: 800 } });
  await page.goto(`http://localhost:4174${path}`, { waitUntil: 'networkidle' });
  const info = await page.evaluate(() => {
    const docWidth = document.documentElement.scrollWidth;
    const winWidth = window.innerWidth;
    let worst = null;
    let worstWidth = 0;
    document.querySelectorAll('body *').forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.right > winWidth + 1 && r.width > worstWidth) {
        worstWidth = r.width;
        worst = { tag: el.tagName, cls: el.className, right: r.right, width: r.width };
      }
    });
    return { docWidth, winWidth, worst };
  });
  console.log(path, JSON.stringify(info));
  await page.close();
}
await browser.close();
