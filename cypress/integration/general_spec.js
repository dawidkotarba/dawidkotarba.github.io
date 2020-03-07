describe('General tests', function () {

    beforeEach(function () {
        cy.visit('index.html')
    });

    it('The title should include dawidkotarba.github.io', function () {
        cy.title().should('include', 'dawidkotarba.github.io')
    });

    it('Homepage menu button should navigate to dawidkotarba.github.io', function () {
        cy.get('#link-homepage')
            .should('have.prop', 'href')
            .and('equal', 'https://dawidkotarba.github.io/')
    });
});