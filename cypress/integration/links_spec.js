describe('Menu buttons tests', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('host'))
    });

    it('should go down after scroll down arrow is clicked', () => {
        cy.get('.menu-scroll-down').scrollIntoView().should('be.visible');
        cy.window().then(($window) => {
            expect($window.scrollY).to.be.closeTo(500, 200);
        });
        cy.get('.menu-scroll-down').should('not.be.visible')
    });


    it('should not show scroll up button without scrolling down', () => {
        cy.get('.progress-wrap').should('not.be.visible');
        cy.scrollTo(0, 200)
    });

    it('should show scroll up button after scrolling down', () => {
        cy.get('.progress-wrap').should('not.be.visible');
        cy.scrollTo(0, 200);
        cy.get('.progress-wrap').should('be.visible');
    });

    it('should show scroll to top after clicking scroll up button', () => {
        // top of the page - button not visible
        cy.get('.progress-wrap').should('not.be.visible');
        // scroll to see button
        cy.scrollTo(0, 500);
        // button appears
        cy.get('.progress-wrap').should('be.visible');
        cy.get('.progress-wrap').click();
        // scrolling - need to wait
        cy.wait(1000);
        cy.window().then(($window) => {
            expect($window.scrollY).to.be.closeTo(0, 0);
        });
        cy.get('.progress-wrap').should('not.be.visible');
    });

    it('Main header should refer to localhost', () => {
        cy.get('#title-link')
            .should('have.prop', 'href')
            .and('contains', 'localhost')
    });

    it('About me menu button should navigate to localhost', () => {
        cy.get('#link-about')
            .should('have.prop', 'href')
            .and('contains', 'localhost')
    });

    it('Blog menu button should navigate to blog page', () => {
        cy.get('#link-blog')
            .should('have.prop', 'href')
            .and('equal', 'https://dawidkotarba.github.io/blog')
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
        cy.visit(Cypress.env('host'))
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

    it('Cookie popup shall be visible', () => {
        cy.get('body > div.cookieconsent').should('be.visible');
    });
});