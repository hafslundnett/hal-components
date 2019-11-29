describe('App-Shell Test', function () {
    it('Visits the App-Shell doc page', function () {
        cy.visit('http://localhost:4200/app-shell-doc')

        cy.get('.logo').click()

        cy.url().should('eq', 'http://localhost:4200/welcome')

        cy.get('.sidenav').contains('HDD').should('have.attr','href','/hdd').click()

        cy.url().should('eq', 'http://localhost:4200/hdd')

        cy.get('.sidenav').contains('home').should('have.attr', 'href', '/welcome').click()

        cy.url().should('eq', 'http://localhost:4200/welcome')

        cy.get('hal-app-list').click()

        cy.get('.app-list').should('be.visible')

        cy.get('body').click(100, 100)

        cy.get('.app-list').should('be.hidden')

        cy.get('.overlay').click()

        cy.get('.content-wrapper').should('be.visible')

        cy.get('body').click(100, 100)

        cy.get('.content-wrapper').should('be.hidden')

    })
})
