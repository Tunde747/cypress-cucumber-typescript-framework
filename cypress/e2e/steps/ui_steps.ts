import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import loginPage from "../pageObject/login";
import inventoryPage from "../pageObject/inventory";
import checkoutPage from "../pageObject/checkout";
import cartPage from "../pageObject/cart";

Given("I am logged as a {string}", (user) => {
  loginPage.login(user, "secret_sauce");
});

When("I add the following items to my cart", (datatable) => {
  datatable.hashes().forEach(({ item }) => {
    inventoryPage.addToCart(item);
  });
});

Then("there should be {int} items in my cart", (expectedCount) => {
  inventoryPage.clickCart();
  cartPage.assertCountEq(expectedCount);
});

When("I proceed to checkout", () => {
  cartPage.checkout();
});

When("I provide my contact information", () => {
  checkoutPage.submitInformation("John", "Doe", "N1 4RT");
});

When("I proceed to finish my order", () => {
  checkoutPage.finish();
});

Then("I should complete my order sucessfully", () => {
  checkoutPage.assertOrderCompleted();
});
