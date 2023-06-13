


/// <reference types="Cypress"/>

//class TestPlan
//{
//  addTestPlan()
//  {
//
//      //Add Test Plan
//
//     cy.get(':nth-child(4) > .pn-link').click({force: true});
//           cy.wait(4000);
//      cy.contains('Test Plans', { timeout: 5000 }).should('be.visible');
//      cy.get('#btnTestPlan').click({force: true});
//
//      const timestamp = new Date().toLocaleString();
//      const description = `TestPlanName ${timestamp}`;
//      cy.get('#Name').type(description);
//
//
////      cy.get('#selectedMilestone').should('be.visible').click({force: true});
////      const milestoneName = 'Automated Section A Description 4/30/2023, 10:49:30 PM'; // Replace with the name of the milestone you want to select
////      cy.contains('.milestone-list-items', milestoneName).click({force: true});
//
//
//      cy.get('#btnAddRunAndSelectSuite').click({force: true});
//     //cy.get('#runSuiteId').should('be.visible').select(Cypress.env('$tsName'), { force: true });
////     cy.xpath("//select[@id='assignedToDropDown']/option[last()]").click({force: true})
////       .then($option => {
////         cy.wrap($option).invoke('val').then((val) => {
////           cy.get('#assignedToDropDown').select(val, { force: true })
////         })
//
//
//// access the global variable
//const globalVariable = Cypress.env('globalVariable');
//// Assuming the global variable is defined as 'globalVariable'
////cy.get(`#${globalVariable}`).click();
////cy.get('#runSuiteId').should('be.visible').select('//option[contains(text(),'Automated Test Suite 5/8/2023, 5:45:00 PM')]', { force: true });
//
//
//
//const suiteText = 'Automated Test Suite 5/8/2023, 5:45:00 PM';
//cy.get('#runSuiteId')
//  .should('be.visible')
//  .select(suiteText, { force: true });
//
//
//
//
//
//      cy.get('#btnAddRuns').click({force: true});
//      cy.get('#btnAddEditPlan').click({force: true});
//      cy.get('#btnCloseCrossAdd > .close_cross').click({force: true});
//      cy.contains('Test Plans', { timeout: 5000 }).should('be.visible');
//      //cy.get(TestPlanName).should('have.text', EnterTestPlanName);
//
//
//}}
//
//    export default TestPlan


class TestPlan {
  addTestPlan() {
    // Add Test Plan
     cy.wait(8000);
    cy.get(':nth-child(4) > .pn-link').click({ force: true });
    cy.wait(4000);
    cy.contains('Test Plans', { timeout: 5000 }).should('be.visible');
    cy.get('#btnTestPlan').click({ force: true });

    const timestamp = new Date().toLocaleString();
    const description = `TestPlanName ${timestamp}`;
    cy.get('#Name').type(description);

    // Access milestone name using Cypress.env()
    const milestoneName = Cypress.env('globalVariable');
    cy.get('#selectedMilestone').click({ force: true });
    cy.xpath("//input[contains(@id,'selectedMilestone')]").type(milestoneName);
    //cy.contains('.milestone-list-items', milestoneName).scrollIntoView().click({ force: true });
      //cy.contains('milestone-list-items').scrollIntoView().should('be.visible').select(milestoneName, { force: true });


    cy.wait(3000);

    cy.get('#btnAddRunAndSelectSuite').click({ force: true });

    const suiteText = 'Automated Test Suite 6/2/2023, 5:42:49 PM';
    cy.get('#runSuiteId').should('be.visible').select(suiteText, { force: true });

    cy.get('#btnAddRuns').click({ force: true });
    cy.get('#btnAddEditPlan').click({ force: true });
    cy.get('#btnCloseCrossAdd > .close_cross').click({ force: true });
    cy.contains('Test Plans', { timeout: 5000 }).should('be.visible');
  }
}

export default TestPlan;

