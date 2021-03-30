const Page = require("./page");

class DashboardPage extends Page {
  /**
   * define selectors using getter methods
   */
  get activitiesButton() {
    return $("//div[3]/ul/li[2]/a");
  }
  get assignButton() {
    return $(".uk-card-footer input");
  }
  get menuButton() {
    return $(".uk-text-muted > svg");
  }
  get closeButton() {
    return $("(//a[contains(text(),'close session')])[2]");
  }
  get activitiesWorldSection(){
    return $('[uk-filter-control=".order-words"]')
  }
  get contenedores(){
    return $$('#contenedor-words li')
  }
  

  clickActivities() {
    this.activitiesButton.click();
  }
  assignActivity() {
    this.assignButton.click();
  }
  logOff() {
    browser.pause(1000);
    this.menuButton.click();
    browser.pause(1000);
    this.closeButton.click();
  }
  goToWorldActivities() {
    this.activitiesWorldSection.click();
  }
  completeActivity() {
    let contenedores = this.contenedores
    console.log(contenedores.length)
    for (let index = 0; index < contenedores.length; index++) {
      browser.pause(1000);
      contenedores[index].$('input[value="Send"]').click()
      browser.pause(1000);
    }
    
  }
}

module.exports = new DashboardPage();
