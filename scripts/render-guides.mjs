import { writeFileSync } from "node:fs";
import { pages } from "./guide-pages.mjs";

const origin = "https://what-is-gap-insurance.co.uk";

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function slugify(value) {
  return String(value)
    .toLowerCase()
    .replaceAll(/[^a-z0-9]+/g, "-")
    .replaceAll(/^-|-$/g, "");
}

function assertClean(value, label) {
  if (value.includes("—") || value.includes("–") || value.includes("&mdash;") || value.includes("&ndash;")) {
    throw new Error(`Dash punctuation in ${label}`);
  }
  if (/\bAI\b|artificial intelligence|ChatGPT|language model/i.test(value)) {
    throw new Error(`AI mention in ${label}`);
  }
}

function jsonLd(data) {
  return JSON.stringify(data).replaceAll("<", "\\u003c");
}

function renderPage(page, bySlug) {
  const url = `${origin}/${page.slug}`;
  const headings = page.blocks.filter((block) => block.type === "h2");
  const faqEntities = page.faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a }
  }));
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.h1,
    description: page.description,
    datePublished: "2026-10-12",
    dateModified: "2026-10-12",
    inLanguage: "en-GB",
    author: {
      "@type": "Organization",
      name: "what-is-gap-insurance.co.uk",
      url: `${origin}/`
    },
    publisher: {
      "@type": "Organization",
      name: "what-is-gap-insurance.co.uk",
      url: `${origin}/`
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url }
  };
  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqEntities
  };

  const blocks = page.blocks.map((block) => {
    if (block.type === "h2") {
      return `<h2 id="${slugify(block.text)}">${escapeHtml(block.text)}</h2>`;
    }
    if (block.type === "h3") return `<h3>${escapeHtml(block.text)}</h3>`;
    if (block.type === "p") return `<p>${block.html}</p>`;
    if (block.type === "ul") {
      return `<ul>${block.items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
    }
    if (block.type === "ol") {
      return `<ol>${block.items.map((item) => `<li>${item}</li>`).join("")}</ol>`;
    }
    if (block.type === "example") {
      return `<div class="example-box"><p class="example-label">Example only</p><h3>${escapeHtml(block.title)}</h3>${block.paragraphs.map((html) => `<p>${html}</p>`).join("")}<p class="note">These pound figures are an illustration so you can see the arithmetic. They are not a quote, a market average, or a claim paid by a named insurer.</p></div>`;
    }
    if (block.type === "table") {
      const head = block.headers.map((header) => `<th>${escapeHtml(header)}</th>`).join("");
      const body = block.rows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`).join("");
      return `<table><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table>`;
    }
    throw new Error(`Unknown block ${block.type} on ${page.slug}`);
  }).join("\n");

  const toc = `<nav class="on-this-page" aria-label="On this page"><p>On this page</p><ol>${headings.map((heading) => `<li><a href="#${slugify(heading.text)}">${escapeHtml(heading.text)}</a></li>`).join("")}<li><a href="#faqs">Common questions</a></li></ol></nav>`;

  const related = page.related.map((slug) => {
    const target = bySlug.get(slug);
    if (!target) throw new Error(`Missing related slug ${slug} on ${page.slug}`);
    return `<a class="related-card" href="/${target.slug}"><h3>${escapeHtml(target.h1)}</h3><p>${escapeHtml(target.card)}</p></a>`;
  }).join("");

  const sources = page.sources.map((source) => `<li><a href="${escapeHtml(source.href)}" rel="noopener">${escapeHtml(source.label)}</a></li>`).join("");
  const faqs = page.faqs.map((faq) => `<div class="faq-item"><div class="faq-q">${escapeHtml(faq.q)}</div><div class="faq-a">${escapeHtml(faq.a)}</div></div>`).join("");

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>${escapeHtml(page.title)}</title>
<meta name="description" content="${escapeHtml(page.description)}"/>
<meta name="robots" content="index, follow"/>
<link rel="canonical" href="${url}"/>
<meta property="og:title" content="${escapeHtml(page.h1)}"/>
<meta property="og:description" content="${escapeHtml(page.description)}"/>
<meta property="og:type" content="article"/>
<meta property="og:url" content="${url}"/>
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%230a1930'/><text x='50' y='72' font-family='system-ui,sans-serif' font-size='56' font-weight='800' fill='%23d4a84b' text-anchor='middle'>G</text></svg>"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet"/>
<link rel="stylesheet" href="/assets/site.css"/>
<script type="application/ld+json">${jsonLd(article)}</script>
<script type="application/ld+json">${jsonLd(faqPage)}</script>
</head>
<body>
<nav>
  <a class="logo" href="/">
    <span class="logo-icon">GI</span>
    <span>What is GAP Insurance?</span>
  </a>
  <div class="nav-right">
    <a class="nav-link" href="/#guides">Guides</a>
  </div>
</nav>
<header class="page-hero">
  <div class="page-hero-wrap">
    <span class="eyebrow">UK guide</span>
    <h1>${escapeHtml(page.h1)}</h1>
    <p class="crumbs"><a href="/">Home</a> / <a href="/#guides">Guides</a> / ${escapeHtml(page.h1)}</p>
  </div>
</header>
<div class="page-wrap">
<p class="lede">${page.lede}</p>
${toc}
<aside class="affiliate-cta" data-affiliate hidden></aside>
${blocks}
<h2 id="faqs">Common questions</h2>
<div class="card">${faqs}</div>
<h2 id="related-guides">Related guides</h2>
<div class="related-grid">${related}</div>
<p><a class="home-link" href="/">Back to the main GAP insurance guide</a></p>
<h2 id="sources">Sources</h2>
<p>Rules and market figures on this page come from the pages below. Pound amounts inside example boxes are illustrations, not statistics.</p>
<ul class="sources">${sources}</ul>
</div>
<footer>
  <div class="footer-logo"><span class="logo-icon">GI</span><span>What is GAP Insurance?</span></div>
  <p class="footer-tagline">A plain English guide to Guaranteed Asset Protection in the UK</p>
  <p style="font-size: 13px; color: rgba(255,255,255,0.6); margin-bottom: 20px;">Contact: <a href="mailto:hello@what-is-gap-insurance.co.uk">hello@what-is-gap-insurance.co.uk</a></p>
  <div class="footer-links">
    <a href="/">Home</a>
    <a href="/#guides">Guides</a>
    <a href="/privacy-policy">Privacy Policy</a>
    <a href="/terms-of-use">Terms of Use</a>
    <a href="/contact">Contact</a>
  </div>
  <p class="footer-disc">© 2026 what-is-gap-insurance.co.uk. This website provides general information only and does not constitute financial advice. Always compare quotes from authorised providers before purchasing any insurance product. Example figures on the guides are illustrations, not quotes.</p>
</footer>
<script src="/data/affiliate.js"></script>
<script src="/assets/affiliate.js"></script>
</body>
</html>
`;
  assertClean(html, page.slug);
  writeFileSync(new URL(`../${page.slug}.html`, import.meta.url), html);
}

const bySlug = new Map(pages.map((page) => [page.slug, page]));
if (bySlug.size !== 18) throw new Error(`Expected 18 pages, got ${bySlug.size}`);
for (const page of pages) {
  if (!page.faqs || page.faqs.length < 4) throw new Error(`Need FAQs on ${page.slug}`);
  if (!page.blocks.some((block) => block.type === "example")) throw new Error(`Need an example on ${page.slug}`);
  if (!page.sources || page.sources.length < 2) throw new Error(`Need sources on ${page.slug}`);
  renderPage(page, bySlug);
}
console.log(`Wrote ${pages.length} guides`);
