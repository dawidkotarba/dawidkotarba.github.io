describe('Content tests', () => {

    beforeEach(() => {
        cy.visit('index.html')
    });

    it('The title should include information bout the site', () => {
        cy.title().should('include', 'Dawid Kotarba - CV')
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