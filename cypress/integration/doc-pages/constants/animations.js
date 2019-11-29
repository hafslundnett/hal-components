describe('Animations Test', function () {
    it('Visits the Animations doc page', function () {
        cy.visit('http://localhost:4200/animations-doc')
    })

    it('should animate a box on @scaleUp animation', function() {
        cy.get('button').contains('ScaleUp animation').click()
        cy.get('.animation-boxes').contains('animated with @scaleUp').should('be.visible')
    })
 
    it('should animate a box on @scaleDown animation', function() {
        cy.get('button').contains('ScaleDown animation').click()
        cy.get('.animation-boxes').contains('animated with @scaleDown').should('be.visible')
    })

    it('should animate a list items with @ListAnimation', function() {
        cy.get('ul li').should('have.length',3)
        cy.get('button').contains('Add Item').click()
        cy.get('ul li').should('have.length', 4)
        cy.get('button').contains('Remove Item').click()
        cy.get('ul li').should('have.length', 3)
    })

    it('should animate a cardd on @curtainDown animation', function() {
        cy.get('button').contains('Curtains down').click()
        cy.get('.hdd-card').contains('This card is animated with @curtainDown').should('be.visible')
    })

    it('should animate a card on @heightDown animation', function() {
        cy.get('button').contains('Height Down').click()
        cy.get('.hdd-card').contains('This card is animated with @heightDown.').should('be.visible')
    })
})