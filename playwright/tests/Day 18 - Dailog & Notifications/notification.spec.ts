import { test, expect } from '@playwright/test';

test('Notification', async ({ browser }) => {
    let context = await browser.newContext({permissions:["notifications"]});
    const page = await context.newPage();
    await page.goto("https://demoapps.qspiders.com/ui/browserNot?sublist=0");
    await page.locator('#browNotButton').click()
    await page.evaluate(() => {
        return Notification.requestPermission()    })
    })
    
