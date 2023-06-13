/// <reference types="Cypress"/>
import loginPage from "../PageObjects/LoginPage";
import selectProject from "../PageObjects/ProjectSelection";
import TestPlan from "../PageObjects/TestPlan";
import sectioandTestcases from "../PageObjects/AddSectionandTestcases";
import Milestone from "../PageObjects/Milestone";

describe (' TestRun Test Suite', function()
{
    it('Add TestPlan',function()
    {
        const login = new loginPage()
        const project = new selectProject()
         const milestone = new Milestone()
        const section = new sectioandTestcases ()
        const testPlan = new TestPlan()

        login.visit();
        login.loginToTestworthy('rabiya.nafees@10pearls.com','Test@123');
        project.selectProjectTestworthy();
        milestone.addMilestone()
        section.addSection();
        testPlan.addTestPlan();
    })


})