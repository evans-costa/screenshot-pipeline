const path = require('path');
require('dotenv').config();

function getConfig() {
  const jestImageSnapshot = path.join(__dirname, '..', '..', 'images');

  return {
    customSnapshotsDir: jestImageSnapshot,
    customSnapshotIdentifier: 'visual-regression-diff',
    updatePassedSnapshot: true,
    failureThreshold: 0.1,
    allowSizeMismatch: true,
    failureThresholdType: 'percent',
  };
}

describe('Visual Regression Test', () => {
  it('should pass if there is less than 10% difference', async () => {
    await page.goto(baseURL);

    const image = await page.screenshot({ fullPage: true });

    const config = getConfig();
    expect(image).toMatchImageSnapshot(config);
  });
});
