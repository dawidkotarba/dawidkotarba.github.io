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
        cy.get('.progress-wrap', { timeout: 10000 }).should('be.visible');
    });

    it('should show scroll to top after clicking scroll up button', {
        retries: {
            runMode: 2,
            openMode: 0,
        }
    }, () => {
        // top of the page - button not visible
        cy.get('.progress-wrap').should('not.be.visible');
        // scroll to see button
        cy.scrollTo(0, 500);
        // button appears - give it more time on CI
        cy.get('.progress-wrap', { timeout: 10000 }).should('be.visible');
        cy.get('.progress-wrap').click();
        // scrolling - need to wait
        cy.wait(1500);
        cy.window().then(($window) => {
            expect($window.scrollY).to.be.closeTo(0, 5);
        });
        cy.get('.progress-wrap').should('not.be.visible');
    });

    it('Main header should refer to localhost', () => {
        cy.get('#title-link')
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

    it('should show UBS experience card', () => {
        cy.get('#employment-ubs').should('be.visible');
        cy.get('#employment-ubs').should('have.class', 'border-blue');
        cy.get('#employment-ubs .employer').should('contain', 'UBS');
    });

    it('should show Dawid Kotarba Software experience card', () => {
        cy.get('#employment-dks').should('be.visible');
        cy.get('#employment-dks').should('have.class', 'border-green');
        cy.get('#employment-dks .employer').should('contain', 'Dawid Kotarba Software');
    });

    it('should show Metrosoft experience card', () => {
        cy.get('#employment-metrosoft').should('be.visible');
        cy.get('#employment-metrosoft').should('have.class', 'border-yellow');
        cy.get('#employment-metrosoft .employer').should('contain', 'Metrosoft');
    });

    it('should show EPAM experience card with indigo border', () => {
        cy.get('#employment-epam').should('be.visible');
        cy.get('#employment-epam').should('have.class', 'border-indigo');
        cy.get('#employment-epam .employer').should('contain', 'EPAM Systems');
    });
});

describe('Footer buttons/links tests', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('host'))
    });

    it('LinkedIn button should navigate to LinkedIn profile', () => {
        cy.get('#menu-socials a[href*="linkedin.com"]')
            .should('have.prop', 'href')
            .and('equal', 'https://www.linkedin.com/in/dawid-kotarba-425306a5')
    });

    it('Github button should navigate to GitHub profile', () => {
        cy.get('#menu-socials a[href*="github.com"]')
            .should('have.prop', 'href')
            .and('equal', 'https://github.com/dawidkotarba')
    });

    it('GitHub repository link should navigate to GitHub pages repo', () => {
        cy.get('#link-github-credits')
            .should('have.prop', 'href')
            .and('equal', 'https://github.com/dawidkotarba/dawidkotarba.github.io')
    });
});