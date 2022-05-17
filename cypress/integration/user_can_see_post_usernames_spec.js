describe("Viewing post usernames", () => {
  it("can view post usernames", () => {
    // sign up
    cy.visit("/");
    cy.get("#Signup").click();
    cy.url().should("include", "/users/new");
    cy.get("#username").type("someoneelse");
    cy.get("#email").type("someoneelse@example.com");
    cy.get("#password").type("somepassword");
    cy.get("#submit").click();

    // sign in
    cy.visit("/sessions/new");
    cy.get("#email").type("someoneelse@example.com");
    cy.get("#password").type("somepassword");
    cy.get("#submit").click();

    // submit a post
    cy.visit("/posts");
    cy.get("#new-post-form").find('[type="text"]').type("Hello, world!");
    cy.get("#new-post-form").submit();
    cy.get(".posts").should("contain", "someoneelse");
  });
});
