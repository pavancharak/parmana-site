import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage();

// Fresh, direct navigation — not a client-side link click.
const response = await page.goto("http://localhost:5173/mastercard-challenge", {
  waitUntil: "networkidle",
});

console.log("HTTP status:", response.status());
console.log("Final URL:", page.url());
console.log("Title:", await page.title());

const bodyText = await page.evaluate(() => document.body.innerText.replace(/\s+/g, " ").trim());
console.log("First 200 chars of visible text:");
console.log(JSON.stringify(bodyText.slice(0, 200)));

await browser.close();
