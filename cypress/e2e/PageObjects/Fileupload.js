/// <reference types="Cypress"/>

class fileupload
{
        CSVFileupload()
    {
      cy.wait(4000);
      cy.get(':nth-child(3) > .pn-link').should('be.visible').click();
      
      cy.scrollTo(0, 15);
      cy.get(':nth-child(11) > .complete-li > .row > .col-lg-6 > .custom-control > label > .text > a').click({force: true});
      cy.wait(4000);
      cy.get('.icon-import').should('be.visible').click();
      
      const filePath = 'uploadtestcase.csv';
      cy.get('#csvFileName').attachFile(filePath);
      cy.get('#btn-next').click();
      cy.wait(4000);
      cy.contains('#exampleModalLabel').should('be.visible');
      cy.get('#btnImport').click({force: true});


    }




}


    export default fileupload
  
