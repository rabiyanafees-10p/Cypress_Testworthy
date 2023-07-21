const { defineConfig } = require("cypress");
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin');

module.exports = defineConfig({
  env: {
    CYPRESS_STDOUT_WIDTH: 1000
  },
  chromeWebSecurity: false,
  e2e: {
    experimentalSessionAndOrigin: true,

    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', { downloadFile });
      // File Download .... //link reference: https://www.programsbuzz.com/article/download-file-cypress
    },
  },
  watchForFileChanges: false,
  defaultCommandTimeout: 60000,
  pageLoadTimeout: 80000,


});
