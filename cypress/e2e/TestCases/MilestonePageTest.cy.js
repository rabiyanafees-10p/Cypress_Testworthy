/// <reference types="Cypress"/>
import loginPage from "../PageObjects/LoginPage";
import selectProject from "../PageObjects/ProjectSelection";
import Milestone from "../PageObjects/Milestone";

describe ('Milestone Test Suite', function()
{
    it('Add Milestone',function()
    {
        const login = new loginPage()
        const project = new selectProject()
        const milestone = new Milestone()


//        login.visit();
//        login.loginToTestworthy('rabiya.nafees@10pearls.com','Test@123');
//        project.selectProjectTestworthy()
//        milestone.addMilestone()
//        milestone.editMilestone()
//      milestone.deleteMilestone()

    })


})