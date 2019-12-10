describe('Feedback Service Test', () => {
    it('Visits the App-Shell doc page', () => {
        cy.visit('http://localhost:4200/feedback-doc');
    });

    it('should show a sucess message', () => {
        cy.contains('Success message!').click();
        cy.get('.is-success').should('be.visible');
        cy.wait(300);
        cy.get('.is-success').should('not.exist');
    });

    it('should show a info message', () => {
        cy.contains('Info message!').click();
        cy.get('.is-primary').should('be.visible');
        cy.wait(300);
        cy.get('.is-primary').should('not.exist');
    });

    it('should show a error message', () => {
        cy.contains('Error message!').click();
        cy.get('.is-error').should('be.visible');
        cy.wait(300);
        cy.get('.is-error').should('not.exist');
    });

    it('should show a warning message', () => {
        cy.contains('Warning message!').click();
        cy.get('.is-warn').should('be.visible');
        cy.wait(300);
        cy.get('.is-warn').should('not.exist');
    });
});
