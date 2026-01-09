import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const OUTPUT_DIR = '/Users/nammdev/Documents/Code/krea-v4/.claude/chrome-devtools';

async function captureKrea() {
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--window-size=1920,1080']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  console.log('Navigating to krea.ai...');
  await page.goto('https://www.krea.ai', {
    waitUntil: 'networkidle2',
    timeout: 60000
  });

  // Wait for content to load
  await new Promise(r => setTimeout(r, 5000));

  // Take viewport screenshot
  console.log('Capturing viewport screenshot...');
  await page.screenshot({
    path: path.join(OUTPUT_DIR, 'screenshots/krea-viewport.png'),
    type: 'png'
  });

  // Take full page screenshot
  console.log('Capturing full page screenshot...');
  await page.screenshot({
    path: path.join(OUTPUT_DIR, 'screenshots/krea-fullpage.png'),
    fullPage: true,
    type: 'png'
  });

  // Extract HTML
  console.log('Extracting HTML...');
  const html = await page.content();
  fs.writeFileSync(path.join(OUTPUT_DIR, 'krea-source.html'), html);

  // Extract computed styles and design data
  console.log('Extracting design data...');
  const designData = await page.evaluate(() => {
    const getComputedStyleData = (el) => {
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
        boxShadow: computed.boxShadow
      };
    };

    // Get all unique colors used
    const colors = new Set();
    const fonts = new Set();
    const elements = document.querySelectorAll('*');

    elements.forEach(el => {
      const computed = window.getComputedStyle(el);
      if (computed.color) colors.add(computed.color);
      if (computed.backgroundColor && computed.backgroundColor !== 'rgba(0, 0, 0, 0)') {
        colors.add(computed.backgroundColor);
      }
      if (computed.fontFamily) fonts.add(computed.fontFamily);
    });

    // Get key elements styles
    const body = document.body;
    const header = document.querySelector('header') || document.querySelector('nav');
    const hero = document.querySelector('[class*="hero"]') || document.querySelector('main > div:first-child');
    const buttons = Array.from(document.querySelectorAll('button, [class*="btn"], a[class*="button"]')).slice(0, 5);
    const headings = Array.from(document.querySelectorAll('h1, h2, h3')).slice(0, 10);

    return {
      colors: Array.from(colors),
      fonts: Array.from(fonts),
      body: body ? getComputedStyleData(body) : null,
      header: header ? getComputedStyleData(header) : null,
      hero: hero ? getComputedStyleData(hero) : null,
      buttons: buttons.map(b => ({
        text: b.textContent?.trim().slice(0, 50),
        styles: getComputedStyleData(b)
      })),
      headings: headings.map(h => ({
        tag: h.tagName,
        text: h.textContent?.trim().slice(0, 100),
        styles: getComputedStyleData(h)
      })),
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight
      }
    };
  });

  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'krea-design-data.json'),
    JSON.stringify(designData, null, 2)
  );

  // Extract all CSS links and inline styles
  console.log('Extracting CSS...');
  const cssData = await page.evaluate(() => {
    const styleSheets = Array.from(document.styleSheets);
    const cssRules = [];

    styleSheets.forEach(sheet => {
      try {
        if (sheet.cssRules) {
          Array.from(sheet.cssRules).forEach(rule => {
            cssRules.push(rule.cssText);
          });
        }
      } catch (e) {
        // CORS blocked stylesheets
      }
    });

    const links = Array.from(document.querySelectorAll('link[rel="stylesheet"]'))
      .map(l => l.href);

    const inlineStyles = Array.from(document.querySelectorAll('style'))
      .map(s => s.textContent);

    return { links, inlineStyles, cssRules };
  });

  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'krea-css-data.json'),
    JSON.stringify(cssData, null, 2)
  );

  // Get page structure
  console.log('Extracting page structure...');
  const structure = await page.evaluate(() => {
    const getStructure = (el, depth = 0) => {
      if (depth > 4 || !el) return null;

      const children = Array.from(el.children || [])
        .filter(c => !['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(c.tagName))
        .slice(0, 10)
        .map(c => getStructure(c, depth + 1))
        .filter(Boolean);

      return {
        tag: el.tagName?.toLowerCase(),
        id: el.id || null,
        class: el.className?.toString().slice(0, 200) || null,
        text: el.textContent?.trim().slice(0, 100) || null,
        children: children.length ? children : undefined
      };
    };

    return getStructure(document.body);
  });

  fs.writeFileSync(
    path.join(OUTPUT_DIR, 'krea-structure.json'),
    JSON.stringify(structure, null, 2)
  );

  console.log('Done! Closing browser...');
  await browser.close();

  console.log('\nOutput files:');
  console.log('- screenshots/krea-viewport.png');
  console.log('- screenshots/krea-fullpage.png');
  console.log('- krea-source.html');
  console.log('- krea-design-data.json');
  console.log('- krea-css-data.json');
  console.log('- krea-structure.json');
}

captureKrea().catch(console.error);
