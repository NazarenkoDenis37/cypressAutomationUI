class IFrame {
    getIframe() {
        cy.get('#frame1').then((iFrame) =>{
            const body = iFrame.contents().find('body')
            cy.get('.navbar-brand').should('have.text', 'Frame1 (ID=frame1)')
        })
    }
    visit() {
        cy.visit(`${Cypress.env("hw2")}/frames.html`)
    }
}

export const IFrameHW = new IFrame();