describe('Mobile tests', () => {

    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('index.html')
    });

    it('Menu should toggle on and off', () => {
        cy.get('#link-homepage').should('not.be.visible');
        cy.get('#link-linkedin').should('not.be.visible');
        cy.get('#link-github').should('not.be.visible');

        cy.get('.menu-toggle').click();

        cy.get('#link-homepage').should('be.visible');
        cy.get('#link-linkedin').should('be.visible');
        cy.get('#link-github').should('be.visible');

        cy.get('.menu-toggle').click();

        cy.get('#link-homepage').should('not.be.visible');
        cy.get('#link-linkedin').should('not.be.visible');
        cy.get('#link-github').should('not.be.visible');
    });

    it('Homepage menu button should navigate to localhost', () => {
        cy.get('.menu-toggle').click();
        cy.get('#link-homepage').should('be.visible');
        cy.get('#link-homepage')
            .should('have.prop', 'href')
            .and('contains', 'localhost')
    });

    it('LinkedIn menu button should navigate to LinkedIn profile', () => {
        cy.get('.menu-toggle').click();
        cy.get('#link-linkedin').should('be.visible');
        cy.get('#link-linkedin')
            .should('have.prop', 'href')
            .and('equal', 'https://www.linkedin.com/in/dawid-kotarba-425306a5')
    });

    it('GitHub menu button should navigate to GitHub page', () => {
        cy.get('.menu-toggle').click();
        cy.get('#link-github').should('be.visible');
        cy.get('#link-github')
            .should('have.prop', 'href')
            .and('equal', 'https://github.com/dawidkotarba')
    });

    it('Should display bulb image', () => {
        cy.get('[style="background-image: url(dist/img/bulb.jpg);"]').scrollIntoView().should('be.visible');
    });

    it('Should display code image', () => {
        cy.get('[style="background-image: url(dist/img/code.jpg);"]').scrollIntoView().should('be.visible');
    });

    it('Should display stars image', () => {
        cy.get('[style="background-image: url(dist/img/stars.jpg);"]').scrollIntoView().should('be.visible');
    });

    it('Should display hero image', () => {
        cy.get('[style="background-image: url(dist/img/lego_hero.jpg);"]').scrollIntoView().should('be.visible');
    });

    it('Should display Krakow image', () => {
        cy.get('[style="background-image: url(dist/img/krakow.jpg);"]').scrollIntoView().should('be.visible');
    });
});
