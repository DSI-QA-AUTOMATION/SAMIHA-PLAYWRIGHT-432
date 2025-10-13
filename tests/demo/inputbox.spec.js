import {test, expect} from '@playwright/test'

test('input box', async({page})=> {

await page.goto('https://demoqa.com/automation-practice-form')

//input box

await expect(await page.locator("//input[@id='firstName']")).toBeVisible()
await expect(await page.locator("//input[@id='firstName']")).toBeEmpty() //fail if input field is filled, pass if its empty
await expect(await page.locator("//input[@id='firstName']")).toBeEditable() //whether input field is editable
await expect(await page.locator("//input[@id='firstName']")).toBeEnabled() //whether input field is enabled or not



await page.locator("//input[@id='firstName']").fill("John")
await expect(await page.locator("//input[@id='userEmail']")).toBeVisible()
await page.locator("//input[@id='userEmail']").fill("john@test.com")


await page.waitForTimeout(5000); //pausing code









})