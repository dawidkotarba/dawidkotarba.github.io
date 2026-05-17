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

    it('Header and Navigation should not have rounded corners on mobile', () => {
        cy.get('.custom-header').should('have.css', 'border-bottom-left-radius', '0px');
        cy.get('.custom-header').should('have.css', 'border-bottom-right-radius', '0px');
        cy.get('.navigation-top').should('have.css', 'border-bottom-left-radius', '0px');
        cy.get('.navigation-top').should('have.css', 'border-bottom-right-radius', '0px');
    });

    it('Experience cards should not be clickable on mobile', () => {
        cy.get('#employment-ubs').scrollIntoView();
        cy.get('#employment-ubs').should('not.have.class', 'employment-card-clicked');
        cy.get('#employment-ubs').click({ force: true });
        cy.get('#employment-ubs').should('not.have.class', 'employment-card-clicked');
    });

    it('Navigation should be sticky on mobile', () => {
        cy.scrollTo(0, 500);
        cy.get('.navigation-top').should('have.class', 'site-navigation-fixed');
        cy.get('.navigation-top').should('be.visible');
        // Check if it's at the top of the viewport
        cy.get('.navigation-top').then(($nav) => {
            const rect = $nav[0].getBoundingClientRect();
            expect(rect.top).to.be.at.most(1); // Allow for small rounding errors
        });
    });
});

