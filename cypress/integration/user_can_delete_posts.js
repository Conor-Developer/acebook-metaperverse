describe("Removing posts", () => {
  it("can remove posts", () => {
    // sign up
    cy.visit("/");
    cy.get("#Signup").click();
    cy.url().should("include", "/users/new");
    cy.get("#username").type("someone3");
    cy.get("#email").type("someone3@example.com");
    cy.get("#password").type("password3");
    cy.get("#submit").click();

    // sign in
    cy.visit("/sessions/new");
    cy.get("#email").type("someone3@example.com");
    cy.get("#password").type("password3");
    cy.get("#submit").click();

    // attempts to delete & check post
    cy.visit("/posts");


    cy.get("#new-post-form").find('[type="text"]').type("delete test");
    cy.get("#new-post-form").submit();
    cy.get("#delete-button").submit();

    cy.get(".posts").should("not.contain", "delete test");

  });
});
