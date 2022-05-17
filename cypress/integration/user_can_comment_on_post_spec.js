describe("Comment", () => {
  it("can comment on posts", () => {
    // sign up
    cy.visit("/");
    cy.get("#Signup").click();
    cy.url().should("include", "/users/new");
    cy.get("#username").type("someone");
    cy.get("#email").type("someone@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();

    // sign in
    cy.visit("/sessions/new");
    cy.get("#email").type("someone@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();

    // submit a post
    cy.visit("/posts");

    cy.get("#new-post-form").find('[type="text"]').type("Hello, world!");
    cy.get("#new-post-form").submit();
    cy.get("#like-button").click();

    cy.get(".posts").should("contain", 1);

    // comment on a post
    cy.visit("/posts");
    cy.get("#new-comment-form").find('[type="text"]').type("message");
    cy.get("#new-comment-form").submit();

    // some HTTP requests... the same page refreshes
    // and now the comment appears underneath the original post
    cy.get(".posts").should("contain", "message");
  });
});
