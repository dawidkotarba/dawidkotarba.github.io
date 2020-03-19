describe('Mobile tests', () => {

    const menuSelector = '.menu-toggle';
    const aboutMeSelector = '#link-about';
    const blogSelector = '#link-blog';
    const linkedInSelector = '#link-linkedin';
    const gitHubSelector = '#link-github';

    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit(Cypress.env('host'))
    });

    it('Menu should toggle on and off', () => {
        cy.get(aboutMeSelector).should('not.be.visible');
        cy.get(blogSelector).should('not.be.visible');
        cy.get(linkedInSelector).should('not.be.visible');
        cy.get(gitHubSelector).should('not.be.visible');

        cy.get(menuSelector).click();

        cy.get(aboutMeSelector).should('be.visible');
        cy.get(blogSelector).should('be.visible');
        cy.get(linkedInSelector).should('be.visible');
        cy.get(gitHubSelector).should('be.visible');

        cy.get(menuSelector).click();

        cy.get(aboutMeSelector).should('not.be.visible');
        cy.get(blogSelector).should('not.be.visible');
        cy.get(linkedInSelector).should('not.be.visible');
        cy.get(gitHubSelector).should('not.be.visible');
    });

    it('About me menu button should navigate to localhost', () => {
        cy.get(menuSelector).click();
        cy.get(aboutMeSelector).should('be.visible');
        cy.get(aboutMeSelector)
            .should('have.prop', 'href')
            .and('contains', 'localhost')
    });

    it('Blog menu button should navigate to localhost', () => {
        cy.get(menuSelector).click();
        cy.get(blogSelector).should('be.visible');
        cy.get(blogSelector)
            .should('have.prop', 'href')
            .and('contains', 'dawidkotarba.github.io/blog')
    });

    it('LinkedIn menu button should navigate to LinkedIn profile', () => {
        cy.get(menuSelector).click();
        cy.get(linkedInSelector).should('be.visible');
        cy.get(linkedInSelector)
            .should('have.prop', 'href')
            .and('equal', 'https://www.linkedin.com/in/dawid-kotarba-425306a5')
    });

    it('GitHub menu button should navigate to GitHub page', () => {
        cy.get(menuSelector).click();
        cy.get(gitHubSelector).should('be.visible');
        cy.get(gitHubSelector)
            .should('have.prop', 'href')
            .and('equal', 'https://github.com/dawidkotarba')
    });

    it('Cookie popup shall be visible', () => {
        cy.get('body > div.cookieconsent').should('be.visible');
    });
});

