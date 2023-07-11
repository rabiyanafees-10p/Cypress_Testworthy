/// <reference types="Cypress"/>

import 'cypress-commands';

class TestRun {
  AddTestRun() {
    try {
      cy.get(':nth-child(5) > .pn-link').click({ force: true });
      cy.wait(4000);
      cy.contains('Test Run & Results', { timeout: 5000 }).should('be.visible');
      cy.get('#btnTestRun').click({ force: true });

      const currentDate = new Date();
      const name = 'Test Run ' + currentDate.toLocaleString();
      const comment = 'Automated TestingComment ' + currentDate.toLocaleString();

      cy.get('#Name')
        .type(name, { force: true })
        .should('have.value', name);

      const searchText = 'automated';

      cy.get('#selectedMilestone').click({ force: true });

      cy.get('#milestone-ul')
        .contains('span.name', searchText, { matchCase: false })
        .first()
        .click();

      const suiteName = 'Automated';
      cy.get('#selectedSuite').click({ force: true });
      cy.get('#testsuite_list')
        .find('li')
        .contains(suiteName)
        .first() //  first matching list item
        .click();

      cy.get('#btnAddEditRun').click();
    } catch (error) {

      cy.log('An error occurred: ', error);
    }

// Test Run Execution

   cy.wait(7000);
   //Select first record in TestRun screen
    cy.scrollTo(0, 15);
    cy.xpath('//*[@id="pills-row"]/div[2]/ul[1]/li[1]/div/div[1]/div[1]/label/span[2]/a')
      .first()
      .click({ force: true });
         cy.wait(4000);

       cy.get('.btn-status').click({ force: true });;
       cy.get('a[data-status="1"]').scrollIntoView();
       cy.get('a[data-status="1"]').click();

      cy.get('#formAddResult').click();
      cy.get('#Comment').click();
      cy.get('#Comment').type('Automated Comment');
      cy.get('#btnAddResult').click();
      cy.wait(3000);
      cy.get('button.btn-status').should('contain', 'Passed');




  }
}

export default TestRun;
//export default TestExecution;