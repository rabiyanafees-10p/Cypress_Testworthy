/// <reference types="Cypress"/>
import loginPage from "../PageObjects/LoginPage";

describe ('Test Suite', function()
{
    it('Valid Login Test',function()
    {
        const login = new loginPage()
        login.visit()
        login.loginToTestworthy('rabiya.nafees@10pearls.com','Test@123')
          // Assert that the login is successful
            login.verifyLoginSuccess();
          });


            // login.invalidLoginEmail('rabiya.nafees@10pearls.co','Test@123')

          it('should display an error message with invalid credentials', () => {
            // Enter invalid email and password
            login.setEmail('invalid@example.com');
            login.setPassword('invalidPassword');

            // Click the login button
            login.clickLoginButton();

            // Assert that the error message is displayed
            login.verifyErrorMessage('Invalid email or password');
          });









})



