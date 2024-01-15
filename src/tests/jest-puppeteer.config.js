require('dotenv').config();

module.exports = {
  server: {
    command: `npm run dev`,
    port: 3000,
    launchTimeout: 30000,
    debug: true,
  },
  launch: {
    headless: 'new',
    ignoreDefaultArgs: ['--disable-extensions'],
  },
};
