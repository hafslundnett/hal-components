describe('Front-Page Navigation Test', function () {
    it('Visits the Front page', function () {
        cy.visit('http://localhost:4200/welcome')
    })

    it('Navigate betwen doc pages through the doc card list', function () {
       // navigate to svg doc page
        cy.get('.hdd-card').contains('Svg Component').parent('.hdd-card_header_text').parent('.hdd-card_header')
        .siblings('.hdd-card_actions').contains('View more').click()

        cy.url().should('eq', 'http://localhost:4200/svg-doc')


        // navigate to Popup connected doc page
        cy.get('.hdd-card').contains('Popup Connected Component').parent('.hdd-card_header_text').parent('.hdd-card_header')
            .siblings('.hdd-card_actions').contains('View more').click()

        cy.url().should('eq', 'http://localhost:4200/popup-connected-doc')

        // navigate to divider doc page
        cy.get('.hdd-card').contains('Divider Component').parent('.hdd-card_header_text').parent('.hdd-card_header')
            .siblings('.hdd-card_actions').contains('View more').click()

        cy.url().should('eq', 'http://localhost:4200/divider-doc')

        // navigate to closeable-row doc page
        cy.get('.hdd-card').contains('Closeable Row').parent('.hdd-card_header_text').parent('.hdd-card_header')
            .siblings('.hdd-card_actions').contains('View more').click()

        cy.url().should('eq', 'http://localhost:4200/closeable-row-doc')

        // navigate to resizer doc page
        cy.get('.hdd-card').contains('Resizer').parent('.hdd-card_header_text').parent('.hdd-card_header')
            .siblings('.hdd-card_actions').contains('View more').click()

        cy.url().should('eq', 'http://localhost:4200/resizer-doc')

        // navigate to App-Shell doc page
        cy.get('.hdd-card').contains('App shell').parent('.hdd-card_header_text').parent('.hdd-card_header')
            .siblings('.hdd-card_actions').contains('View more').click()

        cy.url().should('eq', 'http://localhost:4200/app-shell-doc')

        // navigate to svg doc page
        cy.get('.hdd-card').contains('Status Mark').parent('.hdd-card_header_text').parent('.hdd-card_header')
            .siblings('.hdd-card_actions').contains('View more').click()

        cy.url().should('eq', 'http://localhost:4200/status-mark-doc')

        // navigate to svg doc page
        cy.get('.hdd-card').contains('Table Viewer').parent('.hdd-card_header_text').parent('.hdd-card_header')
            .siblings('.hdd-card_actions').contains('View more').click()

        cy.url().should('eq', 'http://localhost:4200/table-viewer-default-doc')

        // navigate to svg doc page
        cy.get('.hdd-card').contains('Loading Spinner').parent('.hdd-card_header_text').parent('.hdd-card_header')
            .siblings('.hdd-card_actions').contains('View more').click()

        cy.url().should('eq', 'http://localhost:4200/loading-spinner-doc')

        // navigate to svg doc page
        cy.get('.hdd-card').contains('Popup Global').parent('.hdd-card_header_text').parent('.hdd-card_header')
            .siblings('.hdd-card_actions').contains('View more').click()

        cy.url().should('eq', 'http://localhost:4200/popup-global-doc')

        // navigate to svg doc page
        cy.get('.hdd-card').contains('Broadcast Handler').parent('.hdd-card_header_text').parent('.hdd-card_header')
            .siblings('.hdd-card_actions').contains('View more').click()

        cy.url().should('eq', 'http://localhost:4200/broadcast-handler-doc')

        // navigate to svg doc page
        cy.get('.hdd-card').contains('Feedback Service').parent('.hdd-card_header_text').parent('.hdd-card_header')
            .siblings('.hdd-card_actions').contains('View more').click()

        cy.url().should('eq', 'http://localhost:4200/feedback-doc')

        // navigate to svg doc page
        cy.get('.hdd-card').contains('Keyboard Shortcuts').parent('.hdd-card_header_text').parent('.hdd-card_header')
            .siblings('.hdd-card_actions').contains('View more').click()

        cy.url().should('eq', 'http://localhost:4200/keyboard-shortcuts-doc')

        // navigate to svg doc page
        cy.get('.hdd-card').contains('Bool To Text Pipe').parent('.hdd-card_header_text').parent('.hdd-card_header')
            .siblings('.hdd-card_actions').contains('View more').click()

        cy.url().should('eq', 'http://localhost:4200/bool-to-text-doc')

        // navigate to svg doc page
        cy.get('.hdd-card').contains('Date Formats').parent('.hdd-card_header_text').parent('.hdd-card_header')
            .siblings('.hdd-card_actions').contains('View more').click()

        cy.url().should('eq', 'http://localhost:4200/date-format-doc')

        // navigate to svg doc page
        cy.get('.hdd-card').contains('Animations').parent('.hdd-card_header_text').parent('.hdd-card_header')
            .siblings('.hdd-card_actions').contains('View more').click()

        cy.url().should('eq', 'http://localhost:4200/animations-doc')

    })
})