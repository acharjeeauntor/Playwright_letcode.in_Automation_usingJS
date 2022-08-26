const test = require("../../utils/basetest")
const { expect } = require("@playwright/test")

test.describe(`Test Drag and Drop`, async () => {
    test.beforeEach(async ({ dragAndDropPage }) => {
        await dragAndDropPage.navigateToUrl()
    })
    test(`@Functional Drag the source box with in the target box and Verify by Traget Box text`, async ({ dragAndDropPage }) => {
        await dragAndDropPage.dragAndDropBox()
        expect(await dragAndDropPage.getTargetBoxText()).toBe("Dropped!")
    })
})