class InputPage {
    fullNameInputID= "#fullName"
    keyboardTabInputID= "#join"
    insideTextBoxInputID= "#getMe"
    clearTextInputID= "#clearMe"
    readonlyInputID= "#dontwrite"
    
    constructor(page) {
        this.page = page
    }
    async navigateToUrl() {
        await this.page.goto("/edit")
    }
    async enterFullName(name){
        await this.page.fill(this.fullNameInputID, name)
    }

    async clearInputField() {
        await this.page.fill(this.clearTextInputID, "");
    }
    async appendTextAndKeyboardTab(text) {
        try{
            await this.page.locator(this.keyboardTabInputID).waitFor()
            const ele = this.page.locator(this.keyboardTabInputID)
            await ele.focus()
            await this.page.keyboard.press('End') 
            await ele.type(` ${text}`)
        }catch{
            console.log("Somthing wrong in InputPage")
        }

    }
    async getTextBoxValue() {
        await this.page.waitForSelector(this.insideTextBoxInputID);
        const textValue = await this.page.getAttribute(this.insideTextBoxInputID, 'value');
        return textValue.trim()
    }
}
module.exports = InputPage;