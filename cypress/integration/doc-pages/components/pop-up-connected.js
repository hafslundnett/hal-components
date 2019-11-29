describe('Popup Connected Test', function () {
    it('Visits the Connected Popup doc page', function () {
        cy.visit('http://localhost:4200/popup-connected-doc')

        cy.contains('Open connected popup').click()

        cy.get('.connected-popup-body').should('be.visible')

        cy.get('.close-button').click()

        cy.get('.connected-popup-body').should('not.be.visible')
       
        cy.contains('Open popup on top').click()

        cy.get('.connected-popup-body').should('be.visible')

        cy.get('body').click(100, 100)

        cy.get('.connected-popup-body').should('not.be.visible')

    })
})
