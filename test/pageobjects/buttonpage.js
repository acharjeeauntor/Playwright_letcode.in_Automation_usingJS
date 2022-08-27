class ButtonPage {
    homeBtnID=`#home`
    colorBtnID="#color"
    disableBtnSelector=`[title='Disabled button']`
    holdBtnSelector=`button:has-text('Button Hold!')`
    holdBtnText =`//h2`
    

    constructor(page) {
        this.page = page
    }

    async navigateToUrl(){
        await this.page.goto("/buttons")
    }

    async clickGoToHomeBtn() {
        await this.page.click(this.homeBtnID)
    }

    async getPageUrl() {
       return await this.page.url()
    }
    async navigateBackFromHomePage() {
        this.page.goBack()
    }
    async getBGColorCode() {
        await this.page.waitForSelector(this.colorBtnID);
        const code = await this.page.locator(this.colorBtnID).evaluate((el) => {
            return window.getComputedStyle(el).getPropertyValue('background-color');
        });
        return code
    }
    async isBtnDisable(){
        return await this.page.locator(this.disableBtnSelector).isDisabled()

    }
    async clickAndHoldButton() {
        await this.page.waitForSelector(this.holdBtnSelector);
        await this.page.click(this.holdBtnSelector, {
            delay: 5000
        });
    }
    async getHoldBtnTextLocator() {
       return await this.page.locator(this.holdBtnText)
    }

}

module.exports = ButtonPage;