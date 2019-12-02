describe('Popup Connected Test', () => {
    it('Visits the Connected Popup doc page', () =>  {
        cy.visit('http://localhost:4200/popup-connected-doc');
    });

    it('should open a popup under button on click(), and dissapear on clicking elsewhere or on close', ()  => {
        cy.contains('Open connected popup').click();
        cy.contains('Popup works!').should('be.visible');
        cy.get('.close-button').click();
        cy.contains('Popup works!').should('not.be.visible');
        cy.contains('Open connected popup').click();
        cy.get('body').click(100, 100);
        cy.contains('Popup works!').should('not.be.visible');
    });

    it('should open a popup on top of the button on click, and dissappear on clicking elsewhere in window', ()  => {
        cy.contains('Open popup on top').click();
        cy.contains('Popup works!').should('be.visible');
        cy.get('body').click(100, 100);
        cy.contains('Popup works!').should('not.be.visible');
    });
});
