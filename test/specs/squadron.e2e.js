const LoginPage = require("../pageobjects/login.page");
const DashboardPage = require("../pageobjects/dashboard.page");

describe("Squadron", () => {
  it("should login with valid credentials", () => {
    browser.url("");
    LoginPage.login("polo_01", "24");
  });
  it("should enter activities", () => {
    DashboardPage.clickActivities();
  });
  it("should assign activity", () => {
    DashboardPage.assignActivity();
  });
});
