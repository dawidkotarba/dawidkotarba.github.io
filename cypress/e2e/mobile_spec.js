describe('Mobile tests', () => {

    const menuSelector = '.menu-toggle';
    const linkedInSelector = '#link-linkedin';
    const gitHubSelector = '#link-github';

    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit(Cypress.env('host'))
    });

    it('Menu should toggle on and off', () => {
        cy.get(linkedInSelector).should('not.be.visible');
        cy.get(gitHubSelector).should('not.be.visible');

        cy.get(menuSelector).click();

        cy.get(linkedInSelector).should('be.visible');
        cy.get(gitHubSelector).should('be.visible');

        cy.get(menuSelector).click();

        cy.get(linkedInSelector).should('not.be.visible');
        cy.get(gitHubSelector).should('not.be.visible');
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
});

