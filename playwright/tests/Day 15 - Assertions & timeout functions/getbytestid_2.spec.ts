import {test} from '@playwright/test'
test('getbytestid_2', async({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.getByLabel('Username').type('student')
    await page.getByLabel('Password').type("password123")
})