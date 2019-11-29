describe('App-Shell Test', function () {
    it('Visits the App-Shell doc page', function () {
        cy.visit('http://localhost:4200/app-shell-doc')

        // bruk for app-shell. 
        cy.url().should('eq', 'http://localhost:4200/app-shell-doc')

 

    })
})
