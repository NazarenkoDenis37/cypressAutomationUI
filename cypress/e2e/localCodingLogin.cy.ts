import {LocCodingLogin} from "../../pages/localCoding/LocalCoding"
describe('LOGIN', () => {
    beforeEach(() => {
        cy.session('myCurrentSession', ()=>{
            cy.visit(`${Cypress.env('stage')}`)
            LocCodingLogin.buttonLogin(Cypress.env(process.env.EMAIL_LOCAL_STAGE), Cypress.env(process.env.PASSWORD_LOCAL_STAGE))
        })
    })
    it('loginPage', () => {
        cy.visit(`${Cypress.env('stage')}`)
    });
});