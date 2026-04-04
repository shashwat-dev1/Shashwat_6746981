import {test} from "@playwright/test"
test("keyboardmethods",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1")
    await page.locator('//input[@id="name"]').press("S+h+a+s+h+w+a+t+Tab")
    await page.keyboard.insertText('shashwatjain@gmail.com')
    await page.keyboard.press('Control+a+Control+c')
    await page.keyboard.press('Tab+Control+v')
    await page.keyboard.press('Tab+Enter')
})