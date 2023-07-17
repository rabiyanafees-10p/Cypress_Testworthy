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
      cy.log('Milestone Added');
      section.addTestSuite();
       cy.log('TestSuite Added');
      section.addSection();
       cy.log('Section Added');
      section.addTestCase();
     cy.log('TestCase Added');
      testPlan.addTestPlan();
       cy.log('TestPlan Added');
      run.AddTestRun();
       cy.log('TestRun Added');

      // Update Case Execution
      milestone.editMilestone();
      cy.log('Milestone Updated');
      section.updateTestSuite();
      cy.log('TestSuite Updated');
      //section.updateSection(); //mousehover click is some how not working
      section.editTestCase();
       cy.log('TestCase Updated');
      testPlan.editTestPlan();
       cy.log('TestPlan Updated');
      //report.reportSelection1();

      // Delete Case Execution
      testPlan.deleteTestPlan();
        cy.log('TestPlan Deleted');
      //section.deleteTestCase(); // Some issue appears to identify icon from mouse hover
      section.deleteTestsuite();
        cy.log('Testsuite Deleted');
      milestone.deleteMilestone();
      cy.log('Milestone Deleted');
    });
  });
});


