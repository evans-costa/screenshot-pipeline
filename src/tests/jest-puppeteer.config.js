require('dotenv').config();

module.exports = {
  server: process.env.BASE_URL
    ? undefined
    : {
        command: `npm run start`,
        launchTimeout: 30000,
        debug: true,
      },
  launch: {
    headless: 'new',
    ignoreDefaultArgs: ['--disable-extensions'],
  },
};
