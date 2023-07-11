import loginPage from "../PageObjects/LoginPage";
import selectProject from "../PageObjects/ProjectSelection";
import TestRun from "../PageObjects/TestRun.js"; // Update the file extension

describe('TestRun Test Suite', function () {
  it('Add Testrun', function () {
    const login = new loginPage();
    const project = new selectProject();

    const run = new TestRun();

    login.visit();
    login.loginToTestworthy('rabiya.nafees@10pearls.com', 'Test@123');
    project.selectProjectTestworthy();
    run.AddTestRun();
  });
})
