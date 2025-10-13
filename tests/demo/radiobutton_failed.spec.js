import {test, expect} from '@playwright/test'

test('radio button', async({page})=> {

await page.goto('https://demoqa.com/automation-practice-form')

//radio button
await page.locator("//input[@id='gender-radio-1']").check()
await expect(await page.locator("//input[@id='gender-radio-1']")).toBeChecked()                //select checkbox with check
await page.locator("//input[@value='Female']").check()   
await expect(await page.locator("//input[@value='Female']")).toBeChecked()                     //check if checkbox is checked

//await expect(await page.locator("//input[@value='Male']")).isChecked()).toBefalsy()          // true if radio button is not checked as in we are expecting raddio button to be unchecked

await page.waitForTimeout(5000); //pausing code




})