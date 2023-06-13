/// <reference types="Cypress"/>
import loginPage from "../PageObjects/LoginPage";
import selectProject from "../PageObjects/ProjectSelection";
import Report from "../PageObjects/Report";

describe ('Reports Test Suite', function()
{
    it('Genrate Report',function()
    {
        const login = new loginPage()
        const project = new selectProject()
        const report = new Report()

        login.visit();
        login.loginToTestworthy('rabiya.nafees@10pearls.com','Test@123');
        project.selectProjectTestworthy()
        report.reportSelection1()
    })


})