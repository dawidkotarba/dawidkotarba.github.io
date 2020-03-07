describe('Content tests', function () {

    beforeEach(function () {
        cy.visit('index.html')
    });

    it('The title should include dawidkotarba.github.io', function () {
        cy.title().should('include', 'dawidkotarba.github.io')
    });

});