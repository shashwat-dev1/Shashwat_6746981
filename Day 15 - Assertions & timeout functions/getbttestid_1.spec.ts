import {test} from '@playwright/test'
test('getbytestid', async({page})=>{
    page.goto('https://www.saucedemo.com')
    await page.getByTestId('username').fill('standard_user')
    await page.getByTestId('password').type('secret_sauce')
    await page.getByTestId('login-button').click()
})