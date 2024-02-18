class IFrame {
    private iframeId:string = '#mce_0_ifr'
  getIframe() {
    cy.frameLoaded(this.iframeId);
    cy.iframe(this.iframeId).then((iframeApp) => {
      cy.wrap(iframeApp).type("{selectAll}{del}").type("Hello World!");
      //OR
      cy.wrap(iframeApp).clear().type("Hello Cypress");
    });
  }
  visit() {
    cy.visit(`${Cypress.env("herokuapp")}/iframe`);
  }
}

export const IFrameAppPage = new IFrame();
