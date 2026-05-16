const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1280,
    viewportHeight: 720,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/**/*.js',
    supportFile: 'cypress/support/index.js',
    retries: {
      runMode: 2,
      openMode: 0,
    },
  },
});
