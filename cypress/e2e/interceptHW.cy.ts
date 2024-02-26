describe("INTERCEPT HOMEWORK", () => {
  it("network request spy katas", function () {
    cy.fixture("katas.json").as("data");
    cy.intercept("POST", "*/login").as("login");
    cy.intercept(
      "https://server-stage.pasv.us/progress/codewars/completed/65c2da8504369c018a35764e",
      { fixture: "katas.json" }
    ).as("katas");
    cy.visit(`${Cypress.env("stage")}/user/login`);
    cy.get("#normal_login_email").type(Cypress.env("email"));
    cy.get("#normal_login_password").type(Cypress.env("password"), {
      log: false,
    });
    cy.get('button[type="submit"]').click();
    cy.wait("@login").then((wholeResponse) => {
      console.log(wholeResponse, "resp");
      let id = wholeResponse.response.body.payload.user._id;
      cy.location().should((loc) => {
        console.log(loc, "loc");
        expect(loc.href).to.eq(`https://stage.pasv.us/profile/${id}`);
        expect(wholeResponse.response.statusCode).to.eq(200);
      });
    });
    cy.visit("https://stage.pasv.us/profile/65c2da8504369c018a35764e/katas");
    cy.wait("@katas").then((el) => {
      console.log(el, 'response');
      cy.wrap(this.data).should('deep.equal', el.response.body)
    });
  });
});
