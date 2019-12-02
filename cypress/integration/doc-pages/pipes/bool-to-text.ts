describe('Bool To Text Pipe Test', () => {
    it('Visits the bool to text pipe doc page', () => {
        cy.visit('http://localhost:4200/bool-to-text-doc');
    });

    it('should have a value of false that changes to true on clicking on button, and vice versa', () => {
        cy.get('p').contains('Boolean value false is tranformed to Nei.');
        cy.contains('Change to').click();
        cy.get('p').contains('Boolean value true is tranformed to Ja.');
        cy.contains('Change to').click();
        cy.get('p').contains('Boolean value false is tranformed to Nei.');
    });
});
