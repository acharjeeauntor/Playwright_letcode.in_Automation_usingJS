class ShadowDomPage {
    firstNameInputID= "#fname"
    lastNameInputID= "#lname"
    emailInputID= "#email"
    
    constructor(page) {
        this.page = page
    }
    async navigateToUrl() {
        await this.page.goto("/shadow")
    }

    async enterFirstName(name) {
        await this.page.fill(this.firstNameInputID,name)
    }
    async enterLastName(name) {
        await this.page.fill(this.lastNameInputID,name)
    }
    async enterEmail(email){
        await this.page.fill(this.emailInputID,email)
    }
}
module.exports = ShadowDomPage;