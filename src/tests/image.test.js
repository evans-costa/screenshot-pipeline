const { toMatchImageSnapshot } = require('jest-image-snapshot');
const screenshot = require('../scripts/screenshot');
expect.extend({ toMatchImageSnapshot });

describe('Visual Regression Test', () => {
  it('should page be visually equal', async () => {
    const image = await screenshot();

    expect(image).toMatchImageSnapshot();
  });
});
