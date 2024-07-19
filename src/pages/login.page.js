// pages/loginPage.js
const { By, until } = require('selenium-webdriver');

class LoginPage {
    constructor(driver) {
        this.driver = driver;
        this.url = 'https://kasirdemo.belajarqa.com';
        this.usernameInput = By.xpath('//input[@id="email"]');
        this.passwordInput = By.xpath('//input[@id="password"]');
        this.loginButton = By.css('button[type="submit"]');
    }

    async open() {
        await this.driver.get(this.url);
    }

    async setUsername(username) {
        await this.driver.wait(until.elementLocated(this.usernameInput), 5000);
        await this.driver.findElement(this.usernameInput).sendKeys(username);
    }

    async setPassword(password) {
        await this.driver.wait(until.elementLocated(this.passwordInput),5000);
        await this.driver.findElement(this.passwordInput).sendKeys(password);
    }

    async clickLogin() {
        await this.driver.wait(until.elementLocated(this.loginButton), 5000);
        await this.driver.findElement(this.loginButton).click();
    }

    async login(username, password) {
        await this.setUsername(username);
        await this.setPassword(password);
        await this.clickLogin();
    }
}

module.exports = LoginPage;
