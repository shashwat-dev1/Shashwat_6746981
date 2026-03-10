import {test} from '@playwright/test';
test('Explicit wait', async ({page}) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.waitForSelector('//input[@id="username"]');
    const link = await page.locator('//input[@id="username"]');
    await link.fill("student");
    await link.waitFor({timeout:20000, state:'detached'});
})