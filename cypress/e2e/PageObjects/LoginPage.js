/// <reference types="Cypress"/>

class loginPage
{
    visit()
    {
     cy.visit("https://testworthy.us/")
     }

     loginToTestworthy(UserName, Password)
        {
          cy.contains('Log In').click();
         cy.wait(4000);

         cy.get('#Email').type(UserName);
         cy.get('#Password').type(Password);
         cy.get('#btnLogin').click();

}

   verifyLoginSuccess() {
     // Verify that the login is successful
     cy.url().should('include', '/dashboard');
   }

   verifyErrorMessage(message) {
     // Verify that the error message is displayed
     cy.get('.error-message').should('have.text', message);
   }






  /* //code for bypassing exceptions Code 1
    cy.on('uncaught:exception', (err, runnable) => {
        expect(err.message).to.include('something about the error')

        // using mocha's async done callback to finish
        // this test so we prove that an uncaught exception
        // was thrown
        done()

        // return false to prevent the error from
        // failing this test
        return false
      })

      /*
      //   code for bypassing exceptions Solution No.2
      it('is doing something very important', (done) => {
        // this event will automatically be unbound when this
        // test ends because it's attached to 'cy'
        cy.on('uncaught:exception', (err, runnable) => {
          expect(err.message).to.include('something about the error')

          // using mocha's async done callback to finish
          // this test so we prove that an uncaught exception
          // was thrown
          done()

          // return false to prevent the error from
          // failing this test
          return false
        */
      //})


   invalidLoginEmail(UserName, Password)
   {
      cy.contains('Log In').click();
      cy.wait(4000);

      cy.get('#Email').type(UserName);
      cy.get('#Password').type(Password);
      cy.get('#btnLogin').click();

      // Addinvalid EMail asserations to verify data and also add not logged in URL or param

   }

}

    export default loginPage




