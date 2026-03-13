import {test} from "@playwright/test"
test("Frame", async({page})=>{
await page.goto("https://ui.vision/demo/webtest/frames/")
const frame = page.frames()
console.log(frame.length)
console.log(frame);

for(let i of frame){
    console.log(await i.title());
}


let frame1= page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"})
await frame1?.locator('//input[@name="mytext1"]').fill("Hello")
})

test("Nested frame",async({page})=>{
    await page.goto("https://ui.vision/demo/webtest/frames/");
    const frame3=await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3.html"});
    const iframe=await frame3?.frameLocator('//iframe')
    await iframe?.locator('//div[@class="AB7Lab Id5V1"]').first().click();
})

