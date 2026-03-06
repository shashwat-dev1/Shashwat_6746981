import {test} from "@playwright/test";

test("contains_method",async({page})=>{
    await page.goto("https://www.amazon.com/")
    await page.locator("//span[contains(text(), 'Mon') and contains(@id, 'WVCRIAFWG')]")
})

test("contains_method_2",async({page})=>{
    await page.goto("https://flipkart.com/")
    await page.locator("(//div[@class='RG5Slk'])[1]/parent::div/following-sibling::div/descendant::div[@class='hZ3P6w DeU9vF']")
}