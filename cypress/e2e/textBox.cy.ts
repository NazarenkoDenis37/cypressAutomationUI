import { FillForm } from "..//..//pages/TextBox";

describe("Text Box Page", () => {
  beforeEach(() => {
    cy.visit(`${Cypress.env("demoQA")}/text-box`);
  });
  it("Text Box", () => {
    cy.get("#userName").type("Denis Nazarenko");
    cy.get("#userEmail").type("aaa@aa.us");
    cy.get('textarea[id="currentAddress"]').type("FL");
    cy.get('textarea[id="permanentAddress"]').type("NY");
    cy.get("#submit").click();
    cy.get("#name").should("have.text", "Name:Denis Nazarenko");
    cy.get("#email").should("have.text", "Email:aaa@aa.us");
    // cy.get('p[id="currentAddress"]').should("have.text", "Current Address :FL");
    cy.get('p[id="permanentAddress"]').should(
      "have.text",
      "Permananet Address :NY"
    );
  });

  it("Text Box PageObject", () => {
    FillForm.fillTextBoxForm();
    cy.get("#name").should("have.text", "Name:Denis Nazarenko");
    cy.get("#email").should("have.text", "Email:aaa@aa.us");
    // cy.get('p[id="currentAddress"]').should("have.text", "Current Address :FL");
    cy.get('p[id="permanentAddress"]').should("have.text","Permananet Address :NY");
  });
});
