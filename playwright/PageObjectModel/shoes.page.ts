class Shoes{
    searchBox : any
    products : any
    addToCartBtn : any
    cartBtn : any
    quantityDropdown : any
    removeBtn : any
    homeLogo: any

    constructor(page) {
        this.searchBox = page.getByPlaceholder('Search for Products, Brands and More').first()
        this.products = page.locator('a.CIaYa1')
        this.addToCartBtn = page.getByText('Add to cart')
        this.cartBtn = page.getByText('Cart')
        this.quantityDropdown = page.locator('select')
        this.removeBtn = page.getByText('Remove')
        this.homeLogo = page.locator('img[title="Flipkart"]')
    }

    async searchItem(item: string){
        await this.searchBox.fill(item)
    }
    async selectProduct(index:number){
        // const pagePromise = this.page.waitForEvent('popup')
        await this.products.nth(index).click()
        // const newPage = await pagePromise()
        // await newPage.waitForLoadState()
        // this.page = newPage
    }
    async selectSize(size: string) {
    await this.page.locator('div').filter({ hasText: size }).first().click()
}
    async addToCart() {
        await this.addToCartBtn.click()
    }

    async openCart() {
        await this.cartBtn.click()
    }

    async changeQuantity() {
        await this.quantityDropdown.selectOption('2')
    }

    async removeItem() {
        await this.removeBtn.click()
        await this.page.getByText('Remove').last().click()
    }

    async goHome() {
        await this.homeLogo.click()
    }
} 
export default Shoes