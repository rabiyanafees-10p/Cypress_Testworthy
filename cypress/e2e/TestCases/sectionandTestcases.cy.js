/// <reference types="Cypress"/>
import loginPage from "../PageObjects/LoginPage";
import selectProject from "../PageObjects/ProjectSelection";
import Milestone from "../PageObjects/Milestone";
import sectioandTestcases from "../PageObjects/AddSectionandTestcases";
// Import the global commands from 'global.js'
//import './globals';

describe ('Section and TestCases Test Suite', function()
{
    it('Add Section and TestCases ',function()
    {
        const login = new loginPage()
        const project = new selectProject()
        const section = new sectioandTestcases ()
        const milestone = new Milestone()


////
        login.visit();
        login.loginToTestworthy('rabiya.nafees@10pearls.com','Test@123');
        project.selectProjectTestworthy();
        milestone.addMilestone()
        section.addTestSuite();
        section.addSection();
 //          section.updateSection();
        section.addTestCase();
        section.editTestCase();
//////        section.updateTestSuite();
//////     section.deleteTestsuite();



   
        
    })


})