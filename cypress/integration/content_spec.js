describe('Content tests', () => {

    beforeEach(() => {
        cy.visit('index.html')
    });

    it('The title should include dawidkotarba.github.io', () => {
        cy.title().should('include', 'dawidkotarba.github.io')
    });
});