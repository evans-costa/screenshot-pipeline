const puppeteer = require('puppeteer');
require('dotenv').config();

async function screenshot(url) {
  let browser;

  try {
    browser = await puppeteer.launch({
      headless: 'new',
    });
    const page = await browser.newPage();
    await page.goto(url);
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
  screenshot(process.env.HOST);
}

module.exports = screenshot;
