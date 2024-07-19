// pages/dashboardPage.js
const { By, until } = require('selenium-webdriver');

class PenggunaPage {
    constructor(driver) {
        this.driver = driver;
        // this.adminMenu = By.xpath("//li[@class='oxd-main-menu-item-wrapper']//a[@class='oxd-main-menu-item' and @href='/web/index.php/admin/viewAdminModule']//span[contains(@class, 'oxd-main-menu-item--name') and text()='Admin']");  // Menggunakan CSS selector
        this.tambahPenggunaMenu = By.xpath('//a[normalize-space()="tambah"]');
        // this.jobCategoriesMenu = By.id('menu_admin_jobCategory');

        ///Tambah Pengguna
        this.nameInput = By.xpath('//input[@id="nama"]');
        this.emailInput = By.xpath('//input[@id="email"]');
        this.passwordInput = By.xpath('//input[@id="password"]');
        this.simpanButton = By.xpath('//button[normalize-space()="simpan"]');
    }

    async navigateToTambahPengguna() {
        // await this.driver.wait(until.elementLocated(this.adminMenu), 10000);
        // await this.driver.findElement(this.adminMenu).click();
        await this.driver.wait(until.elementLocated(this.tambahPenggunaMenu), 5000);
        await this.driver.findElement(this.tambahPenggunaMenu).click();
        // await this.driver.wait(until.elementLocated(this.jobCategoriesMenu), 10000);
        // await this.driver.findElement(this.jobCategoriesMenu).click();
    }

    async setName(name) {
        await this.driver.wait(until.elementLocated(this.nameInput), 5000);
        await this.driver.findElement(this.nameInput).sendKeys(name);
    }

    async setEmail(email) {
        await this.driver.wait(until.elementLocated(this.emailInput), 5000);
        await this.driver.findElement(this.emailInput).sendKeys(email);
    }

    async setPassword(password) {
        await this.driver.wait(until.elementLocated(this.passwordInput),5000);
        await this.driver.findElement(this.passwordInput).sendKeys(password);
    }

    async clickSimpan() {
        await this.driver.wait(until.elementLocated(this.simpanButton), 5000);
        await this.driver.findElement(this.simpanButton).click();
    }

    async tambahPengguna(name, email, password) {
        await this.setName(name)
        await this.setEmail(email)
        await this.setPassword(password)
        await this.clickSimpan()
    }

    async deletePengguna(name) {
        await this.driver.wait(until.elementLocated(By.xpath(`//td[normalize-space()="${name}"]`)), 5000);
        const userRow = await this.driver.findElement(By.xpath(`//div[text()='${name}']/ancestor::tr`));
        const deleteButton = await userRow.findElement(By.xpath(".//button[contains(text(),'Delete')]"));
        await deleteButton.click();
        
        // Confirm deletion in the popup
        const confirmButton = await this.driver.findElement(By.xpath("//button[contains(text(),'Confirm')]"));
        await confirmButton.click();
        
        // Wait for deletion to complete
        await this.driver.wait(until.stalenessOf(userRow), 5000);
    }

}

module.exports = PenggunaPage;
