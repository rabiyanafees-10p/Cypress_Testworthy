/// <reference types="Cypress"/>
//import '../global';
//import 'D:/cypress/Cypress_Automation/cypress/e2e/global';
//import globalFunction from './global';
class SectionAndTestcases {

  addTestSuite() {
 const timestamp = new Date().toLocaleString();
    // Add Test suite and Testcases
    let testSuiteName = `Automated Test Suite ${new Date().toLocaleString()}`;

    cy.get(':nth-child(3) > .pn-link').click();
    cy.contains('Add Test Suite', { timeout: 5000 })
      .scrollIntoView()
      .should('be.visible')
      .click({ force: true });

    cy.get('#txtAddEditTestSuiteTitle').scrollIntoView().should('be.visible').then(($input) => {
      cy.wrap($input)
        .type(testSuiteName)
        .should('have.value', testSuiteName);
      cy.log(`The test suite name is ${testSuiteName}`);
    });
//----------------------------------
    // Set a global variable
    Cypress.env('testSuite', testSuiteName);
    cy.log(`The test suite name is ${testSuiteName}`);

//-----------------------------------
    cy.get('#Description').type('Automated Description').should('have.value', 'Automated Description');
    cy.get('#btnAddEditTestSuite').click();
    cy.wait(4000);
    cy.get('#added-testsuite .close_cross').click();

    }


 updateTestSuite ()
  {
     const updateTestSuiteName = Cypress.env('testSuite');  //Cypress.env('testSuite', testSuiteName);
     //cy.xpath('//a[contains(text(),"Test Suites & Cases")]').eq(1).click({ force: true });
     cy.wait(4000);
     cy.get(':nth-child(3) > .pn-link').click({ force: true });
     cy.wait(4000);
     cy.log(`The test suite name is ${updateTestSuiteName}`);
     cy.xpath(`//a[contains(text(), '${updateTestSuiteName}')]`).dblclick({ force: true });   // Selecting testsuite Created record
     cy.wait(4000);
     //cy.get('#editTestSuite > .icon-ic_edit').click({ force: true });
     cy.xpath('//*[@id="editTestSuite"]/i').should('be.visible').dblclick({ force: true });
     cy.wait(6000);
      //Update Tessuite Name
           cy.get('#txtAddEditTestSuiteTitle')
           .invoke('val')
           .then((currentValue) => {
             const updatedTestsuite = `${currentValue} Update`;
             cy.get('#txtAddEditTestSuiteTitle').clear().type(updatedTestsuite);
             cy.get('#txtAddEditTestSuiteTitle').should('have.value', updatedTestsuite);

             Cypress.env('testSuite', updateTestSuiteName);
             cy.log(`The Testsuite name is: ${updateTestSuiteName}`);
           });
      cy.get('#btnAddEditTestSuite').click();
  }

  deleteTestsuite()
  {
    const deleteTestsuiteName = Cypress.env('testSuite');  //Cypress.env('testSuite', testSuiteName);
    cy.wait(8000);
    //cy.xpath('//body[1]/div[2]/div[1]/div[1]/ul[1]').dblclick({ force: true });
    cy.wait(4000);
    cy.get(':nth-child(3) > .pn-link').click({ force: true });
    cy.wait(4000);
    cy.log(`The test suite name is ${deleteTestsuiteName}`);
    cy.xpath(`//a[contains(text(), '${deleteTestsuiteName}')]`).dblclick({ force: true });
    cy.get('#dropdownMoreOptionsTestSuite').click({ force: true });
    cy.xpath(`//span[contains(text(),'Delete Suite')]`).click();
    cy.get('#btnDeleteSuite').click({ force: true });
    cy.xpath('//body/div[2]/div[2]/div[2]/section[5]/div[8]/div[1]/div[1]/div[1]/div[1]/div[1]/button[1]/span[1]').click({ force: true });
    //cy.get(':nth-child(2) > .modal-header > .close > .close_cross').click({ force: true });
    cy.get('[aria-label="Close"]').click({ force: true }); // close the deleted successfully modal
  }


    addSection ()
    {
    const timestamp = new Date().toLocaleString();
    // Select Created Testsuite
    cy.wait(7000);
    cy.scrollTo(0, 15);
    cy.xpath('//*[@id="pills-row"]/div[2]/ul[1]/li/div/div[1]/div[1]/label/span[2]/a')
      .first()
      .click({ force: true });

    // Add Section
    cy.wait(5000);
    cy.contains('Let’s write your first test case!').should('be.visible');
    cy.get('button:contains("Add Section")').click({ force: true });

    // Section name with date and timestamp
    const sectionName = `Automated Section ${timestamp}`;
    cy.get('#tbNameAddSection').type(sectionName);
    cy.get('#tbDescriptionAddSection').type('Automated Section A Description');
    cy.get('#btnAddSection').click();
    cy.wait(4000);
    cy.get('#btnCloseCrossAdd > .close_cross').click();

       // Set a global variable
       Cypress.env('sectionVariable', sectionName);
       cy.log(`The test suite name is ${sectionName}`);
    }

