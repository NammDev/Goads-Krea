import puppeteer from 'puppeteer';

const OUTPUT_DIR = '/Users/nammdev/Documents/Code/krea-v4/.claude/chrome-devtools/screenshots';

async function captureRecreation() {
  const browser = await puppeteer.launch({
    headless: false,
    args: ['--window-size=1920,1200']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  console.log('Capturing recreation...');
  await page.goto('http://localhost:3001', {
    waitUntil: 'networkidle2',
    timeout: 30000
  });

  // Wait for fonts and animations
  await new Promise(r => setTimeout(r, 3000));

  // Capture hero section
  await page.screenshot({
    path: `${OUTPUT_DIR}/recreation-hero.png`,
    type: 'png'
  });

  console.log('Capturing original...');
  await page.goto('https://www.krea.ai', {
    waitUntil: 'networkidle2',
    timeout: 60000
  });

  await new Promise(r => setTimeout(r, 5000));

  // Scroll to top
  await page.evaluate(() => window.scrollTo(0, 0));
  await new Promise(r => setTimeout(r, 1000));

  // Capture original
  await page.screenshot({
    path: `${OUTPUT_DIR}/original-hero.png`,
    type: 'png'
  });

  console.log('Done!');
  await browser.close();
}

captureRecreation().catch(console.error);
