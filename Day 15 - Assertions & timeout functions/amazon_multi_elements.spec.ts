import {test} from '@playwright/test';
test('test1', async ({page}) => {
    await page.goto('https://www.amazon.in');
    await page.locator('//input[@id="twotabsearchtextbox"]').fill('shoes');
    await page.locator('//input[@id="nav-search-submit-button"]').click({timeout:15000});
    await page.getByText('Bacca Bucci').first().waitFor();
    //return all the shoes with class name and index
    let allShoes=await page.getByText('Bacca Bucci').all();
    console.log(allShoes);
});