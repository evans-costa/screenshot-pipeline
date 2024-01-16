require('dotenv').config();

module.exports = {
  preset: 'jest-puppeteer',
  globals: {
    baseURL: 'https://screenshot-pipeline.vercel.app/',
  },
  testMatch: ['**/tests/*.test.js'],
  setupFilesAfterEnv: ['./jest.image.js'],
  testTimeout: 10000,
};
