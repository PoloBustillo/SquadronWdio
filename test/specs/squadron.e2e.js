const LoginPage = require("../pageobjects/login.page");
const DashboardPage = require("../pageobjects/dashboard.page");

  const STUDENTS=15;

  describe("Squadron", () => {
    for (let index = 1; index <= STUDENTS; index++) {
      it(`should login with polo_${index.toString().padStart(2, '0')} valid credentials`, () => {
        browser.url("");
        LoginPage.login(`polo_${index.toString().padStart(2, '0')}`, "24");
      });
      it(`should enter activities for polo_${index.toString().padStart(2, '0')}`, () => {
        DashboardPage.clickActivities();
      });
      it(`should assign activity for polo_${index.toString().padStart(2, '0')}`, () => {
        DashboardPage.assignActivity();
      });
      it(`should go to world tasks and complete those for polo_${index.toString().padStart(2, '0')}`, () => {
        DashboardPage.goToWorldActivities();
        DashboardPage.completeActivity();
      });
      it("should close session", () => {
        DashboardPage.logOff();
        
      });
    }
  });
  


