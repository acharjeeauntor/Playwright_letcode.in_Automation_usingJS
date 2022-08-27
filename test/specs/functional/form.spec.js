const test = require("../../utils/basetest")
const formData = require("../../testdata/formdata.json")


test.describe(`Test Form`,async()=>{
    test.beforeEach(async ({ formPage }) => {
        await formPage.navigateToUrl()
    })
    test(`@Functional Submit Form`,async({ formPage })=>{
        await formPage.submitForm(formData.FirstName,formData.LastName,formData.email,
            formData.phone,formData.adds1,formData.adds2,
            formData.state,formData.postalcode,formData.countryCode,
            formData.country,formData.dob)
    })
})