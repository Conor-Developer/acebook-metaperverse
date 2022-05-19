describe("Registration", () => {
  it("A user signs up and is redirected to sign in", () => {
    // sign up
    cy.visit("/");
    cy.get("#Signup").click();
    cy.url().should("include", "/users/new");
    cy.get("#username").type("someone1235");
    cy.get("#email").type("someone1235@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();
    cy.url().should("include", "/sessions/new");
  });
});
