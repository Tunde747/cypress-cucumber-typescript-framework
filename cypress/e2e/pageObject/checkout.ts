class CheckoutPage {
    assertOrderCompleted() {
      cy.get('[data-test="complete-header"]')
        .should("be.visible")
        .and("contain.text", "Thank you for your order!");
    }

    submitInformation(firstName, lastName, postalCode) {
        cy.get('[data-test="firstName"]').type(firstName);
        cy.get('[data-test="lastName"]').type(lastName);
        cy.get('[data-test="postalCode"]').type(postalCode);
        cy.get('[data-test="continue"]').click();
    }

    finish() {
        cy.get('[data-test="finish"]').click();
      }
  }
  const checkoutPage = new CheckoutPage();
  export default checkoutPage;
  