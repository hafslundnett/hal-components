describe('App-Shell Test', () => {
    it('Visits the App-Shell doc page', () => {
        cy.visit('http://localhost:4200/app-shell-doc');
    });

    it('should navigate to welcome page when clicking hafslund log', () => {
        cy.get('.logo').click();
        cy.url().should('eq', 'http://localhost:4200/welcome');
    });

    it('should navigate to hdd section when clicking on hdd logo in sidenav', () => {
        cy.get('hal-shell').contains('HDD').should('have.attr', 'href', '/hdd').click();
        cy.url().should('eq', 'http://localhost:4200/hdd');
    });

    it('should navigate to hal section when clicking on hal logo in sidenav', () => {
        cy.get('hal-shell').contains('home').should('have.attr', 'href', '/welcome').click();
        cy.url().should('eq', 'http://localhost:4200/welcome');
    });

    it('should present a dropdown with navigation to other hafslund apps', () => {
        cy.get('hal-app-list').click();
        cy.get('.app-list').should('be.visible');
        cy.get('body').click(100, 100);
        cy.get('.app-list').should('be.hidden');
    });

    it('should present a dropdown with user information', () => {
        cy.get('.overlay').click();
        cy.get('.content-wrapper').should('be.visible');
        cy.get('body').click(100, 100);
        cy.get('.content-wrapper').should('be.hidden');
    });
});
