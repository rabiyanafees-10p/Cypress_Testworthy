/// <reference types="Cypress"/>
class Milestone {


  addMilestone()
  {
    cy.get(':nth-child(2) > .pn-link').click();   // Select  Milestone tab
    cy.contains('Add Milestone').scrollIntoView().should('be.visible');
    cy.contains('Add Milestone').click({ force: true });

    const timestamp = new Date().toLocaleString();
    const name = `Automated Milestone ${timestamp}`;
    cy.get('#Name').type(name);

    cy.get('#Description').type('Automated Milestone Description').should('have.value', 'Automated Milestone Description');
    cy.get('#dpStartDate').type('2023-07-05').should('have.value', '2023-07-05');
    cy.get('#dpEndDate').type('2023-10-12').should('have.value', '2023-10-12');
    cy.xpath('//button[@id="btnAddEditMilestone"]').should('have.text', 'Add Milestone').click();
    cy.wait(4000);

    // Set a global variable with the milestone name
    Cypress.env('globalVariable', name);

    // Log the milestone name
    cy.log(`The Milestone name is: ${name}`);
  }


  editMilestone()
  {
  const milestoneName = Cypress.env('globalVariable');
        cy.wait(4000);
        cy.get(':nth-child(2) > .pn-link').should('be.visible').click();

     cy.wait(4000);
     cy.log(`The Milestone name is: ${milestoneName}`);

     cy.xpath(`(//a[contains(text(),'${milestoneName}')])[2]`).first().dblclick({ force: true }); // Trigger the mouseover event on the container element

     cy.get('.icon-ic_edit').click();

      //Update Milestone Name
      cy.get('#Name')
      .invoke('val')
      .then((currentValue) => {

        const updatedMilestoneName = `${currentValue} update`;
        cy.get('#Name').clear().type(updatedMilestoneName);
        cy.get('#Name').should('have.value', updatedMilestoneName);

        Cypress.env('globalVariable', updatedMilestoneName);
        cy.log(`The Milestone name is: ${updatedMilestoneName}`);
      });

     cy.get('#Description')
      .invoke('val')
      .then((currentValue) => {
        const updatedMilestoneDescription = `${currentValue} update`; // Corrected the variable name and template literal
        cy.get('#Description').clear().type(updatedMilestoneDescription);
        cy.get('#Description').should('have.value', updatedMilestoneDescription);
      });

       cy.get('#btnEditMilestone').click({force:true})


  }

   deleteMilestone()
      {
        const milestoneName = Cypress.env('globalVariable');
        cy.xpath("(//li//a[contains(text(),'Milestone')])[1]").click({force:true});
        cy.log(`The Milestone name is: ${milestoneName}`);
        cy.xpath(`(//a[contains(text(),'${milestoneName}')])[2]`).dblclick({ force: true });
        cy.xpath(`//span[contains(@id,'milestoneEllipsesDropdown')]`).click();
        cy.xpath(`//a[contains(@id,'deleteMilestone')]`).click();
        cy.xpath(`(//a[contains(@id,'btnDeleteMilestone')])[1]`).click();
        cy.xpath(`(//button[contains(@id,'btnCloseCrossDelete')])[1]`).click({ force: true });
        //cy.get('#ms-deleted > .modal-dialog > .modal-content > .modal-body-container > :nth-child(1) > .modal-header > #btnCloseCrossDelete > .close_cross').click();

      }

}

export default Milestone;
