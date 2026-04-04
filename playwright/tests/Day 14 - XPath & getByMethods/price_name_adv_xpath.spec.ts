import { test } from '@playwright/test';

test('price name adv xpath', async ({ page }) => {
  test.slow();
  await page.goto('https://www.amazon.com/');
  const search = page.locator('#twotabsearchtextbox');
  await search.fill('phones');
  await search.press('Enter');
  const products = page.locator(
    '(//div[@data-component-type="s-search-result"]//img[@alt])[5] | (//div[@data-component-type="s-search-result"]//span[@class="a-price-whole"])[5]'
  );
  const count = await products.count();
  for (let i = 0; i < count; i++) {
    const el = products.nth(i);
    const alt = await el.getAttribute('alt');  
    if (alt) {
      console.log(alt);        
    } else {
      console.log(await el.innerText());
    }
  }
});