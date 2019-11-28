describe('My First Test', function () {
    it('Visits the Pop-Global doc page', function () {
        cy.visit('http://localhost:4200/popup-global-doc')

        cy.contains('Open popup').click()

        cy.get('hal-popup-global-example').should('be.visible')

        cy.get('.close-button').click()

        cy.get('hal-popup-global-example').should('not.be.visible')

    })
})
