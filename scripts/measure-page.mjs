import { chromium } from 'playwright-core';
import path from 'path';

async function run() {
  const browser = await chromium.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
  });

  const artifactDir = 'C:\\Users\\choi\\.gemini\\antigravity-ide\\brain\\3054269d-01cd-4a6d-9332-1c8f1e86a4f6';

  const viewports = [
    { name: 'mobile-375', width: 375, height: 812 },
    { name: 'mobile-390', width: 390, height: 844 },
    { name: 'desktop-1440', width: 1440, height: 900 },
  ];

  for (const vp of viewports) {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 2,
    });
    const page = await context.newPage();
    await page.goto('http://localhost:3007', { waitUntil: 'networkidle' });

    // Wait for images and fonts to settle
    await page.waitForTimeout(1000);

    const metrics = await page.evaluate(() => {
      const docHeight = document.documentElement.scrollHeight;
      const scrollWidth = document.documentElement.scrollWidth;
      const clientWidth = document.documentElement.clientWidth;

      const sections = Array.from(document.querySelectorAll('header, section, footer')).map((el) => ({
        tag: el.tagName,
        id: el.id || el.getAttribute('aria-label') || 'unnamed',
        height: el.getBoundingClientRect().height,
      }));

      // Check visible interactive touch targets
      const touchTargets = Array.from(document.querySelectorAll('a, button'))
        .filter((el) => {
          const style = window.getComputedStyle(el);
          return style.display !== 'none' && style.visibility !== 'hidden' && el.offsetParent !== null;
        })
        .map((el) => {
          const rect = el.getBoundingClientRect();
          return {
            text: el.innerText.trim().slice(0, 20),
            width: Math.round(rect.width),
            height: Math.round(rect.height),
            slot: el.getAttribute('data-slot') || '',
            valid: rect.width >= 43.5 && rect.height >= 43.5,
          };
        });

      // Check heading hierarchy
      const h1Count = document.querySelectorAll('h1').length;
      const h2Count = document.querySelectorAll('h2').length;

      // Check skip-link
      const skipLink = document.querySelector('.skip-link');
      const skipHref = skipLink ? skipLink.getAttribute('href') : null;

      return {
        docHeight,
        scrollWidth,
        clientWidth,
        hasHorizontalScroll: scrollWidth > clientWidth,
        sections,
        touchTargets,
        h1Count,
        h2Count,
        skipHref,
      };
    });

    console.log(`\n=== Viewport: ${vp.name} (${vp.width}x${vp.height}) ===`);
    console.log(`Document scrollHeight: ${metrics.docHeight}px (Target: <= 6000px) -> ${metrics.docHeight <= 6000 ? 'PASS' : 'EXCEEDS'}`);
    console.log(`Horizontal overflow: ${metrics.hasHorizontalScroll ? 'FAIL' : 'PASS'} (scrollWidth: ${metrics.scrollWidth}, clientWidth: ${metrics.clientWidth})`);
    console.log(`Heading counts: H1 = ${metrics.h1Count}, H2 = ${metrics.h2Count}`);
    console.log(`Skip link target: ${metrics.skipHref}`);

    console.log('Section Heights:');
    metrics.sections.forEach((s) => console.log(`  - ${s.tag}#${s.id}: ${Math.round(s.height)}px`));

    const invalidTargets = metrics.touchTargets.filter((t) => !t.valid);
    console.log(`Touch targets >= 44x44px: ${invalidTargets.length === 0 ? 'PASS (all ' + metrics.touchTargets.length + ' visible targets valid)' : 'FAIL: ' + JSON.stringify(invalidTargets)}`);

    // Screenshot full page
    const screenshotPath = path.join(artifactDir, `verify_${vp.name}.png`);
    await page.screenshot({ path: screenshotPath, fullPage: true });
    console.log(`Screenshot saved: ${screenshotPath}`);

    // Test clicking header CTA
    await page.click('[data-slot="header-menu"]');
    await page.waitForTimeout(600);
    const scrollYAfterHeader = await page.evaluate(() => window.scrollY);
    console.log(`Header CTA clicked -> scrollY: ${Math.round(scrollYAfterHeader)}px`);

    await context.close();
  }

  await browser.close();
}

run().catch(console.error);
