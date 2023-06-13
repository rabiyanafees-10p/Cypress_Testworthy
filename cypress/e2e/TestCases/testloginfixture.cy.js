//import LoginPage from './testloginfixture';
import Test from "../PageObjects/testloginfixture";

describe('Login Tests', () => {
  let loginPage;
  let loginData;

  before(() => {
    loginPage = new Test();

    cy.fixture('login').then((data) => {
      loginData = data;
    });
  });

  beforeEach(() => {
    loginPage.visit();
  });

  it('should login with valid credentials', () => {
    const { username, password } = loginData.validCredentials;

    loginPage.loginToTestworthy(username, password);

    // Add your verification logic here
    loginPage.verifyLoginSuccess();
  });

  it('should display error message with invalid credentials', () => {
    const { username, password } = loginData.invalidCredentials;

    loginPage.loginToTestworthy(username, password);

    // Add your verification logic here
    loginPage.verifyErrorMessage('Incorrect email address and / or password.');
  });
});
