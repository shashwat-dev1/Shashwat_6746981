import {test} from '@playwright/test';

test('xpath', async ({page}) => {  
    await page.goto('https://www.amazon.in/');
    const a = await page.locator('//input[@id="twotabsearchtextbox"]');
    await a.fill('phones');
    await a.press('Enter');
    await page.locator('//div[@id="p_n_g-1003517064111/51258619031"]/descendant::a[@aria-label="Apply the filter Android 14 to narrow results"]/descendant::i').click();
    await page.waitForTimeout(5000);
    await page.screenshot({path: 'xpath.png'});
})