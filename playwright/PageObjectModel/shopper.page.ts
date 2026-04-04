class ShopperPage {
    loginBtn: any
    emailTF: string
    passwordTF: string
    loginSubmit: any

    searchBox: any
    addToCartBtn: any
    cartIcon: any
    increaseQty: any
    removeBtn: any
    logoutBtn: any

    constructor(page) {

        this.loginBtn = page.locator('#loginBtn')
        this.emailTF = page.locator('#Email')
        this.passwordTF = page.locator('#Password')
        this.loginSubmit = page.locator('#Login')
        this.searchBox = page.locator('#search')
        this.addToCartBtn = page.locator('button:has-text("Add To Cart")')
        this.cartIcon = page.locator('#cartIcon')
        this.increaseQty = page.locator('.increase-qty')
        this.removeBtn = page.locator('button:has-text("Remove")')
        this.logoutBtn = page.locator('#logout')
    }

    async login(username: string, password: string) {

        await this.loginBtn.click()
        await this.emailTF.fill(username)
        await this.passwordTF.fill(password)
        await this.loginSubmit.click()
    }

    async searchItem(item: string, page) {

        await this.searchBox.fill(item)
        // await this.page.locator('button:has(svg)').first().click()
        a

    }

    async addFirstItem() {

        await this.addToCartBtn.first().click()
    }

    async openCart() {

        await this.cartIcon.click()
    }

    async removeItems() {

        const count = await this.removeBtn.count()

        for (let i = 0; i < count; i++) {

            await this.removeBtn.first().click()

        }
    }

    async increaseQuantityLoop() {

        const count = await this.increaseQty.count()

        for (let i = 0; i < count; i++) {

            for (let j = 0; j <= i; j++) {

                await this.increaseQty.nth(i).click()

            }
        }
    }

    async logout() {

        await this.logoutBtn.click()
    }

}
export default ShopperPage