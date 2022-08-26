class DragAndDropPage {
sourceBoxID="#text"
targetBoxID="#droppable"
targetBoxTextSelector="#droppable p"

    constructor(page) {
        this.page = page
    }

    async navigateToUrl() {
        await this.page.goto("/dropable")
    }

    async dragAndDropBox() {
        await this.page.locator(this.sourceBoxID).waitFor()
        await this.page.locator(this.targetBoxID).waitFor()
        await this.page.dragAndDrop(this.sourceBoxID, this.targetBoxID);
    }

    async getTargetBoxText(){
         let result = await this.page.locator(this.targetBoxTextSelector).innerText()
         return result
    }
}

module.exports = DragAndDropPage;