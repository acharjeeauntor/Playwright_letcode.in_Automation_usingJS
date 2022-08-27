class RadioAndCheckboxPage {
    selectAnyOneYesID="#yes"
    selectAnyOneNoID="#no"
    selectOnlyOneYesID="#one"
    selectOnlyOneNoID="#two"
    selectFindBugYesID="#nobug"
    selectFindBugNoID="#bug"
    selectFooID="#foo"
    selectBarID="#notfoo"
    selectMaybeID="#maybe"
    selectRememberMeTextSelector='text= Remember me'
    selectIagreetotheTextSelector='text=  I agree to the '
    

    constructor(page) {
        this.page = page
    }
    async navigateToUrl() {
        await this.page.goto("/radio")
    }

    async checkYesInSelectAnyOne(){
        await this.page.check(this.selectAnyOneYesID)
    }
    async checkNoInSelectOnlyOne(){
        await this.page.check(this.selectOnlyOneNoID)
    }
    async checkYesInFindBug(){
        await this.page.check(this.selectFindBugYesID)
    }
    async isBarIsSelected(){
        return await this.page.isChecked(this.selectBarID)
    }
    async isMaybeIsDisabled(){
        return await this.page.isDisabled(this.selectMaybeID)
    }
    async isRememberMeIsChecked(){
        return await this.page.isChecked(this.selectRememberMeTextSelector)
    }
    async checkIAgreeToTheCheckbox(){
        await this.page.check(this.selectIagreetotheTextSelector)
    }
}
module.exports = RadioAndCheckboxPage;