    updateSection() {
        const testsuite = Cypress.env('testSuite'); // Get the test suite name
        const sectionName = Cypress.env('sectionVariable'); // Get the section name

        cy.wait(4000);
         cy.xpath('//a[contains(text(),"Test Suites & Cases")]').eq(1).click({ force: true });

        cy.wait(4000);
        cy.log(`The testsuite Name is ${testsuite}`);
        cy.xpath(`//a[contains(text(), '${testsuite}')]`).dblclick({ force: true }); // Selecting testsuite Created record
        cy.log(`The testsuite Name is ${testsuite}`);
        cy.wait(4000);

     cy.get('.select-row:first-child').should('be.visible').scrollIntoView().find('.row-head').click({ force: true });

            cy.wait(4000);
        cy.get('#tbNameAddSection')
          .invoke('val')
          .then((currentValue) => {
            const updatedSectionName = `${currentValue} Update`;
            cy.get('#tbNameAddSection').clear().type(updatedSectionName);
            cy.get('#tbNameAddSection').should('have.value', updatedSectionName);

            Cypress.env('sectionVariable', updatedSectionName); // Update the section name in the global variable
            cy.log(`The updated section name is: ${updatedSectionName}`);
          });

        cy.get('#btnEditSection').click({ force: true });
      }


    addTestCase ()
    {
    const timestamp = new Date().toLocaleString();
    // Add Testcases
    cy.wait(4000);
    //cy.scrollTo(0, 15);
    cy.get('button:contains("Add Test Case")').click({ force: true });
    cy.contains('h4', 'Add Test Case').should('be.visible');

    // Testcase name with date and timestamp
    const testcaseTitle = `Automated Testcase ${timestamp}`;
    cy.wait(4000);
    cy.get('#Title').scrollIntoView().should('be.visible');
    cy.xpath("//input[contains(@name,'Title')]").type(testcaseTitle, { force: true });
    cy.xpath('//input[@id="Smoke"]').click({ force: true }); // smoke checked on
    cy.get('#btnUpdateCase').click({ force: true });

    // Set a global variable
    Cypress.env('testCaseVariable', testcaseTitle);
    cy.log(`The test suite name is ${testcaseTitle}`);
}


    editTestCase() {
      const testsuite = Cypress.env('testSuite'); // Get the test suite name
      const sectionName = Cypress.env('sectionVariable'); // Get the section name
      const updateTestCaseTitle = Cypress.env('testcaseTitle'); // Get the test case title

      cy.wait(4000);
      cy.xpath('//a[contains(text(),"Test Suites & Cases")]').eq(1).click({ force: true });
      cy.wait(4000);
      cy.log(`The testsuite Name is ${testsuite}`);
      cy.xpath(`//a[contains(text(), '${testsuite}')]`).dblclick({ force: true }); // Selecting test suite created record

      // Select the Testcase to update
      cy.log(`The test case name is ${updateTestCaseTitle}`);
      cy.wait(4000);
      cy.get('div.display-table.border-bottom.display-table-icons.row.tooltipJS')
        .click({ force: true })  // Example action: click on the element
        .should('be.visible');  // Example assertion: check if the element is visible

    cy.get('.case-title').click({ force: true });
    cy.get('.icon-ic_edit').click({ force: true });  // Click on the edit link

    //Update title value firstly invoke existing value
    cy.get('div.col.error-msg input#Title')
      .invoke('val')
      .then((currentValue) => {
        const updatedTestCaseName = `${currentValue} Update`;
        cy.get('div.col.error-msg input#Title')
          .clear({ force: true })
          .type(updatedTestCaseName);
        cy.get('div.col.error-msg input#Title')
          .should('have.value', updatedTestCaseName);
      });
       cy.get('#btnUpdateCase').click({ force: true });
    }

deleteTestCase ()
{

      const testsuite = Cypress.env('testSuite'); // Get the test suite name
      const sectionName = Cypress.env('sectionVariable'); // Get the section name
      const updateTestCaseTitle = Cypress.env('testcaseTitle'); // Get the test case title

      cy.wait(4000);
      cy.xpath('//a[contains(text(),"Test Suites & Cases")]').eq(1).click({ force: true });

      cy.wait(4000);
      cy.log(`The testsuite Name is ${testsuite}`);
      cy.xpath(`//a[contains(text(), '${testsuite}')]`).dblclick({ force: true }); // Selecting test suite created record

      cy.get('.tooltipJS').eq(0).trigger('mouseover');
    //  cy.get('.delete-icon.tooltipJS').eq(0).click({ force: true });

    cy.get('div.table-cell.fiftyPer.table-cell')
      .find('div.table-cell.pl-3.hover-row-edit.justify-to-end')
      .trigger('mouseover')
      .find('span.delete-icon.tooltipJS')
      .click();

}


}

export default SectionAndTestcases;
