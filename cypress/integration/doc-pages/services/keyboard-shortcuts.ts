describe('Keyboard shortcut Test', () => {
    it('Visits the Keyboard Shortcuts doc page', () => {
        cy.visit('http://localhost:4200/keyboard-shortcuts-doc');
    });

    it('should pop up a keyboard shortcut when pressen ctrl and space bar', () => {
        cy.get('body').type('{ctrl}{ }');
        cy.get('hal-keyboard-shortcuts-popup').contains('Aktive tastatursnarveier').should('exist');
        cy.get('body').type('{ctrl}{ }');
    });

    describe('close keyboard shortcuts popup', () => {
        beforeEach(() => {
            cy.get('body').type('{ctrl}{ }');
        });
        it('close on double clicking shortcut ', () => {
            cy.get('body').type('{ctrl}{ }');
            cy.get('hal-keyboard-shortcuts-popup').should('not.be.visible');
        });
        it('close on clicking close button', () => {
            cy.get('.hdd-card_header_action').click();
            cy.get('hal-keyboard-shortcuts-popup').should('not.be.visible');

        });
        it('close on clicking close button', () => {
            cy.get('body').click(100, 100);
            cy.get('hal-keyboard-shortcuts-popup').should('not.be.visible');
        });
    });
});
