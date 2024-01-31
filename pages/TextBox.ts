class textBox {
  fullName: string = "#userName";
  email: string = "#userEmail";
  currentAddress: string = 'textarea[id="currentAddress"]';
  permanentAddress: string = 'textarea[id="permanentAddress"]';
  submitButton: string = "#submit";

  fillTextBoxForm() {
    cy.get(this.fullName).type("Denis Nazarenko");
    cy.get(this.email).type("aaa@aa.us");
    cy.get(this.currentAddress).type("FL");
    cy.get(this.permanentAddress).type("NY");
    cy.get(this.submitButton).click();
  }
}
export const FillForm = new textBox();
