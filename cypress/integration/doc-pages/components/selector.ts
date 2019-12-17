describe('Selector Test', () => {
    it('Visits the Selector Doc page', () => {
        cy.visit('http://localhost:4200/selector-doc');
    });

    it('should display alternatives when clicking inputfield', () => {
        cy.get('hal-selector').contains('Alternative 1').click();
        cy.get('.selector-panel').contains('Alternative 2').should('be.visible');
        cy.get('.selector-panel').contains('Alternative 5').should('be.visible');
    });

    it('should not be able to choose disabled input', () => {
        cy.get('.selector-panel').contains('Alternative 3').should('be.visible');
        cy.get('.selector-panel').contains('Alternative 3').click();
        cy.get('.selector-panel').contains('Alternative 5').should('be.visible');
    });

    it('should not display alternatives not selected when closed', () => {
        cy.get('.selector-panel').contains('Alternative 2').click();
        cy.get('hal-selector').contains('Alternative 2').should('be.visible');
        cy.get('hal-selector').contains('Alternative 1').should('not.be.visible');
        cy.get('hal-selector').contains('Alternative 5').should('not.be.visible');
    });

    it('should not be able to click disabled inputfield', () => {
        cy.get('hal-selector').contains('Label (no placeholder)').click();
        cy.get('hal-selector').contains('Alternative 1').should('not.be.visible');
        cy.get('hal-selector').contains('Alternative 5').should('not.be.visible');
    });
});
