const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
  });
  const page = await browser.newPage();
  await page.goto('http://localhost:3000');
  await page.screenshot({
    path: './images/screenshot.png',
    fullPage: true,
  });
  await browser.close();
  console.log('\n Screenshot captured successfully');
})().catch((err) => {
  console.error('Error while capturing screenshot: ', err.message);
});
