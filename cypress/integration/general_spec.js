describe('General tests', function () {
    it('The page should not contain any errors.', function () {
        cy.visit('https://dawidkotarba.github.io')
    });

    it('The title should include dawidkotarba.github.io', function () {
        cy.visit('https://dawidkotarba.github.io')
        cy.title().should('include', 'dawidkotarba.github.io')
    })
});