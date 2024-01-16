require('dotenv').config();

module.exports = {
  server: {
    command: 'npm run dev',
    launchTimeout: 30000,
    port: 3000,
    debug: true,
  },
  launch: {
    headless: 'new',
    ignoreDefaultArgs: ['--disable-extensions'],
  },
};
