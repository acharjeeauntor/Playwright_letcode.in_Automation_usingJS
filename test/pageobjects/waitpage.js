class WaitPage {
    alertBtnID="#accept"
    

    constructor(page) {
        this.page = page
       
    }
    async navigateToUrl() {
        await this.page.goto("/waits")
    }

    async getSimpleBtnAlertMsg() {
        let alertMsg
        try {
            this.page.on("dialog", async (alert) => {
                alertMsg = alert.message()
                await alert.accept()
            })
            await this.page.click(this.alertBtnID)
            await this.page.waitForEvent("dialog")
            return alertMsg
        } catch {
            console.log(`Somting Wrong in getSimpleAlertMsg() Function`)
        }
    }

}
module.exports = WaitPage;