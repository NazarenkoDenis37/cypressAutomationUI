import {AlertPage} from '../../pages/Alert'

describe('ALERT', () => {
    beforeEach(()=>{
        cy.visit(`${Cypress.env('herokuapp')}/javascript_alerts`);
    })
    it('Click for JS Alert', () => {
        AlertPage.jsAlert()
    });
    it('Click for JS Confirm OK', () => {
       AlertPage.jsConfirmOk()
    });
    it('Click for JS Confirm Cancel', () => {
        AlertPage.jsConfirmCancel()
     });
    it('Click for JS Prompt OK/true', () => {
        AlertPage.jsPrompt()
    });
    it('Click for JS Prompt OK/true hardcore', () => {
        cy.window().then(win=>{
            cy.stub(win,'prompt').returns('Hello World!')
            cy.contains('button', 'Click for JS Prompt').click()
        })
        cy.get('#result').should('have.text', 'You entered: Hello World!')
    });
});