class IFrame {
  private iframeSel1: string = "#frame1";
  private iframeSel2: string = "#frame2";
  private iframeSel3: string = "#frame3";
  private iframeSel4: string = "#frame4";

  private buttonSel1: string = "#click_me_1";
  private buttonSel2: string = "#click_me_2";
  private buttonSel4: string = "#click_me_4";

  private bodySel: string = "body";
  private titleSel: string = ".navbar-brand";

  visit() {
    cy.visit(`${Cypress.env("hw2")}/frames.html`);
  }
  getIframe1() {
    cy.get(this.iframeSel1).then((frame1) => {
      const bodyFrame1 = frame1.contents().find(this.bodySel);
      cy.wrap(bodyFrame1)
        .find(this.titleSel)
        .then((title1) => {
          cy.wrap(title1).should("have.text", "Frame1 (ID=frame1)");
        });
    });
  }
  getIframe2() {
    cy.get(this.iframeSel1).then((frame1) => {
      const bodyFrame1 = frame1.contents().find(this.bodySel);
      cy.wrap(bodyFrame1)
        .find(this.iframeSel2)
        .then((frame2) => {
          const bodyFrame2 = frame2.contents().find(this.bodySel);
          cy.wrap(bodyFrame2)
            .find(this.titleSel)
            .then((title2) => {
              cy.wrap(title2).should("have.text", "Frame2 (ID=frame2)");
            });
        });
    });
  }
  getIframe3() {
    cy.get(this.iframeSel1).then((frame1) => {
      const bodyFrame1 = frame1.contents().find(this.bodySel);
      cy.wrap(bodyFrame1)
        .find(this.iframeSel3)
        .then((frame3) => {
          const bodyFrame3 = frame3.contents().find(this.bodySel);
          cy.wrap(bodyFrame3)
            .find(this.titleSel)
            .then((title3) => {
              cy.wrap(title3).should("have.text", "Frame3 (ID=frame3)");
            });
        });
    });
  }
  getIframe4() {
    cy.get(this.iframeSel1).then((frame1) => {
      const bodyFrame1 = frame1.contents().find(this.bodySel);
      cy.wrap(bodyFrame1)
        .find(this.iframeSel3)
        .then((frame3) => {
          const bodyFrame3 = frame3.contents().find(this.bodySel);
          cy.wrap(bodyFrame3)
            .find(this.iframeSel4)
            .then((frame4) => {
              const bodyFrame4 = frame4.contents().find(this.bodySel);
              cy.wrap(bodyFrame4)
                .find(this.titleSel)
                .then((title4) => {
                  cy.wrap(title4).should("have.text", "Frame4 (ID=frame4)");
                });
            });
        });
    });
  }
  getIframeExt1() {
    cy.get(this.iframeSel1).then((frameEx1) => {
      const button1 = frameEx1.contents().find(this.buttonSel1);
      cy.wrap(button1).should("have.text", "Click Me 1").click();
      cy.wrap(button1).should("have.text", "Clicked");
    });
  }
  getIframeExt2() {
    cy.get(this.iframeSel1).then((frameEx1) => {
      const Frame1 = frameEx1.contents();
      cy.wrap(Frame1)
        .find(this.iframeSel2)
        .then((frameEx2) => {
          const button2 = frameEx2.contents().find(this.buttonSel2);
          cy.wrap(button2).should("have.text", "Click Me 2").click();
          cy.wrap(button2).should("have.text", "Clicked");
        });
    });
  }
  getIframeExt3() {
    cy.get(this.iframeSel1).then((frameEx1) => {
      const Frame1 = frameEx1.contents();
      cy.wrap(Frame1)
        .find(this.iframeSel3)
        .then((frameEx3) => {
          const Frame3 = frameEx3.contents();
          cy.wrap(Frame3)
            .find(this.iframeSel4)
            .then((frameEx4) => {
              const button4 = frameEx4.contents().find(this.buttonSel4);
              cy.wrap(button4).should("have.text", "Click Me 4").click();
              cy.wrap(button4).should("have.text", "Clicked");
            });
        });
    });
  }
}

export const IFrameHW = new IFrame();
