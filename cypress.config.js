const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  
});

{
  "chromeWebSecurity"; false
}

{
  "experimentalSessionAndOrigin"; true
}

{
 "watchForFileChanges"; false
 //restrict to execute cases on every change
}



// File Download
//link reference: https://www.programsbuzz.com/article/download-file-cypress
const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
         on('task', {downloadFile})
      }
    }
})
