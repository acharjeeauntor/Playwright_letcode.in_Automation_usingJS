class WindowsPage {
    openHomePageBtnID= "#home"
    multiPageBtnID="#multi"
    
    
    constructor(page) {
        this.page = page
    }

    async navigateToUrl(){
        await this.page.goto("/windows")
    }
    async clickOpenHomePageBtn() {
        await this.page.click(this.openHomePageBtnID)
    }
    async clickMultipleWindowsBtn() {
        await this.page.click(this.multiPageBtnID)
    }
}
module.exports = WindowsPage;