import {LocCodingLogin} from "../../pages/localCoding/LocalCoding"
describe('LOGIN', () => {
    beforeEach(() => {
        cy.session('myCurrentSession', ()=>{
            cy.visit(`${Cypress.env('stage')}`)
            LocCodingLogin.buttonLogin(Cypress.env('email'), Cypress.env('password'))
        })
    })
    it('loginPage', () => {
        cy.visit(`${Cypress.env('stage')}`)
    });
});