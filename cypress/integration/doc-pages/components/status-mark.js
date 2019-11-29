describe('Status-Mark Test', function () {
    it('Visits the Status Mark doc page', function () {
        cy.visit('http://localhost:4200/status-mark-doc')

        cy.get('hal-status-mark').should('be.visible')
        
        cy.get('.check-icon').should('be.visible')

        cy.contains('Change to false').click()

        cy.get('.x-icon').should('be.visible')

        cy.contains('Change to true').click()

        cy.get('.check-icon').should('be.visible')

    })
})
