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
            .and('contains', 'https://dawidkotarba.github.io')
    });

    it('LinkedIn menu button should navigate to LinkedIn profile', function () {
        cy.get('#link-linkedin')
            .should('have.prop', 'href')
            .and('equal', 'https://www.linkedin.com/in/dawid-kotarba-425306a5')
    });

    it('GitHub menu button should navigate to GitHub page', function () {
        cy.get('#link-github')
            .should('have.prop', 'href')
            .and('equal', 'https://github.com/dawidkotarba')
    });

});