const test = require("../../utils/basetest")
const { expect } = require("@playwright/test")
test("@Visual Test Visiual Comperision for Button Page", async ({ page, buttonPage }) => {
    buttonPage.navigateToUrl()
    await page.waitForTimeout(10000)
    expect(await page.screenshot()).toMatchSnapshot("buttonPage.png")
})
