import puppeteer from 'puppeteer';
import fs from 'fs';

const sessionFile = process.env.HOME + '/.claude/skills/chrome-devtools/scripts/.browser-session.json';
const OUTPUT_DIR = '/Users/nammdev/Documents/Code/krea-v4/.claude/chrome-devtools/screenshots';

async function testDropdown() {
  let browser;

  try {
    // Try to connect to existing session
    const session = JSON.parse(fs.readFileSync(sessionFile, 'utf8'));
    browser = await puppeteer.connect({ browserWSEndpoint: session.wsEndpoint });
  } catch (e) {
    // Launch new browser
    browser = await puppeteer.launch({
      headless: false,
      args: ['--window-size=1920,1200']
    });
  }

  const pages = await browser.pages();
  const page = pages[0] || await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  // Navigate to page
  await page.goto('http://localhost:3001', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 1000));

  // Hover over Features button
  const featuresBtn = await page.$('.nav-features-btn');
  if (featuresBtn) {
    await featuresBtn.hover();
    await new Promise(r => setTimeout(r, 800));

    // Take screenshot of dropdown
    await page.screenshot({
      path: `${OUTPUT_DIR}/dropdown-test.png`,
      type: 'png'
    });
    console.log('Screenshot saved: dropdown-test.png');
  } else {
    console.log('Features button not found');
  }

  browser.disconnect();
}

testDropdown().catch(console.error);
