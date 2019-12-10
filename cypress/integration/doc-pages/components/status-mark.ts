describe('Status-Mark Test', () => {
    it('Visits the Status Mark doc page', () => {
        cy.visit('http://localhost:4200/status-mark-doc');
    });

    it('should have a status mark on init, and change to false when clicking the button', () => {
        cy.get('hal-status-mark').should('be.visible');
        cy.get('.check-icon').should('be.visible');
        cy.contains('Change to false').click();
        cy.get('.x-icon').should('be.visible');
        cy.contains('Change to true').click();
        cy.get('.check-icon').should('be.visible');
    });
});
