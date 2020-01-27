describe('Paginator Test', () => {
    it('Visits the Connected Popup doc page', () => {
        cy.visit('http://localhost:4200/paginator-doc');
    });

    it('should set chosen page to the selected page', () => {
        cy.get('.page-navigation').contains('3').click();
        cy.get('.page-navigation').contains('4').should('be.visible');
        cy.get('.page-navigation').contains('4').click();
        cy.get('.page-navigation').contains('5').should('be.visible');
        cy.get('.page-navigation').contains('2').should('not.be.visible');
    });

    it('changing page should change entries in example', () => {
        cy.get('.example-entries').contains('7').should('be.visible');
        cy.get('.example-entries').contains('8').should('be.visible');
        cy.get('.page-navigation').contains('3').click();
        cy.get('.example-entries').contains('7').should('not.be.visible');
        cy.get('.example-entries').contains('8').should('not.be.visible');
        cy.get('.example-entries').contains('5').should('be.visible');
        cy.get('.example-entries').contains('6').should('be.visible');
    });

    it('changing page-size should change entries in example', () => {
        cy.get('mat-select').click();
        cy.get('mat-option').contains('5').click();
        cy.get('.example-entries').contains('1').should('be.visible');
        cy.get('.example-entries').contains('3').should('be.visible');
        cy.get('.example-entries').contains('5').should('be.visible');
        cy.get('.example-entries').contains('6').should('not.be.visible');
        cy.get('.example-entries').contains('7').should('not.be.visible');
    });

    it('changing page-size should change number of pages', () => {
        cy.get('.page-navigation').contains('1').should('be.visible');
        cy.get('.page-navigation').contains('3').should('be.visible');
        cy.get('.page-navigation').contains('5').should('be.visible');
        cy.get('mat-select').click();
        cy.get('mat-option').contains('10').click();
        cy.get('.page-navigation').contains('1').should('be.visible');
        cy.get('.page-navigation').contains('3').should('be.visible');
        cy.get('.page-navigation').contains('4').should('not.be.visible');
        cy.get('.page-navigation').contains('5').should('not.be.visible');
    });

    it('changing page should remove and add arrows', () => {
        cy.get('[name="next-button"]').should('be.visible');
        cy.get('[name="previous-button"]').should('not.be.visible');
        cy.get('.page-navigation').contains('2').click();
        cy.get('[name="next-button"]').should('be.visible');
        cy.get('[name="previous-button"]').should('be.visible');
        cy.get('.page-navigation').contains('3').click();
        cy.get('[name="next-button"]').should('not.be.visible');
        cy.get('[name="previous-button"]').should('be.visible');
    });

    it('should show ... when more than 5 pages', () => {
        cy.get('mat-select').click();
        cy.get('mat-option').contains('2').click();
        cy.get('[name="next-button"]').click();
        cy.get('.ellipsis-right').should('be.visible');
        cy.get('.ellipsis-left').should('not.be.visible');
        cy.get('.page-navigation').contains('3').click();
        cy.get('.page-navigation').contains('4').click();
        cy.get('.ellipsis-right').should('be.visible');
        cy.get('.ellipsis-left').should('be.visible');
    });

    it('should set new page on arrow click', () => {
        cy.get('.page-navigation').contains('1').should('be.visible');
        cy.get('.page-navigation').contains('3').should('be.visible');
        cy.get('.page-navigation').contains('5').should('be.visible');
        cy.get('.page-navigation').contains('13').should('be.visible');
        cy.get('[name="next-button"]').click();
        cy.get('[name="next-button"]').click();
        cy.get('.page-navigation').contains('1').should('be.visible');
        cy.get('.page-navigation').contains('4').should('not.be.visible');
        cy.get('.page-navigation').contains('5').should('be.visible');
        cy.get('.page-navigation').contains('7').should('be.visible');
        cy.get('.page-navigation').contains('13').should('be.visible');
    });
});
