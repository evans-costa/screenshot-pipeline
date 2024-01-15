module.exports = {
  preset: 'jest-puppeteer',
  setupFilesAfterEnv: ['./jest.image.js'],
  testTimeout: 10000,
};
