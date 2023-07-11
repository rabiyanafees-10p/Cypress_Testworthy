/// <reference types="Cypress"/>

class Report
{
  reportSelection1()
  {

  cy.wait(4000);
    //Report Feature
    const milestoneName = Cypress.env('globalVariable');

            cy.get(':nth-child(6) > .pn-link').click();
            cy.get('#collapse2 > .tab-content > #pills-row > :nth-child(1) > .row > .col-md-12 > .run-test-btn > .btn').click({ force: true });
            const currentDate = new Date();
            const name = 'Automated Report ' + currentDate.toLocaleString();
            cy.get('#NameTxt').type(name,{ force: true });
            cy.get('#DescTxt').type('Automated Description');
            const searchText = 'Automated';
            cy.get('#ddlMilestone').select(milestoneName); // Open the dropdown menu
            cy.get('#milestoneReportBtn').click();
            cy.wait(7000);
          //report downloading
           cy.get('.icon-download').click();
            cy.wait(4000);

   }}

    export default Report
