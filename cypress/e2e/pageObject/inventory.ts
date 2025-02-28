
const productToSelectorMapping = {
    "Sauce Labs Backpack": '[data-test="add-to-cart-sauce-labs-backpack"]',
    "Sauce Labs Bike Light": '[data-test="add-to-cart-sauce-labs-bike-light"]',
    "Sauce Labs Bolt T-Shirt":
      '[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]',
  };
  
  class InventoryPage {
    addToCart(item) {
      const selector = productToSelectorMapping[item];
      cy.get(selector).click();
    }
    clickCart() {
      cy.get('[data-test="shopping-cart-badge"]').click();
    }
  }
  const inventoryPage = new InventoryPage();
  export default inventoryPage;
  