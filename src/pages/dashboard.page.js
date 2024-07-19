// pages/dashboardPage.js
const { By, until } = require('selenium-webdriver');

class DashboardPage {
    constructor(driver) {
        this.driver = driver;
        // this.adminMenu = By.xpath("//li[@class='oxd-main-menu-item-wrapper']//a[@class='oxd-main-menu-item' and @href='/web/index.php/admin/viewAdminModule']//span[contains(@class, 'oxd-main-menu-item--name') and text()='Admin']");  // Menggunakan CSS selector
        this.penggunaMenu = By.xpath("//div[@class='css-1mqa38q' and text()='pengguna']");
        // this.jobCategoriesMenu = By.id('menu_admin_jobCategory');
    }

    async navigateToPengguna() {
        // await this.driver.wait(until.elementLocated(this.adminMenu), 10000);
        // await this.driver.findElement(this.adminMenu).click();
        await this.driver.wait(until.elementLocated(this.penggunaMenu), 5000);
        await this.driver.findElement(this.penggunaMenu).click();
        // await this.driver.wait(until.elementLocated(this.jobCategoriesMenu), 10000);
        // await this.driver.findElement(this.jobCategoriesMenu).click();
    }
}

module.exports = DashboardPage;
