import { chromium } from 'playwright-core';

async function testInteractions() {
  const browser = await chromium.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
  });

  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();
  await page.goto('http://localhost:3007', { waitUntil: 'networkidle' });

  // 1. Test Skip Link
  await page.keyboard.press('Tab');
  const skipFocused = await page.evaluate(() => {
    const active = document.activeElement;
    return active && active.classList.contains('skip-link');
  });
  console.log('Skip Link focused on first Tab:', skipFocused);

  // 2. Test Hero CTA click
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(300);
  await page.click('[data-slot="hero-menu"]');
  await page.waitForTimeout(600);
  const scrollYAfterHeroCTA = await page.evaluate(() => window.scrollY);
  console.log('Hero CTA clicked -> scrollY:', Math.round(scrollYAfterHeroCTA));

  // 3. Test Gallery Carousel
  const galleryInitText = await page.evaluate(() => {
    const el = document.querySelector('[role="region"][aria-roledescription="carousel"]');
    return el ? el.querySelector('span.tracking-data')?.innerText : null;
  });
  console.log('Gallery initial indicator:', galleryInitText);

  // Click next button
  await page.click('button[aria-label="다음 이미지 보기"]');
  await page.waitForTimeout(600);
  const galleryNextText = await page.evaluate(() => {
    const el = document.querySelector('[role="region"][aria-roledescription="carousel"]');
    return el ? el.querySelector('span.tracking-data')?.innerText : null;
  });
  console.log('Gallery after next click indicator:', galleryNextText);

  // Click prev button
  await page.click('button[aria-label="이전 이미지 보기"]');
  await page.waitForTimeout(600);
  const galleryPrevText = await page.evaluate(() => {
    const el = document.querySelector('[role="region"][aria-roledescription="carousel"]');
    return el ? el.querySelector('span.tracking-data')?.innerText : null;
  });
  console.log('Gallery after prev click indicator:', galleryPrevText);

  await browser.close();
}

testInteractions().catch(console.error);
