class DropDownPage {
    fruitsDropdownID= "#fruits"
    selectedOptionTextSelector= ".content .subtitle"
    heroDropDownID= "#superheros"
    languageDropdownID= "#lang"
    languageOptionSelectorID= "#lang option"
    countryOptionSelectorID= "#country"
    
   
    constructor(page) {
        this.page = page
    }

    async navigateToUrl(){
        await this.page.goto("/dropdowns")
    }

    async selectApple(fruit){
        await this.page.locator(this.fruitsDropdownID).waitFor()
        await this.page.selectOption(this.fruitsDropdownID,{ label: fruit })
    }
    async getFruitSelectionLocator(){
        await this.page.locator(this.selectedOptionTextSelector).waitFor()
        return await this.page.locator(this.selectedOptionTextSelector)
    }
    async selectSuperHero(value){
        await this.page.locator(this.heroDropDownID).waitFor()
        await this.page.selectOption(this.heroDropDownID,{ value: value })
    }
    async getHeroSelectionLocator(){
        await this.page.locator(this.selectedOptionTextSelector).waitFor()
        return await this.page.locator(this.selectedOptionTextSelector)
    }

    async printAllLangOptions() {
        try {
            const lang = await this.page.$$(this.languageOptionSelectorID)
            const len = lang.length
            for (var i = 0; i < len; i++) {
                console.log(await this.page.locator(this.languageOptionSelectorID).nth(i).textContent())
                if (i === len - 1) {
                    const ele = this.page.locator(this.languageDropdownID)
                    await ele.selectOption({ index: len - 1 })
                    return this.page.locator(this.languageOptionSelectorID).nth(len - 1).textContent()
                }
            }
        } catch {
            console.log("Somthing Wrong in printAllLangOptions() function ")
        }

    }

    async getLanguageSelectionLocator(){
        await this.page.locator(this.selectedOptionTextSelector).waitFor()
        return await this.page.locator(this.selectedOptionTextSelector)
    }

    async selectCountry(value){
        await this.page.locator(this.countryOptionSelectorID).waitFor()
        await this.page.selectOption(this.countryOptionSelectorID,{ value: value })
    }

}
module.exports = DropDownPage