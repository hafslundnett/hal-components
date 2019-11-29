describe('Resizer Test', function () {
    it('Visits the resizer doc page', function () {
        cy.visit('http://localhost:4200/resizer-doc')
    })

    it('Resizes vertically on click and drag', function () {

        cy.get('div .resize-box-vertical').should('have.css','height','200px')
        cy.get('.resizer-vertical')
            .trigger('mousedown')
            .trigger('mousemove', { clientY: 500})
            .trigger('mouseup')
        cy.get('div .resize-box-vertical').should('have.css', 'height', '400px')  
    })

    it('Resizes horizontally on click and drag', function () {

        cy.get('div .resize-box-horizontal').should('have.css', 'width', '339.5px')
        cy.get('.resizer-horizontal')
            .trigger('mousedown')
            .trigger('mousemove', 'right')
            .trigger('mouseup')
        cy.get('div .resize-box-horizontal').should('have.css', 'width', '350px')  

        cy.get('.resizer-horizontal')
            .trigger('mousedown')
            .trigger('mousemove', 'left')
            .trigger('mouseup')
        cy.get('div .resize-box-horizontal').should('have.css', 'width', '340px')  
        
    })
})
