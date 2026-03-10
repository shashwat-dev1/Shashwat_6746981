import {test} from '@playwright/test'
//click
test('mouseaction' ,async ({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/button")
    await page.locator("#btn").click({button:"right",clickCount:2,force:true})
})
//hover
test('mouseaction2',async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/mouseHover?sublist=0")
    await page.locator('//img[@class="w-5 h-5 mt-5 ml-3 cursor-pointer "]').hover()
})
//mouse up dowm
test("mouseaction3",async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/clickHold?sublist=0")
    await page.locator('//div[@class="zoom-button "]').hover()
    await page.mouse.down()
    await page.mouse.up()
})

test('mouseaction4', async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/button/buttonDisabled?sublist=4")
    await page.locator('//input[@id="submit"]').dispatchEvent("click")
})

test('mouseaction5' ,async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2")
    await page.getByText('Mobile Charger').hover()
    await page.mouse.down()
    await page.getByText('Mobile Accessories').hover()
    await page.mouse.up()
})

test.only('mouseaction6', async({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui/dragDrop/dragToCorrect?sublist=2")
    await page.getByText("Mobile Charger").dragTo(page.getByText("Mobile Accessories"))
    await page.getByText("Laptop Charger").dragTo(page.getByText("Laptop Accessories"))
    await page.getByText("Mobile Cover").dragTo(page.getByText("Mobile Accessories"))
    await page.getByText("Laptop Cover").dragTo(page.getByText("Laptop Accessories"))
    
})