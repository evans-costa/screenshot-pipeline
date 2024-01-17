require('dotenv').config();

module.exports = {
  preset: 'jest-puppeteer',
  globals: {
    baseURL: process.env.WEBSITE_URL ?? 'http://localhost:3000',
  },
  testMatch: ['**/tests/*.test.js'],
  setupFilesAfterEnv: ['./jest.image.js'],
  testTimeout: 10000,
};
