const test = require("../../utils/basetest")
const { expect } = require("@playwright/test")
const buttonData = require("../../pageobjects/buttonpage")

test.describe(`Test Button`, async () => {
    test.beforeEach(async({ buttonPage })=>{
        await buttonPage.navigateToUrl()
    })
    test(`@Smoke Goto Home and come back here using driver command`, async ({ buttonPage }) => {
        // await test.step(`Goto Button page`, async () => {
        //     await buttonPage.navigateToUrl("/buttons")
        // })
        await test.step(`Click Go to Home Button`, async () => {
            await buttonPage.clickGoToHomeBtn()
        })
        await test.step(`Verify home page`, async () => {
            expect(await buttonPage.getPageUrl()).toContain(buttonData.homePageUrl);

        })
        await test.step(`Navigate Back to previous page`, async () => {
            await buttonPage.navigateBackFromHomePage()
        })
    })
    test(`@Functional Find the color of the button`, async ({ buttonPage }) => {
        // await test.step(`Goto Button page`, async () => {
        //     await buttonPage.navigateToUrl("/buttons")
        // })
        await test.step(`Verify Button BG Color`, async () => {
            let colorCode = await buttonPage.getBGColorCode()
            expect(colorCode).toEqual(buttonData.buttonColorCode)
        })
    })
    test(`@Functional Confirm button is disabled`, async ({ buttonPage }) => {
        // await test.step(`Goto Button page`, async () => {
        //     await buttonPage.navigateToUrl("/buttons")
        // })
        await test.step(`Verify button is disabled`, async () => {
           expect(await buttonPage.isBtnDisable).toBeTruthy()
        })
    })

    test(`@Functional Click and Hold Button`, async ({ buttonPage }) => {
        // await test.step(`Goto Button page`, async () => {
        //     await buttonPage.navigateToUrl("/buttons")
        // })
        await test.step(`Click and Hold Button`, async () => {
            await buttonPage.clickAndHoldButton()
        })
        await test.step(`Verify Button text after click and hold`, async () => {
            expect(await buttonPage.getHoldBtnTextLocator()).toContainText(buttonData.buttonLongPressText);
        })
    })
})