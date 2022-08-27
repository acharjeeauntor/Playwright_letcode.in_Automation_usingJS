class AlertPage {

    simpleAlertBtnID= '#accept'
    confirmAlertBtnID= '#confirm'
    promptAlertBtnID= '#prompt'
    promptNameID="#myName"
    modernAlertBtnID= '#modern'

    
    constructor(page) {
        this.page = page

    }

    async navigateToUrl() {
        await this.page.goto("/alert")
    }

    async getSimpleAlertMsg() {
        let alertMsg
        try {
            this.page.on('dialog', async (dialog) => {
                //console.log(dialog.message())
                alertMsg = dialog.message()
                //console.log(dialog.defaultValue())
                //console.log(dialog.type())
                await dialog.accept()
            })
            await this.page.click(this.simpleAlertBtnID)
            return alertMsg
        } catch {
            console.log(`Somting Wrong in getSimpleAlertMsg() Function`)
        }
    }

    async getConfirmAlertMsg() {
        let confirmMsg
        try {
            this.page.on('dialog', async (dialog) => {
                //console.log(dialog.message())
                confirmMsg = dialog.message()
                //console.log(dialog.defaultValue())
                //console.log(dialog.type())
                await dialog.dismiss()

            })
            await this.page.click(this.confirmAlertBtnID)
            return confirmMsg
        } catch {
            console.log(`Somting Wrong in getConfirmAlertMsg() Function`)
        }


    }
    async enterNameInPrompt(name) {
        this.page.on('dialog', async (dialog) => {
            await dialog.accept(name)
        })
        await this.page.click(this.promptAlertBtnID)
    }

    async getNamePromptLocator() {
        return await this.page.locator(this.promptNameID)
    }


}

module.exports = AlertPage;