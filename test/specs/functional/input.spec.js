const test = require("../../utils/basetest")
const { expect } = require("@playwright/test")
const inputData = require("../../testdata/inputdata.json")

test.describe(`Test Input`, async () => {
    test.beforeEach(async ({ inputPage }) => {
        await inputPage.navigateToUrl()
    })

    test(`@Functional Enter your full Name`, async ({ inputPage }) => {
        await inputPage.enterFullName(inputData.fullName)
    })
    test(`@Functional Append a text and press keyboard tab`, async ({ inputPage }) => {
        await inputPage.appendTextAndKeyboardTab(inputData.appendText)
    })
    test(`@Functional What is inside the text box`, async ({ inputPage }) => {
        expect(await inputPage.getTextBoxValue()).toBe(inputData.textBoxValue);
    })
    test(`@Functional Clear the text`, async ({ inputPage }) => {
        await inputPage.clearInputField()
    })

})

