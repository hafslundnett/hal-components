describe('Table-Viewer Test', () => {
    it('Visits the Table-viewer doc page', () => {
        cy.visit('http://localhost:4200/table-viewer-default-doc');
    });

    it('should only display name column in the table when sorting on names', () => {
        cy.get('button').contains('Show only name').click();
        cy.get('table > thead > tr > th')
            .contains('Name of person')
            .should('exist');
        cy.get('button').contains('Age').should('not.exist');
        cy.get('button').contains('Role').should('not.exist');
    });

    it('should display three colums on clicking "Show All"', () => {
        cy.get('button').contains('Show all').click();
        cy.get('table > thead > tr > th').contains('Name of person').should('exist');
        cy.get('button').contains('Age').should('exist');
        cy.get('button').contains('Role').should('exist');
    });
    // Have not test for random yet
});
