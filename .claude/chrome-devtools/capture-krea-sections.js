import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const OUTPUT_DIR = '/Users/nammdev/Documents/Code/krea-v4/.claude/chrome-devtools';

async function captureKreaSections() {
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

  // Scroll to bottom then back to top to load all lazy content
  console.log('Loading all lazy content...');
  const pageHeight = await page.evaluate(() => document.documentElement.scrollHeight);
  console.log(`Page height: ${pageHeight}px`);

  // Scroll through the page in steps
  let currentY = 0;
  let sectionIndex = 0;

  while (currentY < pageHeight) {
    await page.evaluate((y) => window.scrollTo({ top: y, behavior: 'instant' }), currentY);
    await new Promise(r => setTimeout(r, 1000));

    console.log(`Capturing section ${sectionIndex} at ${currentY}px...`);
    await page.screenshot({
      path: path.join(OUTPUT_DIR, `screenshots/section-${String(sectionIndex).padStart(2, '0')}.png`),
      type: 'png'
    });

    currentY += 1000;
    sectionIndex++;
  }

  // Scroll back to top
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(r => setTimeout(r, 1000));

  console.log('Done! Closing browser...');
  await browser.close();

  console.log(`\nCaptured ${sectionIndex} sections`);
}

captureKreaSections().catch(console.error);
