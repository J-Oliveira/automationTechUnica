
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    "reporter": "mochawesome",

    "reporterOptions": {
        "overwrite": false
    }
  },

  e2e: {
    baseUrl: "https://www.magazineluiza.com.br/",
    setupNodeEvents(on, config) {
      const cucumber = require("cypress-cucumber-preprocessor").default;
      on("file:preprocessor", cucumber());
    },
    specPattern: 'cypress/e2e',
    supportFile: 'cypress/support/e2e.{js,jsx,ts,tsx}',
  }
});

