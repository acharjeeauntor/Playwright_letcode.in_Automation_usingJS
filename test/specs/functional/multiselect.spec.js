const test = require("../../utils/basetest")

test.describe(`Test Sort`, async () => {
    test.beforeEach(async ({ multiSelectPage }) => {
        await multiSelectPage.navigateToUrl()
    })
    test(`@Functional Move the content from to do to done`,async({multiSelectPage})=>{
        await multiSelectPage.selectItem()
    })
})