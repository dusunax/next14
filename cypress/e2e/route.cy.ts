describe("Top Nav", () => {
  it("Home", () => {
    cy.visit("/");
    cy.get("h2").contains("Popular Movies");
  });

  it("About US", () => {
    cy.visit("/about-us");
    cy.get("h2").contains("About Us");
  });

  it("뒤로 가기 버튼", () => {
    cy.visit("/");

    cy.get('a[href*="about-us"]').click();
    cy.get("button.goback").click();

    cy.url().should("include", "/");
  });
});
