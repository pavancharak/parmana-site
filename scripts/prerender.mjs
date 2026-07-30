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
    title: 'Parmana | Make sure every AI action is one your business allows',
    description:
      'As AI begins operating business systems, Parmana checks every action before it happens so organizations stay in control.',
    ogDescription: 'AI can take action. Make sure every action is one your business allows.',
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
