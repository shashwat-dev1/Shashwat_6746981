import {test} from '@playwright/test'
//! Handling all Dialog at once

test('test name', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    page.on("dialog",dialog=>{
        dialog.accept("Sarthak");
    })
    await page.getByRole("button",{name:"Simple Alert"}).click();
    await page.getByRole("button",{name:"Confirmation Alert"}).click();
    await page.getByRole("button",{name:"Prompt Alert"}).click();
    await page.pause();
});



//! Handling all Dialog at once with condition

test.only('hello', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    page.on("dialog",async d=>{
        if(d.type()=="alert" || d.type()=="confirm"){
            await d.accept();
        }
        else if(d.type()=="prompt" && d.defaultValue()=="Harry Potter"){
            await d.accept("Shashwat");
        }
        else{
            await d.dismiss();
        }
    })
    await page.getByRole("button",{name:"Simple Alert"}).click();
    await page.getByRole("button",{name:"Confirmation Alert"}).click();
    await page.getByRole("button",{name:"Prompt Alert"}).click();
    await page.waitForTimeout(12000)
});


//! Handling each Dialog seperately
test("Alerts",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    page.once('dialog',async dialog=>{
        await dialog.accept();
    })
    await page.getByRole("button",{name:"Simple Alert"}).click();
    page.once('dialog',async dialog=>{
        await dialog.accept();
    })
    await page.getByRole("button",{name:"Confirmation Alert"}).click();
    page.once('dialog',async dialog=>{
        await dialog.accept("Shashwat");
    })
    await page.getByRole("button",{name:"Prompt Alert"}).click();
    await page.pause();
    await page.waitForTimeout(12000);
    

})

test("alerts",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    page.on('dialog', dialog => dialog.accept("Shashwat"))
    await page.locator('#alertBtn').click()
    // page.on('dialog', dialog => dialog.accept())
    await page.locator('#confirmBtn').click()
    // page.once('dialog', dialog => dialog.accept("Shashwat"))
    await page.locator('#promptBtn').click()
    // page.on('dialog', dialog => dialog.accept())

})