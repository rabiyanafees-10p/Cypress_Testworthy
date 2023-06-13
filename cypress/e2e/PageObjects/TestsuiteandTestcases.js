/// <reference types="Cypress"/>

class selectProject
{
  selectProjectTestworthy()
  {
  cy.wait(4000);
  cy.get('.carousel-card').should('be.visible');
  cy.scrollTo('bottom');
  cy.get(':nth-child(2) > .carousel-card > .carousel-card__text > .font-weight-bold > a').click();
  cy.get('.pn-link ').should('be.visible')

}}

    export default selectProject
