///// <reference types="Cypress"/>
//import loginPage from "../PageObjects/LoginPage";
//import selectProject from "../PageObjects/ProjectSelection";
//
//describe ('Test Suite', function()
//{
//    it('Select Tastebuddy Project',function()
//    {
//        const login = new loginPage()
//        const project = new selectProject()
//        login.visit();
//        login.loginToTestworthy('rabiya.nafees@10pearls.com','Test@123');
//        project.selectProjectTestworthy();
//    })
//
//
//})

/// <reference types="Cypress"/>
import LoginPage from "../PageObjects/LoginPage";
import selectProject from "../PageObjects/ProjectSelection";

describe('Test Suite', function() {
  it('Select TasteBuddy Project', function() {
    const login = new LoginPage();
    const project = new selectProject();

    login.visit();
    login.loginToTestworthy('rabiya.nafees@10pearls.com', 'Test@123');

    cy.fixture('login.json').then((data) => {
      const projectName = data.projectName;
      project.selectProjectTestworthy(projectName);
    });
  });
});
