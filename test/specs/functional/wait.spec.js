const test = require("../../utils/basetest")
const { expect } = require("@playwright/test")
const waitData = require("../../testdata/waitdata.json")

test.describe(`Test Wait`, async () => {
    test.beforeEach(async ({ waitPage }) => {
        await waitPage.navigateToUrl()
    })
    test(`@Functional Accept the Alert`, async ({ waitPage }) => {
        let msg = await waitPage.getSimpleBtnAlertMsg()
        expect(msg).toBe(waitData.alertMsg)
    })
})