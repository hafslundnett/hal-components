describe('Global Popup Test', () => {
    it('Visits the Pop-Global doc page', () => {
        cy.visit('http://localhost:4200/popup-global-doc');
    });

    it('should open a global popup component on clicking button', () => {
        cy.contains('Open popup').click();
        cy.get('hal-popup-global-example').should('be.visible');
        cy.get('.close-button').click();
        cy.get('hal-popup-global-example').should('not.be.visible');
    });
});
