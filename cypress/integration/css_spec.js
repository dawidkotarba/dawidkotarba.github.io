describe('CSS tests', function () {

    beforeEach(function () {
        cy.visit('index.html')
    });

    it('Employment div #employment-epam shall be zoomable', function () {
        cy.get('#employment-epam')
            .should('have.css', 'scale');

        cy.get('#employment-epam')
            .should('have.css', 'transition');
    });

    it('Employment div #employment-bbh shall be zoomable', function () {
        cy.get('#employment-bbh')
            .should('have.css', 'scale');

        cy.get('#employment-bbh')
            .should('have.css', 'transition');
    });

    it('Employment div #employment-cap shall be zoomable', function () {
        cy.get('#employment-cap')
            .should('have.css', 'scale');

        cy.get('#employment-cap')
            .should('have.css', 'transition');
    });

    it('Employment div #employment-cap2 shall be zoomable', function () {
        cy.get('#employment-cap2')
            .should('have.css', 'scale');

        cy.get('#employment-cap2')
            .should('have.css', 'transition');
    });

    it('Employment div #employment-cap2 shall be zoomable', function () {
        cy.get('#employment-tp')
            .should('have.css', 'scale');

        cy.get('#employment-tp')
            .should('have.css', 'transition');
    });
});