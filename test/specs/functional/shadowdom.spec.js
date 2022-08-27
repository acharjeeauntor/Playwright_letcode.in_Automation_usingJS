const test = require("../../utils/basetest")
const shadowDomData = require("../../testdata/shadowdomdata.json")

test.describe(`Test Shadow DOM`, async () => {
    test.beforeEach(async ({ shadowDomPage }) => {
        await shadowDomPage.navigateToUrl()
    })

    
    test(`@Functional Enter Info in the form`, async ({ shadowDomPage }) => {
        await shadowDomPage.enterFirstName(shadowDomData.firstName)
        // As Closed Shadow Dom can not be handle so this two will not execute
        // await shadowDomPage.enterLastName(shadowDomData.lastName)
        // await shadowDomPage.enterEmail(shadowDomData.email)
    })
})

