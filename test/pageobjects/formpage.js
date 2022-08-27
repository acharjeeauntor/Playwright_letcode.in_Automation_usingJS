class FormPage {
    firstNameInputID = "#firstname"
    lastNameInputID = "#lasttname"
    emailInputID = "#email"
    phoneInputID = "#Phno"
    addressLine1InputID = "#Addl1"
    addressLine2InputID = "#Addl2"
    stateInputID = "#state"
    postalCodeInputID = "#postalcode"
    dateOfBirthID = "#Date"
    countryCodeSelector = 'select>>nth=0'
    countrySelector = 'select>>nth=-1'
    genderID = "#male"
    agreeSelector = "input[type=checkbox]"
    submitBtnSelector = "input[type='submit']"


    constructor(page) {
        this.page = page
    }

    async navigateToUrl() {
        await this.page.goto("/forms")
    }

    async submitForm(fname, lname,
        email, phone,
        address1, address2,
        state, postalCode,
        countryCode, country, dateOfBirth) {
            await this.page.fill(this.firstNameInputID, fname)
            await this.page.fill(this.lastNameInputID, lname)

        try {
            await this.page.waitForSelector(this.emailInputID)
            const ele = this.page.locator(this.emailInputID)
            await ele.focus()
            await this.page.keyboard.press('End')
            await ele.type(email)
        } catch {
            console.log("Somthing wrong in InputPage")
        }
        await this.page.selectOption(this.countryCodeSelector,{ label: countryCode })
        await this.page.fill(this.phoneInputID, phone)
        await this.page.fill(this.addressLine1InputID, address1)
        await this.page.fill(this.addressLine2InputID, address2)
        await this.page.fill(this.stateInputID, state)
        await this.page.fill(this.postalCodeInputID, postalCode)
        await this.page.selectOption(this.countrySelector,{ label: country })
        await this.page.type(this.dateOfBirthID, dateOfBirth)
        await this.page.check(this.genderID)
        await this.page.check(this.agreeSelector)
        await this.page.click(this.submitBtnSelector)
    }


}
module.exports = FormPage;