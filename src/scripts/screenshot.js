const puppeteer = require('puppeteer');

async function screenshot() {
  let browser;

  try {
    browser = await puppeteer.launch({
      headless: 'new',
    });
    const page = await browser.newPage();
    await page.goto('http://localhost:3000');
    const image = await page.screenshot({
      path: './images/screenshot.png',
      fullPage: true,
    });
    console.log('\n Screenshot captured successfully');
    return image;
  } catch (err) {
    console.error('Error while capturing screenshot: ', err.message);
  } finally {
    await browser.close();
  }
}

if (require.main === module) {
  screenshot();
}

module.exports = screenshot;
