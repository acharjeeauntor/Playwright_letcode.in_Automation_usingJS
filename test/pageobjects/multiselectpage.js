class MultiSelectPage {
    seleniumElementSelector='text=Selenium'
    protractorElementSelector='text=Protractor'
    postmanElementSelector='text=Postman'

    constructor(page) {
        this.page = page
    }
    async navigateToUrl() {
        await this.page.goto("/selectable")
    }

    async selectItem() {
        // Click text=Selenium
        await this.page.locator(this.seleniumElementSelector).click({
            modifiers: ['Control']
        });
        // Click text=Protractor
        await this.page.locator(this.protractorElementSelector).click({
            modifiers: ['Control']
        });
        // Click text=Postman
        await this.page.locator(this.postmanElementSelector).click({
            modifiers: ['Control']
        });
    }

}
module.exports = MultiSelectPage;