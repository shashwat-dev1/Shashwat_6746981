import {test} from '@playwright/test';

test('price_name_adv_xpath', async ({page}) => {   
    test.slow();
    await page.goto('https://www.amazon.com/');
    const search = page.locator('#twotabsearchtextbox');
    await search.fill('phones');
    await search.press('Enter');
    const products = page.locator('//h2[@class="a-size-medium a-spacing-none a-color-base a-text-normal"]/child::span | //div[@data-component-type="s-search-result"]//span[@class="a-price-whole"]');
    Array.from(await products.allInnerTexts()).forEach(text => console.log(text));
})