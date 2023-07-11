// <reference types="Cypress"/>
import FixtureLogin from "../PageObjects/testloginfixture";
import selectProject from "../PageObjects/ProjectSelection";
import Milestone from "../PageObjects/Milestone";
import sectioandTestcases from "../PageObjects/AddSectionandTestcases";
import TestPlan from "../PageObjects/TestPlan";
import TestRun from "../PageObjects/TestRun.js";
import Report from "../PageObjects/Report";
import fileupload from "../PageObjects/Fileupload";

describe('Testworthy Execution of Add, Edit, Delete Cases', function() {
  let loginPage;
  let loginData; // Declare loginData variable

  before(() => {
    loginPage = new FixtureLogin();

    cy.fixture('login').then((data) => {
      loginData = data;
    });
  });

  beforeEach(() => {
    loginPage.visit();
  });

  it('Testworthy Executions', function() {
    const login = new FixtureLogin();
    const project = new selectProject();
    const milestone = new Milestone();
    const section = new sectioandTestcases();
    const testPlan = new TestPlan();
    const run = new TestRun();
    const file = new fileupload();
    const report = new Report();

    cy.log('Loading login data...'); // Add log to indicate the start of loading login data

    cy.wrap(loginData).then((data) => {
      const { username, password } = data.validCredentials;
      login.loginToTestworthy(username, password);

      cy.fixture('login.json').then((data) => {
        const projectName = data.projectName;
        project.selectProjectTestworthy(projectName);
      });

      milestone.addMilestone();
      section.addTestSuite();
      section.addSection();
      section.addTestCase();
      testPlan.addTestPlan();
      run.AddTestRun();

      // Update Case Execution
      milestone.editMilestone();
      section.updateTestSuite();
      //section.updateSection(); //mousehover click is some how not working
      section.editTestCase();
      testPlan.editTestPlan();
      //report.reportSelection1();

      // Delete Case Execution
      testPlan.deleteTestPlan();
      //section.deleteTestCase(); // Some issue appears to identify icon from mouse hover
      section.deleteTestsuite();
      milestone.deleteMilestone();
    });
  });
});


