// import { test } from '@playwright/test'

// test('waitfornavigation', async ({ page }) => {
//   await page.goto("https://www.flipkart.com/search?q=shoes")
//   const newPagePromise = page.waitForEvent('popup')
//   await page.getByRole('link').filter({ hasText: /^$/ }).nth(1).click()
//   const newPage = await newPagePromise
//   waitfortimeout: 15000
//   const price = newPage.locator('//div[@class="v1zwn21k v1zwn20 _1psv1zeb9 _1psv1ze0"]')
//   console.log(await price.textContent())
// })

import { test } from '@playwright/test'

test('waitfornavigation', async ({ page }) => {

  

  await page.goto("https://www.flipkart.com/search?q=shoes")
  await Promise.all([
    page.waitForNavigation(),
    await page.waitForTimeout(5000),
     page.locator('//div[@class="bLCLBY nr15la"]').nth(1).press('Enter')
    // page.waitForNavigation()
  ])
  
  
  // const price = page.locator('//div[@class="v1zwn21k v1zwn20 _1psv1zeb9 _1psv1ze0"]')
  // console.log(await price.textContent())

})