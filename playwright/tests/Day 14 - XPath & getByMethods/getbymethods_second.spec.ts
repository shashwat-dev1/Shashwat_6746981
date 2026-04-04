import {test} from "@playwright/test";

test("second", async ({page})=>{
    await page.goto("https://demoapps.qspiders.com/ui?scenario=1");
    await page.getByPlaceholder("Enter your name").fill("Student");
    await page.getByPlaceholder("Enter Your Email").fill("shashwat@gmail.com");
    await page.getByPlaceholder("Enter your password").fill("Password123");
})