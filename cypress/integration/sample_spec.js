describe("My First Test", () => {
  it("Does not do much!", () => {
    expect(true).to.equal(true);
  });

  // if value equals false
  it("Does not do much!", () => {
    expect(true).to.equal(false);
  });

  it("Visits the Kithen Sink", () => {
    cy.visit("https://example.cypress.io");
  });

  it('Finds the content "type"', () => {
    cy.visit("https://example.cypress.io");

    cy.contains("type");
  });

  it('Cliks the link "type"', () => {
    cy.visit("https://example.cypress.io");

    cy.contains("type").click();
  });

  it("Gets, types and asserts", () => {
    cy.visit("https://example.cypress.io");

    cy.contains("type").click();

    // Should be on a new URL which includes '/commands/actions'
    cy.url().should("include", "/commands/actions");

    // Get an input, type into it and verify that the value has been updated
    cy.get(".action-email")
      .type("fake@email.com")
      .should("have.value", "fake@email.com");
  });
});
