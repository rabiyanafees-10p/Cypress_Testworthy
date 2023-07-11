class FixtureLogin {

  get emailInput() {
    return cy.get('#Email');
  }

  get passwordInput() {
    return cy.get('#Password');
  }

  get loginButton() {
    return cy.get('#btnLogin');
  }

  visit() {
    cy.visit("https://testworthy.us/");
  }

  loginToTestworthy(username, password) {
   cy.contains('Log In').click();
           cy.wait(4000);
    this.emailInput.type(username);
    this.passwordInput.type(password);
    this.loginButton.click();
  }

  verifyErrorMessage(message) {
    cy.contains('.Password-error', message).should('be.visible');
  }

   verifyLoginSuccess() {
      // Add your verification logic here
      cy.url().should('include', '/Dashboard/Index');
    }

}

export default FixtureLogin;
