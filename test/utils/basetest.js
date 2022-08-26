const base = require("@playwright/test")
const ButtonPage = require("../pageobjects/buttonpage")
const InputPage = require("../pageobjects/inputpage")
const DropDownPage = require("../pageobjects/dropdownpage")
const FramePage = require("../pageobjects/framepage")
const AlertPage = require("../pageobjects/alertpage")
const WindowsPage = require("../pageobjects/windowspage")
const ElementsPage = require("../pageobjects/elementspage")
const WaitPage = require("../pageobjects/waitpage")
const ShadowDomPage = require("../pageobjects/shadowdompage")
const RadioAndCheckboxPage = require("../pageobjects/radioandcheckboxpage")
const FormPage = require("../pageobjects/formpage")
const DragAndDropPage = require("../pageobjects/draganddroppage")
const MultiSelectPage = require("../pageobjects/multiselectpage")

const test = base.test.extend({
    buttonPage: async ({ page }, use) => {
        await use(new ButtonPage(page))
    },
    inputPage: async ({ page }, use) => {
        await use(new InputPage(page))
    },
    dropdownPage: async ({ page }, use) => {
        await use(new DropDownPage(page))
    },
    framePage: async ({ page }, use) => {
        await use(new FramePage(page))
    },
    alertPage: async ({ page }, use) => {
        await use(new AlertPage(page))
    },
    windowsPage:async({page},use)=>{
        await use(new WindowsPage(page))
    },
    elementsPage:async({page},use)=>{
        await use(new ElementsPage(page))
    },
    waitPage:async({page},use)=>{
        await use(new WaitPage(page))
    },
    shadowDomPage:async({page},use)=>{
        await use(new ShadowDomPage(page))
    },
    radioAndCheckboxPage:async({page},use)=>{
        await use(new RadioAndCheckboxPage(page))
    },
    formPage:async({page},use)=>{
        await use(new FormPage(page))
    },
    dragAndDropPage:async({page},use)=>{
        await use(new DragAndDropPage(page))
    },
    multiSelectPage:async({page},use)=>{
        await use(new MultiSelectPage(page))
    }
})

module.exports = test