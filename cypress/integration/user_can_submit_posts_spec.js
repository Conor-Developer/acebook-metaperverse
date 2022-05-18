describe("Timeline", () => {
  it("can submit posts, when signed in, and view them", () => {
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
    cy.get(".posts").should("contain", "Hello, world!");
    cy.get("#datestamp").invoke('text').should("match", /Created at \d{2}:\d{2} on \d{1,2} \w{3,} \d{4}/);

    // Checks that empty posts won't be added
    cy.visit("/posts");
    cy.get("#new-post-form").submit();
    cy.contains("Invalid Message: Empty");

    // checks if posts are in order of newest first
    cy.visit("/posts");

    cy.get("#new-post-form").find('[type="text"]').type("Hello, world1!");
    cy.get("#submitPost").click();
    cy.get("#new-post-form").find('[type="text"]').type("Hello, world2!");
    cy.get("#submitPost").click();
    cy.get("#new-post-form").find('[type="text"]').type("Hello, world3!");
    cy.get("#submitPost").click();

    cy.contains("Hello, world3!");
    cy.contains("Hello, world2!");
    cy.contains("Hello, world1!");
  });
});
