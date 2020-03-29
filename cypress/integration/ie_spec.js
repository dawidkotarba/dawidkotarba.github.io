describe('Should show IE not supported popup', () => {

    const popupLocator = '[style="background-color:#000;color:#FFF;text-align:center;padding:10px;"]';

    it('For IE 11', () => {
        cy.visit(Cypress.env('host'), {
            onBeforeLoad: win => {
                Object.defineProperty(win.navigator, 'userAgent', {
                    value: 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko',
                });
            },
        });
        cy.get(popupLocator).should('be.visible');
    });

    it('For IE 10', () => {
        cy.visit(Cypress.env('host'), {
            onBeforeLoad: win => {
                Object.defineProperty(win.navigator, 'userAgent', {
                    value: 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2)',
                });
            },
        });
        cy.get(popupLocator).should('be.visible');
    });

    it('For IE 9', () => {
        cy.visit(Cypress.env('host'), {
            onBeforeLoad: win => {
                Object.defineProperty(win.navigator, 'userAgent', {
                    value: 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; KTXN)',
                });
            },
        });
        cy.get(popupLocator).should('be.visible');
    });

    it('For IE 8', () => {
        cy.visit(Cypress.env('host'), {
            onBeforeLoad: win => {
                Object.defineProperty(win.navigator, 'userAgent', {
                    value: 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0; WOW64; Trident/4.0; SLCC1; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET4.0C; .NET4.0E)',
                });
            },
        });
        cy.get(popupLocator).should('be.visible');
    });

    it('For IE 7', () => {
        cy.visit(Cypress.env('host'), {
            onBeforeLoad: win => {
                Object.defineProperty(win.navigator, 'userAgent', {
                    value: 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)',
                });
            },
        });
        cy.get(popupLocator).should('be.visible');
    });

    it('For IE 6', () => {
        cy.visit(Cypress.env('host'), {
            onBeforeLoad: win => {
                Object.defineProperty(win.navigator, 'userAgent', {
                    value: 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 1.1.4322)',
                });
            },
        });
        cy.get(popupLocator).should('be.visible');
    });
});

describe('Should not show IE not supported popup', () => {

    const popupLocator = '[style="background-color:#000;color:#FFF;text-align:center;padding:10px;"]';

    it('For Chrome', () => {
        cy.visit(Cypress.env('host'), {
            onBeforeLoad: win => {
                Object.defineProperty(win.navigator, 'userAgent', {
                    value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36',
                });
            },
        });
        cy.get(popupLocator).should('not.be.visible');
    });

    it('For Firefox', () => {
        cy.visit(Cypress.env('host'), {
            onBeforeLoad: win => {
                Object.defineProperty(win.navigator, 'userAgent', {
                    value: 'Mozilla/5.0 (Android 8.0.0; Mobile; rv:61.0) Gecko/61.0 Firefox/68.0',
                });
            },
        });
        cy.get(popupLocator).should('not.be.visible');
    });

    it('For Opera', () => {
        cy.visit(Cypress.env('host'), {
            onBeforeLoad: win => {
                Object.defineProperty(win.navigator, 'userAgent', {
                    value: 'Opera/9.80 (Windows NT 6.1; WOW64) Presto/2.12.388 Version/12.18',
                });
            },
        });
        cy.get(popupLocator).should('not.be.visible');
    });

    it('For Safari', () => {
        cy.visit(Cypress.env('host'), {
            onBeforeLoad: win => {
                Object.defineProperty(win.navigator, 'userAgent', {
                    value: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_4) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1 Safari/605.1.15',
                });
            },
        });
        cy.get(popupLocator).should('not.be.visible');
    });
});

