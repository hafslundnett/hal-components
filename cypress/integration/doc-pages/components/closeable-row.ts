describe('Closeable-Row Test', () => {
    it('Visits the Closeable-Row doc page', () => {
        cy.visit('http://localhost:4200/closeable-row-doc');
    });

    it('should have three hal closeable rows, two expanded and one closed', () => {
        cy.get('hal-closeable-row').should('be.visible');

        cy.get('hal-closeable-row').contains('Closeable-Row Header | No inputs').parent('.mat-content')
            .parent('.mat-expansion-panel-header').siblings('.mat-expansion-panel-content').should('be.visible');

        cy.get('hal-closeable-row').contains('Closeable-Row Header | No padding on the row body').parent('.mat-content')
            .parent('.mat-expansion-panel-header').siblings('.mat-expansion-panel-content').should('be.visible');

        cy.get('hal-closeable-row').contains('Closeable-Row Header | Start as expanded set to false').parent('.mat-content')
            .parent('.mat-expansion-panel-header').siblings('.mat-expansion-panel-content').should('be.hidden');
    });

    it('should expand or close body section of the rows on click()', () => {
        cy.get('hal-closeable-row').click({ multiple: true });

        cy.get('hal-closeable-row').contains('Closeable-Row Header | No inputs').parent('.mat-content')
            .parent('.mat-expansion-panel-header').siblings('.mat-expansion-panel-content').should('be.hidden');

        cy.get('hal-closeable-row').contains('Closeable-Row Header | No padding on the row body').parent('.mat-content')
            .parent('.mat-expansion-panel-header').siblings('.mat-expansion-panel-content').should('be.hidden');

        cy.get('hal-closeable-row').contains('Closeable-Row Header | Start as expanded set to false').parent('.mat-content')
            .parent('.mat-expansion-panel-header').siblings('.mat-expansion-panel-content').should('be.visible');
    });
});
