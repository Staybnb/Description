const puppeteer = require("puppeteer");

describe(
  "Loading static Page",  () => {
    let page;
    let browser;
    beforeAll(async () => {
      browser = await puppeteer.launch({
        headless: false,
        slowMo: 80
      });
      page = await browser.newPage();
      await page.goto("http://localhost:4000/listing?id=987309001");
    });

    afterAll(() => {
      browser.close();
    });
);