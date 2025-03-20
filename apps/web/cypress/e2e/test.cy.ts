describe("template spec", () => {
  it("passes", () => {
    cy.visit("/");
    cy.contains("Get started by editing apps/docs/app/page.tsx");
  });
});
