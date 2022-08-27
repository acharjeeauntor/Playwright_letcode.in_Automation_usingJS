class FramePage {
    firstFrameID= "#firstFr"
    innerFrameSelector="[src='innerFrame']"
    firstNameInputSelector= " [name='fname']"
    lastNameInputSelector= "[name='lname']"
    emailInputSelector= "[name='email']"
    
    
    constructor(page) {
        this.page = page
    }

    async navigateToUrl() {
        await this.page.goto("/frame")
    }


    async enterName(firstName, lastName) {
        const fnameLocatorForFirstName = this.page.frameLocator(this.firstFrameID).locator(this.firstNameInputSelector)
        await fnameLocatorForFirstName.type(firstName)
        const fnameLocatorForLastName = this.page.frameLocator(this.firstFrameID).locator(this.lastNameInputSelector)
        await fnameLocatorForLastName.type(lastName)
    }

    async enterEmail(email) {
        const fnameLocatorForEmail = this.page.frameLocator(this.firstFrameID)
        .frameLocator(this.innerFrameSelector)
        .locator(this.emailInputSelector)
        await fnameLocatorForEmail.type(email)
    }



}
module.exports = FramePage;