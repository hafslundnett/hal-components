describe('Closeable-Row Test', function () {
    it('Visits the Closeable-Row doc page', function () {
        cy.visit('http://localhost:4200/closeable-row-doc')

        cy.url().should('eq', 'http://localhost:4200/closeable-row-doc')

        cy.get('hal-closeable-row').should('be.visible')

        cy.get('hal-closeable-row').contains('Closeable-Row Header | No inputs').parent('.mat-content')
            .parent('.mat-expansion-panel-header').siblings('.mat-expansion-panel-content').should('be.visible')

        cy.get('hal-closeable-row').contains('Closeable-Row Header | No padding on the row body').parent('.mat-content')
            .parent('.mat-expansion-panel-header').siblings('.mat-expansion-panel-content').should('be.visible')

        cy.get('hal-closeable-row').contains('Closeable-Row Header | Start as expanded set to false').parent('.mat-content')
            .parent('.mat-expansion-panel-header').siblings('.mat-expansion-panel-content').should('be.hidden')

        cy.get('hal-closeable-row').click({ multiple: true })

        cy.get('hal-closeable-row').contains('Closeable-Row Header | No inputs').parent('.mat-content')
            .parent('.mat-expansion-panel-header').siblings('.mat-expansion-panel-content').should('be.hidden')

        cy.get('hal-closeable-row').contains('Closeable-Row Header | No padding on the row body').parent('.mat-content')
            .parent('.mat-expansion-panel-header').siblings('.mat-expansion-panel-content').should('be.hidden')

        cy.get('hal-closeable-row').contains('Closeable-Row Header | Start as expanded set to false').parent('.mat-content')
            .parent('.mat-expansion-panel-header').siblings('.mat-expansion-panel-content').should('be.visible')

    })
})
