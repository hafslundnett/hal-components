describe('Bool To Text Pipe Test', function () {
    it('Visits the bool to text pipe doc page', function () {
        cy.visit('http://localhost:4200/bool-to-text-doc')

        cy.get('p').contains('Boolean value false is tranformed to Nei.')

        cy.get('.hdd-button').click()

        cy.get('p').contains('Boolean value true is tranformed to Ja.')

        cy.get('.hdd-button').click()

        cy.get('p').contains('Boolean value false is tranformed to Nei.')

    })
})
