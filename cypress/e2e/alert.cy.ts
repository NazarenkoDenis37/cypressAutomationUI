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
});