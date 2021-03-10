const Page = require("./page");

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
  /**
   * define selectors using getter methods
   */
  get inputUsername() {
    return $$(".uk-input")[0];
  }
  get inputPassword() {
    return $$(".uk-input")[1];
  }
  get imgs() {
    return $$("img");
  }
  get btnSubmit() {
    return $(".uk-button");
  }

  /**
   * a method to encapsule automation code to interact with the page
   * e.g. to login using username and password
   */
  login(username, password) {
    this.imgs[0].click();
    this.imgs[1].click();
    this.inputUsername.setValue(username);
    this.inputPassword.setValue(password);
    this.btnSubmit.click();
  }

  /**
   * overwrite specifc options to adapt it to page object
   */
  open() {
    return super.open("login");
  }
}

module.exports = new LoginPage();
