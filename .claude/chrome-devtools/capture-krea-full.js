import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const OUTPUT_DIR = '/Users/nammdev/Documents/Code/krea-v4/.claude/chrome-devtools';

async function captureKrea() {
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--window-size=1920,1200']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  console.log('Navigating to krea.ai...');
  await page.goto('https://www.krea.ai', {
    waitUntil: 'networkidle2',
    timeout: 60000
  });

  // Wait for content to fully load
  await new Promise(r => setTimeout(r, 5000));

  // Scroll to top first
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(r => setTimeout(r, 2000));

  // Capture hero section (viewport)
  console.log('Capturing hero section...');
  await page.screenshot({
    path: path.join(OUTPUT_DIR, 'screenshots/krea-hero.png'),
    type: 'png'
  });

  // Get total page height
  const pageHeight = await page.evaluate(() => document.documentElement.scrollHeight);
  console.log(`Total page height: ${pageHeight}px`);

  // Capture sections by scrolling
  const sections = [
    { name: 'hero', scroll: 0 },
    { name: 'section-1', scroll: 1000 },
    { name: 'section-2', scroll: 2000 },
    { name: 'section-3', scroll: 3000 },
    { name: 'section-4', scroll: 4000 },
    { name: 'section-5', scroll: 5000 },
    { name: 'section-6', scroll: 6000 },
  ];

  for (const section of sections) {
    if (section.scroll < pageHeight) {
      await page.evaluate((y) => window.scrollTo(0, y), section.scroll);
      await new Promise(r => setTimeout(r, 1500));
      console.log(`Capturing ${section.name} at scroll ${section.scroll}...`);
      await page.screenshot({
        path: path.join(OUTPUT_DIR, `screenshots/krea-${section.name}.png`),
        type: 'png'
      });
    }
  }

  // Now scroll through entire page to trigger all lazy loading
  console.log('Loading all lazy content...');
  await page.evaluate(async () => {
    const distance = 500;
    const delay = 200;
    const scrollHeight = document.documentElement.scrollHeight;
    let currentPosition = 0;

    while (currentPosition < scrollHeight) {
      window.scrollTo(0, currentPosition);
      currentPosition += distance;
      await new Promise(r => setTimeout(r, delay));
    }
    // Scroll back to top
    window.scrollTo(0, 0);
  });

  await new Promise(r => setTimeout(r, 3000));

  // Capture full page after lazy loading
  console.log('Capturing complete full page...');
  await page.screenshot({
    path: path.join(OUTPUT_DIR, 'screenshots/krea-complete.png'),
    fullPage: true,
    type: 'png'
  });

  // Extract comprehensive design data
  console.log('Extracting comprehensive design data...');
  const designData = await page.evaluate(() => {
    const getComputedStyleData = (el) => {
      if (!el) return null;
      const computed = window.getComputedStyle(el);
      return {
        fontFamily: computed.fontFamily,
        fontSize: computed.fontSize,
        fontWeight: computed.fontWeight,
        lineHeight: computed.lineHeight,
        letterSpacing: computed.letterSpacing,
        color: computed.color,
        backgroundColor: computed.backgroundColor,
        padding: computed.padding,
        margin: computed.margin,
        borderRadius: computed.borderRadius,
        boxShadow: computed.boxShadow,
        border: computed.border,
        display: computed.display,
        gap: computed.gap,
        alignItems: computed.alignItems,
        justifyContent: computed.justifyContent,
        flexDirection: computed.flexDirection,
        width: computed.width,
        maxWidth: computed.maxWidth,
        height: computed.height,
        position: computed.position,
        transform: computed.transform,
        opacity: computed.opacity,
        transition: computed.transition
      };
    };

    // Get all unique colors
    const colors = new Set();
    const fonts = new Set();
    const elements = document.querySelectorAll('*');

    elements.forEach(el => {
      const computed = window.getComputedStyle(el);
      if (computed.color) colors.add(computed.color);
      if (computed.backgroundColor && computed.backgroundColor !== 'rgba(0, 0, 0, 0)') {
        colors.add(computed.backgroundColor);
      }
      if (computed.borderColor && computed.borderColor !== 'rgba(0, 0, 0, 0)') {
        colors.add(computed.borderColor);
      }
      if (computed.fontFamily) fonts.add(computed.fontFamily);
    });

    // Get sections
    const sections = Array.from(document.querySelectorAll('section, [class*="section"], main > div'))
      .slice(0, 15)
      .map((s, i) => ({
        index: i,
        tag: s.tagName,
        class: s.className?.toString().slice(0, 300),
        styles: getComputedStyleData(s)
      }));

    // Get all buttons with variants
    const buttons = Array.from(document.querySelectorAll('button, a[class*="btn"], a[class*="button"], [role="button"]'))
      .slice(0, 20)
      .map(b => ({
        text: b.textContent?.trim().slice(0, 50),
        tagName: b.tagName,
        class: b.className?.toString().slice(0, 200),
        href: b.href || null,
        styles: getComputedStyleData(b)
      }));

    // Get all headings
    const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'))
      .map(h => ({
        tag: h.tagName,
        text: h.textContent?.trim().slice(0, 150),
        class: h.className?.toString().slice(0, 200),
        styles: getComputedStyleData(h)
      }));

    // Get paragraphs/text
    const paragraphs = Array.from(document.querySelectorAll('p'))
      .slice(0, 20)
      .map(p => ({
        text: p.textContent?.trim().slice(0, 200),
        class: p.className?.toString().slice(0, 100),
        styles: getComputedStyleData(p)
      }));

    // Get navigation
    const nav = document.querySelector('nav, header nav, [role="navigation"]');
    const navLinks = nav ? Array.from(nav.querySelectorAll('a')).map(a => ({
      text: a.textContent?.trim(),
      href: a.href,
      styles: getComputedStyleData(a)
    })) : [];

    // Get images (for reference)
    const images = Array.from(document.querySelectorAll('img'))
      .slice(0, 30)
      .map(img => ({
        src: img.src,
        alt: img.alt,
        width: img.naturalWidth,
        height: img.naturalHeight,
        class: img.className?.toString().slice(0, 100)
      }));

    // Get footer
    const footer = document.querySelector('footer');

    // Get cards/features
    const cards = Array.from(document.querySelectorAll('[class*="card"], [class*="feature"]'))
      .slice(0, 15)
      .map(c => ({
        class: c.className?.toString().slice(0, 200),
        text: c.textContent?.trim().slice(0, 100),
        styles: getComputedStyleData(c)
      }));

    // Get inputs
    const inputs = Array.from(document.querySelectorAll('input, textarea'))
      .slice(0, 10)
      .map(i => ({
        type: i.type,
        placeholder: i.placeholder,
        class: i.className?.toString().slice(0, 100),
        styles: getComputedStyleData(i)
      }));

    return {
      colors: Array.from(colors),
      fonts: Array.from(fonts),
      body: getComputedStyleData(document.body),
      header: getComputedStyleData(document.querySelector('header')),
      nav: {
        styles: getComputedStyleData(nav),
        links: navLinks
      },
      sections,
      headings,
      paragraphs,
      buttons,
      cards,
      inputs,
      images,
      footer: getComputedStyleData(footer),
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
        scrollHeight: document.documentElement.scrollHeight
      }
    };
  });

  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'krea-design-complete.json'),
    JSON.stringify(designData, null, 2)
  );

  // Extract complete HTML
  console.log('Extracting complete HTML...');
  const html = await page.content();
  fs.writeFileSync(path.join(OUTPUT_DIR, 'krea-complete.html'), html);

  console.log('Done! Closing browser...');
  await browser.close();

  console.log('\nOutput files:');
  console.log('- screenshots/krea-hero.png');
  console.log('- screenshots/krea-section-*.png');
  console.log('- screenshots/krea-complete.png');
  console.log('- krea-complete.html');
  console.log('- krea-design-complete.json');
}

captureKrea().catch(console.error);
