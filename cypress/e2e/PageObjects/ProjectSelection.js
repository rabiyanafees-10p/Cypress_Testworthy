/// <reference types="Cypress"/>

class SelectProject {
  selectProjectTestworthy(projectName) {
    cy.wait(4000);
    cy.get('.carousel-card').should('be.visible');
    cy.scrollTo('bottom');
    cy.contains('a', projectName).click();
    cy.get('.pn-link').should('be.visible');
  }
}

export default SelectProject;
