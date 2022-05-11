describe("Logging out", () => {
  it("A user can log out to log in page ", () => {
    // sign up
    cy.visit("/");
    cy.get("#Signup").click();
    cy.url().should("include", "/users/new");
    // cy.visit("/users/new");
   
    cy.get("#email").type("someone@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();

    // sign in
    cy.visit("/sessions/new");
    cy.get("#email").type("someone@example.com");
    cy.get("#password").type("password");
    cy.get("#submit").click();

    

    // log out
    cy.visit("/posts");
    cy.get("#logout").click();
    cy.url().should("include", "/sessions/new");
    
  });

  
});
