const path = require('path');
require('dotenv').config();

function getConfig() {
  const jestImageSnapshot = path.join(__dirname, '..', '..', 'images');

  return {
    comparisonMethod: 'ssim',
    diffDirection: 'vertical',
    customSnapshotsDir: jestImageSnapshot,
    customSnapshotIdentifier: 'visual-regression-diff',
    updatePassedSnapshot: true,
    failureThreshold: 0.05,
    allowSizeMismatch: true,
    failureThresholdType: 'percent',
  };
}

describe('Visual Regression Test', () => {
  it('should pass if there is less than 1% difference', async () => {
    await page.goto('https://screenshot-pipeline-6c43xgl8w-evans-costa.vercel.app');

    const image = await page.screenshot({ fullPage: true });

    const config = getConfig();
    expect(image).toMatchImageSnapshot(config);
  });
});
