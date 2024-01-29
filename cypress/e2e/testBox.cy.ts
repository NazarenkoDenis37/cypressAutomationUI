describe("testBox", () => {
  it("test", () => {
    cy.visit("https://uitestingplayground.com/textinput")
    cy.get("input.form-control").type("Hello friends")
    cy.get("#updatingButton").click()
    cy.contains("button", "Hello friends")
    cy.get("#updatingButton").should("have.text", "Hello friends")
    cy.get("#updatingButton").then(element => {
        expect(element.text()).to.equal("Hello friends")
    })
  })
})