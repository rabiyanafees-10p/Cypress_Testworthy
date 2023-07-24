class TestPlan {

addTestPlan() {
  // Add Test Plan
  const testSuiteSelection = Cypress.env('testSuite');
  Cypress.env('testSuite', testSuiteSelection);
  cy.log(`The Testsuite name is: ${testSuiteSelection}`);

  cy.wait(8000);
  cy.get(':nth-child(4) > .pn-link').click({ force: true });
  cy.wait(4000);
  cy.contains('Test Plans', { timeout: 5000 }).should('be.visible');
  cy.get('#btnTestPlan').click({ force: true });

  const timestamp = new Date().toLocaleString();
  const description = `TestPlanName ${timestamp}`;
  cy.get('#Name').type(description);

  // Set Testplan name as a global variable
  Cypress.env('testPlan', description);

  // Access milestone name using Cypress.env()
  const milestoneName = Cypress.env('globalVariable');
  cy.get('#selectedMilestone').click({ force: true });
  cy.xpath("//input[contains(@id,'selectedMilestone')]").type(milestoneName);

  cy.wait(3000);
  cy.get('#btnAddRunAndSelectSuite').click({ force: true });

  // Ensure testSuiteSelection is defined and has a value
 if (testSuiteSelection) {
   // Wait for the element to become visible
   cy.get('#runSuiteId').should('be.visible').scrollIntoView().then(() => {
     // Now select the testSuiteSelection from the dropdown
     cy.get('#runSuiteId').select(testSuiteSelection);
   });
 } else {
   cy.log('testSuiteSelection is undefined or has no value.');
 }

  cy.get('#btnAddRuns').click({ force: true });
  cy.get('#btnAddEditPlan').click({ force: true });
  cy.get('#btnCloseCrossAdd > .close_cross').click({ force: true });
  cy.contains('Test Plans', { timeout: 5000 }).should('be.visible');
}



editTestPlan() {
  const testPlanSelection = Cypress.env('testPlan');
  Cypress.env('testPlan', testPlanSelection);
  cy.log(`The Test plan name is: ${testPlanSelection}`);

  cy.wait(4000);
  cy.get(':nth-child(2) > .container-fluid').click();
  cy.get(':nth-child(4) > .pn-link').then(($element) => {
    cy.wrap($element)
      .should('exist')
      .click();
  });

  cy.wait(4000);

  cy.get('.complete-li.test-plan-complete-list').first().find('a.text.pill').click({ force: true });
  cy.wait(4000);
  cy.get('h2.mb-3.pb-1.pt-4.font-weight-bold').should('contain', testPlanSelection);

  cy.get('.d-inline-block > .icon-ic_edit').click({ force: true });

  // Update the test plan name
  const updatedTestPlanName = `${testPlanSelection} Update`;
  cy.get('#Name').clear({ force: true }).type(updatedTestPlanName);

  // Save the test plan
  cy.get('#btnAddEditPlan').click({ force: true });
}


deleteTestPlan()
{
    const testPlanSelection = Cypress.env('testPlan');
    Cypress.env('testPlan', testPlanSelection);
     cy.log(`The Test plan name is: ${testPlanSelection}`);
    cy.wait(8000);
    cy.get(':nth-child(2) > .container-fluid').click({ force: true });
     cy.get(':nth-child(4) > .pn-link').click({ force: true });
     cy.wait(4000);

    cy.get('.complete-li.test-plan-complete-list').first().find('a.text.pill').click({ force: true });
    cy.wait(4000);
    cy.get('h2.mb-3.pb-1.pt-4.font-weight-bold').should('contain', testPlanSelection);

    cy.get('#ellipsisLink').within(() => {
    cy.get('#optionsEllipsis').click({ force: true });
        });

     cy.get('.dropdown-menu.ellipsis-options').within(() => {
     cy.get('[id^="deleteTestPlan_"]').click({ force: true });

     cy.xpath("//button[@id='ConfirmDelete']").click({ force: true });
    // cy.get('.modal-dialog .modal-header .close').click();
   //cy.get('.header-nav > ul').dblclick({ force: true });

});

}

}
export default TestPlan;

