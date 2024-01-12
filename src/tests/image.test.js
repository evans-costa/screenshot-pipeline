const { toMatchImageSnapshot } = require('jest-image-snapshot');
const path = require('path');
const puppeteer = require('puppeteer');
expect.extend({ toMatchImageSnapshot });

describe('Visual Regression Test', () => {
  let browser;
  const jestImageSnapshot = path.join(__dirname, '..', '..', 'images');

  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: 'new' });
  });

  it('should fail if there is more than 1% difference', async () => {
    const page = await browser.newPage();
    await page.goto('http://localhost:3000');

    const image = await page.screenshot();

    expect(image).toMatchImageSnapshot({
      customSnapshotsDir: jestImageSnapshot,
    });
  });

  afterAll(async () => {
    await browser.close();
  });
});
