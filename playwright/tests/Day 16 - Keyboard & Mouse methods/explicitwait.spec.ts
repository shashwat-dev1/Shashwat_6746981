import {test} from "@playwright/test";
test("Explicit Wait" ,async({page})=>{
    await page.goto("https://www.amazon.in");
    // const link =await page.getByTestId("nav_cs_3");
    const link = await page.locator('//a[@data-csa-c-content-id="nav_avod_desktop_topnav"]')
    await link.waitFor({timeout:20000, state:'detached'});
    await link.click();
    page.pause();
})


