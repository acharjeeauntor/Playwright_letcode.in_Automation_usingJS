const test = require("../../utils/basetest")
const { expect } = require("@playwright/test")
const dropDownData = require("../../testdata/dropdowndata.json")

test.describe(`Test Dropdown`, async () => {
    test.beforeEach(async ({ dropdownPage }) => {
        await dropdownPage.navigateToUrl()
    })

    test(`@Functional Select the apple using visible text`, async ({ dropdownPage }) => {
        await dropdownPage.selectApple(dropDownData.FruitName)
        expect(await dropdownPage.getFruitSelectionLocator()).toContainText(dropDownData.FruitName)
    })
    test(`@Functional Select your super hero's`, async ({ dropdownPage }) => {
        await dropdownPage.selectSuperHero(dropDownData.HeroValue)
        expect(await dropdownPage.getHeroSelectionLocator()).toContainText(dropDownData.superHero)
     
    })
    test(`@Functional Select the last programming language and print all the options`, async ({ dropdownPage }) => {
        await dropdownPage.printAllLangOptions()
        expect(await dropdownPage.getLanguageSelectionLocator()).toContainText(dropDownData.LastLanguage)
    })
    test(`@Functional Select India using value & print the selected value`, async ({ dropdownPage }) => {
     await dropdownPage.selectCountry(dropDownData.country)
     
    })
})