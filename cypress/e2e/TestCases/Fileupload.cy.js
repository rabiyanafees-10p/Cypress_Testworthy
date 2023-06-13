/// <reference types="Cypress"/>
import loginPage from "../PageObjects/LoginPage";
import selectProject from "../PageObjects/ProjectSelection";
import fileupload from "../PageObjects/Fileupload";
describe ('Test Suite', function()
{
   


    it('Import function testing',function()
    {
        const login = new loginPage()
        const project = new selectProject()
        const file = new fileupload()


        login.visit()
        login.loginToTestworthy('rabiya.nafees@10pearls.com','Test@123')
        project.selectProjectTestworthy();
        file.CSVFileupload();

    })
   
})