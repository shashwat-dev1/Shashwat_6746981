import {test} from "@playwright/test"
test("MultiSelect", async ({ page }) => {
    await page.goto("https://demoapps.qspiders.com/ui/dropdown/multiSelect?sublist=1");
    await page.locator('#select-multiple-native').selectOption([{value:"Mens Cotton Jacket"},{value:"John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet"}]);
    await page.locator('//button[@class="bg-orange-500 p-2 text-white rounded w-[150px]"]').click();
})

test("custom",async({page})=>{
    await page.goto("https://www.myntra.com/shoes?rawQuery=shoes")
    await page.locator('//div[@class="sort-sortBy"]').hover()
    const loc=await page.locator('//label[@class="sort-label "]')
    const alllabel=await loc.all();
    for(let i of alllabel){
        const text=await i.textContent()
        console.log(text);
        if(text?.includes("Better ")){
            await i.click()
            break;
        }
    }
})

test.only('amazon', async ({page}) => {
    await page.goto('https://www.amazon.in');
    await page.locator('//input[@id="twotabsearchtextbox"]').fill('shoes');
    const allsuggestions=await page.locator('//div[@class="left-pane-results-container"]/div').all()
    for(let i in allsuggestions){
        const text=await allsuggestions[i].textContent()
        console.log(text);
        if(text?.includes("women")){
            await allsuggestions[i].click()
            break;
        }
    }

})