describe('Keyboard shortcut Test', () => {
    it('Visits the Keyboard Shortcuts doc page', () => {
        cy.visit('http://localhost:4200/keyboard-shortcuts-doc');

        // Doesnt seem that cypress supports keycombinations with space.
        // cy.get('body').type('{ctrl}{spacebar}')

    });
});
