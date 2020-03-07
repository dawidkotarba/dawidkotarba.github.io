describe('Menu buttons tests', function () {

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

    it('GitHub repository link should navigate to GitHub pages repo', function () {
        cy.get('#link-github-credits')
            .should('have.prop', 'href')
            .and('equal', 'https://github.com/dawidkotarba/dawidkotarba.github.io')
    });

});

describe('Footer buttons/links tests', function () {

    beforeEach(function () {
        cy.visit('index.html')
    });

    it('Skype button should navigate to Skype profile', function () {
        cy.get('#menu-socials > :nth-child(1) > a')
            .should('have.prop', 'href')
            .and('equal', 'skype:dawidkotarba')
    });

    it('LinkedIn button should navigate to LinkedIn profile', function () {
        cy.get('#menu-socials > :nth-child(2) > a')
            .should('have.prop', 'href')
            .and('equal', 'https://www.linkedin.com/in/dawid-kotarba-425306a5')
    });

    it('Github button should navigate to GitHub profile', function () {
        cy.get('#menu-socials > :nth-child(3) > a')
            .should('have.prop', 'href')
            .and('equal', 'https://github.com/dawidkotarba')
    });

    it('Twitter button should navigate to Twitter profile', function () {
        cy.get('#menu-socials > :nth-child(4) > a')
            .should('have.prop', 'href')
            .and('equal', 'https://twitter.com/dawidkotarba')
    });

    it('GitHub repository link should navigate to GitHub pages repo', function () {
        cy.get('#link-github-credits')
            .should('have.prop', 'href')
            .and('equal', 'https://github.com/dawidkotarba/dawidkotarba.github.io')
    });
});