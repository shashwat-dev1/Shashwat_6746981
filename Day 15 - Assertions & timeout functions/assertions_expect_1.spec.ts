import {test,expect} from '@playwright/test';
test.use({
  actionTimeout: 10000
});

//! toBeVisible
test('Assetions 1',async({page})=>{
    page.setDefaultTimeout(15000)
await page.goto('https://www.amazon.in/');
const input=await page.locator('//input[@id="twotabsearchtextbox"]')
await expect(input).toBeVisible();
await input.fill("Shoes")

})

//!To have Screenshot


test('Assertion 2', async ({ page }) => {
  await page.goto('https://practicetestautomation.com');
    // await page.screenshot({ path: 'homepage.png'});
  await expect(page).toHaveScreenshot('homepage.png');
});

//! toContain
test ('Assetions 3',async({page})=>{
await page.goto('https://www.amazon.in/');
const title=await page.title();
expect(title).toContain("Online Shopping")
})





//! toContainText
test('Assetions 4',async({page})=>{
await page.goto('https://www.amazon.in/');
const listItem=await page.locator('//ul[@class="nav-ul"]/li')

 await expect(listItem).toContainText(["Sell","Bestsellers"])

})


//! Negating Matchers
test('Assetions 5',async({page})=>{
await page.goto('https://www.amazon.in/');
console.log( await page.title());

// console.log(title);

//await expect(title).not.toContain("Online Shopping")
})