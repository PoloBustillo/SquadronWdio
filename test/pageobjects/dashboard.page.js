const Page = require("./page");

class DashboardPage extends Page {
  /**
   * define selectors using getter methods
   */
  get activitiesButton() {
    return $("//div[3]/ul/li[2]/a");
  }
  get assignButton() {
    return $("//div[3]/form/input[2]");
  }

  clickActivities() {
    this.activitiesButton.click();
  }
  assignActivity() {
    this.assignButton.click();
    browser.pause(10000);
  }
}

module.exports = new DashboardPage();
