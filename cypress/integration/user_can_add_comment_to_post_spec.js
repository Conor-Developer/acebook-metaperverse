describe("Commenting on Posts on Timeline", () => {
  it("can submit comments on posts, when signed in, and view them on the timeline", () => {
    // sign up
    cy.visit("/");
    cy.get("#Signup").click();
    cy.url().should("include", "/users/new");
    cy.get("#username").type("someone_else");
    cy.get("#email").type("someone_else@example.com");
    cy.get("#password").type("anotherpassword");
    cy.get("#submit").click();

    // sign in
    cy.visit("/sessions/new");
    cy.get("#email").type("someone_else@example.com");
    cy.get("#password").type("anotherpassword");
    cy.get("#submit").click();

    // submit a post
    cy.visit("/posts");
    cy.get("#new-post-form").find('[type="text"]').type("Hello, world!");
    cy.get("#new-post-form").submit();

    // submit a comment
    cy.get("#new-comment-form").find('[type="text"]').type("Comment on hello world!");
    cy.get("#new-comment-form").submit();

    // test that comment appears on the timeline
    cy.get("p.comments").should("contain", "Comment on hello world!");

  })
})