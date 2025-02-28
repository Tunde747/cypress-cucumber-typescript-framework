class CartPage {
    assertCountEq(expected) {
      cy.get('[data-test="inventory-item"]').should("have.length", expected);
    }
  
    checkout() {
      cy.get('[data-test="checkout"]').click();
    }
  }
  const cartPage = new CartPage();
  export default cartPage;
  