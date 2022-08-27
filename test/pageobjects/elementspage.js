class ElementsPage{
    usernameSearchInputSelector= "[name='username']"
    userImageSelector= ".media img"
    userNameSelector=".media-content .title"
    userAddressSelector= ".media-content .subtitle"
    userSkillSelector= ".media-content span"
    repoLinkSelector=".content ol li a"
    
    constructor(page){
        this.page=page
    }

    async navigateToUrl() {
        await this.page.goto("/elements")
    }

    async enterGitUsername(name) {
        const ele =  this.page.locator(this.usernameSearchInputSelector)
        await ele.fill(name)
        await ele.press("Enter")

    }

    async getuserImageLocator() {
        await this.page.waitForSelector(this.userImageSelector)
        return this.page.locator(this.userImageSelector)
        
    }

    async getUserInfo() {
        const nameElement =  this.page.locator(this.userNameSelector)
        const AddressElement =  this.page.locator(this.userAddressSelector)
        const skillElement =  this.page.locator(this.userSkillSelector)
        console.log("Name: "+ await nameElement.textContent())
        console.log("Address: "+await AddressElement.textContent())
        console.log("Skill: "+await skillElement.textContent())
    }

    async getTotalRepos(){
        await this.page.waitForSelector(this.repoLinkSelector)
        const repos = await this.page.$$(this.repoLinkSelector)
         for await(const repo of repos){
             console.log(await repo.innerText())
        }
        console.log(repos.length)
        return repos.length
    }

}
module.exports = ElementsPage;