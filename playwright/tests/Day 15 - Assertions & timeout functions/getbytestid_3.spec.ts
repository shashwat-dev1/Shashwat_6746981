import {test} from '@playwright/test'
test('getbytestid_3', async({page})=>{
    page.goto('https://www.saucedemo.com')
    await page.getByTestId('username').fill('standard_user')
    await page.getByTestId('password').type('secret_sauce')
    console.log(await page.getByTestId('username').innerText());
    console.log(await page.getByTestId('username').textContent());
    console.log(await page.getByTestId('username').inputValue());
    console.log(await page.getByTestId('password').inputValue());
    console.log(await page.getByTestId('password').evaluate(el => (el as HTMLInputElement).value));
    await page.getByTestId('login-button').click()
})

