describe('Resizer Test', () => {
    it('Visits the resizer doc page', () => {
        cy.visit('http://localhost:4200/resizer-doc');
    });

    it('Resizes vertically on click and drag', () => {

        cy.get('.resizer-vertical')
            .trigger('mousedown')
            .trigger('mousemove', { clientY: 500})
            .trigger('mouseup');
        cy.get('div .resize-box-vertical').then($element => {
            expect($element.height()).greaterThan(200);
        });
    });

    it('Resizes horizontally on click and drag', () => {

        cy.get('.resizer-horizontal')
            .trigger('mousedown')
            .trigger('mousemove', 'right')
            .trigger('mouseup');
        cy.get('div .resize-box-horizontal').then($element => {
            expect($element.width()).greaterThan(340);
        });

        cy.get('.resizer-horizontal')
            .trigger('mousedown')
            .trigger('mousemove', 'left')
            .trigger('mouseup');
        cy.get('div .resize-box-horizontal').then($element => {
            expect($element.width()).lessThan(350);
        });
    });
});
