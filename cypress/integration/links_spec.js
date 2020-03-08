describe('Menu buttons tests', () => {

    beforeEach(() => {
        cy.visit('index.html')
    });

    // Ignore for now
    // it('Go down arrow shall scroll down', () => {
    //     cy.get('.menu-scroll-down').should('be.visible');
    //     cy.get('.menu-scroll-down').click();
    //     cy.window().then(($window) => {
    //         expect($window.scrollY).to.be.closeTo(270, 100);
    //     });
    //     cy.get('.menu-scroll-down').should('not.be.visible')
    // });

    it('Main header should refer to localhost', () => {
        cy.get('#title-link')
            .should('have.prop', 'href')
            .and('contains', 'localhost')
    });

    it('Homepage menu button should navigate to localhost', () => {
        cy.get('#link-homepage')
            .should('have.prop', 'href')
            .and('contains', 'localhost')
    });

    it('LinkedIn menu button should navigate to LinkedIn profile', () => {
        cy.get('#link-linkedin')
            .should('have.prop', 'href')
            .and('equal', 'https://www.linkedin.com/in/dawid-kotarba-425306a5')
    });

    it('GitHub menu button should navigate to GitHub page', () => {
        cy.get('#link-github')
            .should('have.prop', 'href')
            .and('equal', 'https://github.com/dawidkotarba')
    });

    it('GitHub repository link should navigate to GitHub pages repo', () => {
        cy.get('#link-github-credits')
            .should('have.prop', 'href')
            .and('equal', 'https://github.com/dawidkotarba/dawidkotarba.github.io')
    });
});

describe('Footer buttons/links tests', () => {

    beforeEach(() => {
        cy.visit('index.html')
    });

    it('Skype button should navigate to Skype profile', () => {
        cy.get('#menu-socials > :nth-child(1) > a')
            .should('have.prop', 'href')
            .and('equal', 'skype:dawidkotarba')
    });

    it('LinkedIn button should navigate to LinkedIn profile', () => {
        cy.get('#menu-socials > :nth-child(2) > a')
            .should('have.prop', 'href')
            .and('equal', 'https://www.linkedin.com/in/dawid-kotarba-425306a5')
    });

    it('Github button should navigate to GitHub profile', () => {
        cy.get('#menu-socials > :nth-child(3) > a')
            .should('have.prop', 'href')
            .and('equal', 'https://github.com/dawidkotarba')
    });

    it('Twitter button should navigate to Twitter profile', () => {
        cy.get('#menu-socials > :nth-child(4) > a')
            .should('have.prop', 'href')
            .and('equal', 'https://twitter.com/dawidkotarba')
    });

    it('GitHub repository link should navigate to GitHub pages repo', () => {
        cy.get('#link-github-credits')
            .should('have.prop', 'href')
            .and('equal', 'https://github.com/dawidkotarba/dawidkotarba.github.io')
    });
});