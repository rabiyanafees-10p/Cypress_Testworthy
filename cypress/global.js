//const timestamp = new Date().toLocaleString();

Cypress.Commands.add('setGlobaltimestamp', (timestamp) => {
  Cypress.env('timestamp', timestamp);
});

Cypress.Commands.add('setGlobalTestSuiteTitle', (testSuiteTitle) => {
  Cypress.env('testSuiteTitle', testSuiteTitle);
});

Cypress.Commands.add('setGlobalSectionName', (sectionName) => {
  Cypress.env('sectionName', sectionName);
});

Cypress.Commands.add('setGlobalTestCaseTitle', (testCaseTitle) => {
  Cypress.env('testCaseTitle', testCaseTitle);
});
