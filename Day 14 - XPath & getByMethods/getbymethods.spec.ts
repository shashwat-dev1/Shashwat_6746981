//getby methods
//? 1. getbyText : Finds an element by its text content
//todo 2. getbyAltText : Finds an image by its alt text
//! 3. getbyTestId : Finds an element by its data-testid attribute
//? 4. getbyPlaceholder : Finds an input element by its placeholder text
//todo 5. getbyTitle : Finds an element by its title attribute
//! 6. getbyRole : Finds an element by its ARIA role
//? 7. getbyLabel : Finds an element by its label


import { test } from "@playwright/test";

test("getby methods", async ({ page }) => {
    await page.goto("https://practicetestautomation.com/practice-test-login/");
    // await page.getByLabel("User").fill("student");
    await page.getByRole("textbox",{name:"Username"}).fill("student");
    //use optional property exact:true to check the complete text, if not used it will check partial text
    // await page.getByLabel("Password",{exact:true}).fill("Password123");
    await page.getByRole("textbox",{name:"Password"}).fill("Password123");
    await page.getByRole("button", { name: "Submit" }).click();
    const isLoggedInVisible = await page.getByText("Logged In Successfully").isVisible();
    console.log("Is Logged In Successfully visible?", isLoggedInVisible);
})
