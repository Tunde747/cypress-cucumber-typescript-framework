class LoginPage {

  username_locator = "#user-name"
  password_locator = "#password"     
  login_locator = "#login-button"

    login(username, password) {
      cy.visit({ url: "/", failOnStatusCode: false });
      cy.get(this.username_locator).type(username);
      cy.get(this.password_locator).type(password);
      cy.get(this.login_locator).click();
    }
  }
  const loginPage = new LoginPage();
  export default loginPage;
  