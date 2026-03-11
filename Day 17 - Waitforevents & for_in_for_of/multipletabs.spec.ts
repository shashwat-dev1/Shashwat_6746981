import {test} from "@playwright/test"
test("multiple tabs", async ({ browser }) => {
    const page= await browser.newPage();
    await page.goto("https://www.myntra.com/shoes?rawQuery=shoes")
    let page1=await browser.newPage()
    await page1.goto("https://www.amazon.in")
})
test('waitforevent', async ({ page }) => {
  await page.goto("https://www.flipkart.com/search?q=shoes")
  let [page2] = await Promise.all([
  page.waitForEvent('popup'),
  page.locator('//div[@class="bLCLBY nr15la"]').nth(1).click()
])
// console.log(page);
// console.log(page2);


const price = page2.locator('//div[@class="v1zwn21k v1zwn20 _1psv1zeb9 _1psv1ze0"]')
console.log(await price.textContent())
})

test('waitforevent2',async({browser})=>{
    const page = await browser.newPage();
    await page.goto("https://demoapps.qspiders.com/ui/browser?sublist=0")
    let[page2]=await Promise.all([
        page.waitForEvent('popup'),
        page.locator('//button[@class="mt-4 px-4 py-2 bg-orange-600 text-white font-semibold rounded hover:bg-orange-500"]').first().click()
    ])
    const name=page2.locator('//h1[@class="text-3xl font-bold mb-2"]')
    console.log(await name.textContent())
    const price=page2.locator('//p[@class="text-gray-800 font-semibold text-lg mb-3"]')
    console.log("At Price : " + await price.textContent());
})

test('waitforevent3',async({browser})=>{
    const page = await browser.newPage();
    await page.goto("https://demoapps.qspiders.com/ui/browser?sublist=1")
    let[page2]=await Promise.all([
        page.waitForEvent('popup'),
        page.locator('//button[@class="mt-4 px-4 py-2 bg-orange-600 text-white font-semibold rounded hover:bg-orange-500"]').first().click()
    ])
    const name=page2.locator('//h1[@class="text-3xl font-bold mb-2"]')
    console.log(await name.textContent())
    const price=page2.locator('//p[@class="text-gray-800 font-semibold text-lg mb-3"]')
    console.log("At Price : " + await price.textContent());
})

test.only('waitforeventdownload',async({browser})=>{
    const page = await browser.newPage()
    await page.goto("https://demoapps.qspiders.com/ui/download?sublist=0")
    await page.getByPlaceholder("Enter text here").fill("Hello World")
    await page.getByPlaceholder("Filename").fill("hello.txt")
    const [download] = await Promise.all([
        page.waitForEvent('download'),
        page.locator('#downloadButton').click()
    ])
    console.log("Download Path : " + await download.path())
})