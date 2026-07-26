import { readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const rootDir = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const distDir = path.join(rootDir, 'dist');
const ssrEntry = path.join(rootDir, 'dist-ssr', 'entry-server.js');

const ORIGIN = 'https://www.parmanasystems.com';
const OG_IMAGE = `${ORIGIN}/og.png`;

const ROUTES = [
  {
    urlPath: '/',
    outFile: 'index.html',
    title: 'Parmana | The authorization layer for AI execution',
    description:
      "The AI asks permission before every action and leaves verifiable proof behind. Even a compromised AI can't bypass that control. Built for regulated finance.",
    ogDescription:
      "The AI has to ask permission before it acts, and everything it does leaves proof. Even a hacked AI can't skip that step.",
  },
  {
    urlPath: '/product',
    outFile: 'product/index.html',
    title: 'Product | Parmana',
    description: 'Allow or block. Blocked by default. How Parmana authorizes AI execution against rules you wrote.',
  },
  {
    urlPath: '/trust',
    outFile: 'trust/index.html',
    title: 'Trust | Parmana',
    description: 'Zero trust architecture: nothing is trusted by default, not the AI, not Parmana, not your own systems. Every action verified against evidence.',
  },
  {
    urlPath: '/deployment',
    outFile: 'deployment/index.html',
    title: 'Deployment | Parmana',
    description: 'Works with any AI model. Runs on-prem, hybrid, or cloud. Not air-gapped, on purpose.',
  },
  {
    urlPath: '/faq',
    outFile: 'faq/index.html',
    title: 'FAQ | Parmana',
    description: 'Straight answers to the questions evaluators actually ask about how Parmana authorizes AI execution.',
  },
  {
    urlPath: '/value',
    outFile: 'value/index.html',
    title: 'Value | Parmana',
    description: 'From probabilistic guardrails to explicit, pre-authorized rules: the direct and strategic value of authorizing AI execution before it happens.',
  },
  {
    urlPath: '/company',
    outFile: 'company/index.html',
    title: 'Company | Parmana',
    description: 'Parmana comes from pramana, a valid means of knowing. Built by Manthan Systems.',
  },
];

function setTagContent(html, matcher, replacement) {
  if (!matcher.test(html)) {
    throw new Error(`Prerender: expected tag not found for pattern ${matcher}`);
  }
  return html.replace(matcher, replacement);
}

async function main() {
  const { render } = await import(pathToFileURL(ssrEntry).href);
  const template = await readFile(path.join(distDir, 'index.html'), 'utf-8');

  for (const route of ROUTES) {
    const appHtml = render(route.urlPath);
    const canonical = `${ORIGIN}${route.urlPath === '/' ? '/' : route.urlPath}`;
    const ogDescription = route.ogDescription ?? route.description;

    let html = template;
    html = setTagContent(html, /<div id="root"><\/div>/, `<div id="root">${appHtml}</div>`);
    html = setTagContent(html, /<title>.*?<\/title>/s, `<title>${route.title}</title>`);
    html = setTagContent(
      html,
      /<meta\s+name="description"\s+content=".*?"\s*\/>/s,
      `<meta name="description" content="${route.description}" />`,
    );
    html = setTagContent(html, /<link\s+rel="canonical"\s+href=".*?"\s*\/>/, `<link rel="canonical" href="${canonical}" />`);
    html = setTagContent(html, /<meta\s+property="og:url"\s+content=".*?"\s*\/>/, `<meta property="og:url" content="${canonical}" />`);
    html = setTagContent(html, /<meta\s+property="og:title"\s+content=".*?"\s*\/>/, `<meta property="og:title" content="${route.title}" />`);
    html = setTagContent(
      html,
      /<meta\s+property="og:description"\s+content=".*?"\s*\/>/s,
      `<meta property="og:description" content="${ogDescription}" />`,
    );
    html = setTagContent(html, /<meta\s+property="og:image"\s+content=".*?"\s*\/>/, `<meta property="og:image" content="${OG_IMAGE}" />`);
    html = setTagContent(html, /<meta\s+name="twitter:title"\s+content=".*?"\s*\/>/, `<meta name="twitter:title" content="${route.title}" />`);
    html = setTagContent(
      html,
      /<meta\s+name="twitter:description"\s+content=".*?"\s*\/>/s,
      `<meta name="twitter:description" content="${ogDescription}" />`,
    );
    html = setTagContent(html, /<meta\s+name="twitter:image"\s+content=".*?"\s*\/>/, `<meta name="twitter:image" content="${OG_IMAGE}" />`);

    const outPath = path.join(distDir, route.outFile);
    await mkdir(path.dirname(outPath), { recursive: true });
    await writeFile(outPath, html, 'utf-8');
    console.log(`prerendered ${route.urlPath} -> dist/${route.outFile}`);
  }

  await rm(path.join(rootDir, 'dist-ssr'), { recursive: true, force: true });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
