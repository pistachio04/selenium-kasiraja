const { Builder, By, until } = require('selenium-webdriver');
const LoginPage = require('../pages/login.page.js');
const DashboardPage = require('../pages/dashboard.page.js');
const PenggunaPage = require('../pages/pengguna.page.js')
// const JobCategoriesPage = require('../pages/job-category.page.js');
const { describe, it, after, before } = require('mocha');

describe('CRUD Pengguna Test', function() {
    this.timeout(30000);
    let driver
    let loginPage
    let dashboardPage
    let penggunaPage

    before(async function() {
        driver = await new Builder().forBrowser('chrome').build()
        loginPage = new LoginPage(driver)
        dashboardPage = new DashboardPage(driver)
        penggunaPage = new PenggunaPage(driver)

    });

    it('should login and add a new pengguna', async function() {
        // Login ke sistem
        await loginPage.open()
        await loginPage.login('sigid@evermos.com', 'admin#123')

        // Tunggu hingga halaman dashboard dimuat
        await driver.wait(until.elementLocated(By.xpath('//h3[normalize-space()="kasirAja"]')), 5000)

        // Navigasi ke halaman Pengguna
        await dashboardPage.navigateToPengguna()

        // Tunggu hingga halaman Pengguna dimuat
        await driver.wait(until.elementLocated(By.xpath('//a[normalize-space()="tambah"]')), 5000);

        // Navigasi ke halaman Tambah Pengguna
        await penggunaPage.navigateToTambahPengguna()
        
        // Tunggu hingga halaman Tambah Pengguna dimuat
        await driver.wait(until.elementLocated(By.css('button[class="chakra-button css-l5lnz6"]')), 5000);

        // Tambahkan Pengguna Baru
        // await jobCategoriesPage.addJobCategory('New Job Category');
        await penggunaPage.tambahPengguna('Pengguna Create', 'pengguna@gmail.com', 'admin123123')

        // Tunggu hingga elemen berhasil ditambahkan
        await driver.wait(until.elementLocated(By.xpath('//td[normalize-space()="Pengguna Create"]')), 5000);

        console.log('Done!');
    });

    // it('delete pengguna', async function() {
    //     // // Login ke sistem
    //     await loginPage.open()
    //     await loginPage.login('sigid@evermos.com', 'admin#123')

    //     // // Tunggu hingga halaman dashboard dimuat
    //     await driver.wait(until.elementLocated(By.xpath('//h3[normalize-space()="kasirAja"]')), 5000)

    //     // // Navigasi ke halaman Pengguna
    //     await dashboardPage.navigateToPengguna()

    //     // Tunggu hingga halaman Pengguna dimuat
    //     await driver.wait(until.elementLocated(By.xpath('//a[normalize-space()="tambah"]')), 5000);

    //     // Delete Pengguna
    //     // await jobCategoriesPage.addJobCategory('New Job Category');
    //     // await penggunaPage.tambahPengguna('Pengguna Create', 'pengguna@gmail.com', 'admin123123')
    //     penggunaPage.deletePengguna('Pengguna Create')

    //     console.log('Done!');
    // });

    // after(async function() {
    //     await driver.quit();
    // });
});
