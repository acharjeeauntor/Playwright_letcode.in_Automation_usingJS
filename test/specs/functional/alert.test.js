const test = require("../../utils/basetest")
const{ expect } = require("@playwright/test")
const alertData = require("../../testdata/alertdata.json")

test.describe(`Test Alert`, async () => {
    test.beforeEach(async ({ alertPage }) => {
        await alertPage.navigateToUrl()
    })

    test(`@Smoke Accept the Alert`, async ({ alertPage }) => {
        let msg = await alertPage.getSimpleAlertMsg()
        expect(msg).toBe(alertData.simpleAlertMsg)
    })

    test(`@Functional Dismiss the Alert & print the alert text`, async ({ alertPage }) => {
        let msg = await alertPage.getConfirmAlertMsg()
        expect(msg).toBe(alertData.confirmAlertMsg)
    })
    test(`@Functional Type your name & accept`, async ({ alertPage }) => {
        await alertPage.enterNameInPrompt(alertData.name)
       expect(await alertPage.getNamePromptLocator()).toContainText(alertData.name);
       
    })


})