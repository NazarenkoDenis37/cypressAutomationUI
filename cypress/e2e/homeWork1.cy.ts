describe("playground page", () => {
  it("wait for element to be visible", () => {
    cy.visit(Cypress.env("hw"));
    cy.get("#visibility_trigger").should("be.visible").and("exist").click();
    cy.get("#visibility_target").should("be.visible").and("exist").click();
    cy.get(".popover-body").should(
      "have.text",
      "I just removed my invisibility cloak!!"
    );
  });
  it("Wait for element to be enabled / Wait for an attribute to contain certain text", () => {
    cy.visit(Cypress.env("hw"));    
    cy.get('#enabled_trigger').should("be.visible").and("exist").click();
    cy.get('#enabled_target').should('have.text', 'Enabled Button').click();
    cy.get('.popover-body').should('have.text', 'See, you just clicked me!!')
  });
});
