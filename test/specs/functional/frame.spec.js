const test = require("../../utils/basetest")
const frameData = require("../../testdata/framedata.json")



test.describe(`Test Frame`, async () => {
    test.beforeEach(async ({ framePage }) => {
        await framePage.navigateToUrl()
    })

    test(`@Functional Enter your Name`, async ({ framePage }) => {
        await framePage.enterName(frameData.firstName,frameData.lastName)
    })

    test(`@Functional Enter your Email`, async ({ framePage }) => {
        await framePage.enterEmail(frameData.email)
    })

})