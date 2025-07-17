describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3001/");

    cy.get("nav").should("exist");
    cy.get("a").should("have.attr", "href");
    cy.get("a").contains("NDIS REFERRAL");
    cy.get("footer").should("exist").contains("NDIS Support Coordination");
    cy.get("img").should("exist").should("have.attr", "src");
  });
});

describe("Footer test", () => {
  it("should contain at least one image", () => {
    cy.visit("http://localhost:3001/about-us");
    cy.get("footer img").should("have.length.at.least", 2);
    cy.get("footer img").each(($img) => {
      cy.wrap($img).should("have.attr", "src").and("not.be.empty");
    });
  });
});

describe("About us page", () => {
  it("should have an About Us text", () => {
    cy.visit("http://localhost:3001/about-us");
    cy.get("h1").should("contain.text", "About us");
  });
});

describe("Mobile responsiveness", () => {
  it("renders correctly on iPhone 11 pro", () => {
    cy.viewport("iphone-xr");
    cy.visit("http://localhost:3001/about-us");
  });
});

describe("Tablet responsiveness", () => {
  it("renders correctly on ipad, etc", () => {
    cy.viewport("ipad-2");
    cy.visit("http://localhost:3001/careers");
  });
});

describe("Mobile navbar shows on samsung", () => {
  it("mobile navbar shows and responds when clicked", () => {
    cy.viewport("samsung-s10");
    cy.visit("http://localhost:3001/rhdp");
    cy.get(".hamburger", { timeout: 5000 }).should("be.visible").click();
  });
});

// cy.viewport(320, 480); // Width x Height in pixels
