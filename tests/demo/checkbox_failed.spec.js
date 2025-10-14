import {test, expect} from '@playwright/test'

test('checkbox', async({page})=> {

await page.goto('https://demoqa.com/automation-practice-form')

//check box- single
await page.locator("//input[@id='hobbies-checkbox-1' and @type='checkbox']").check()
await expect (await page.locator("//input[@id='hobbies-checkbox-1' and @type='checkbox']")).toBeChecked()
await expect (await page.locator("//input[@id='hobbies-checkbox-1' and @type='checkbox']").isChecked()).toBeTruthy()
await expect (await page.locator("//input[@id='hobbies-checkbox-2' and @type='checkbox']").isChecked()).toBeFalsy() // for unchecked checkbox, expecting its unchecked


//checkbox - multiple
const checkboxes=[ "//input[@id='hobbies-checkbox-1' and @type='checkbox']"  ,
                   "//input[@id='hobbies-checkbox-2' and @type='checkbox']"  


                ];                                        //array of locator of checkboxes


for(const locator of checkboxes)                         //initialize locator vaariable for arraay checkboxes
{

await page.locator(locator).check()                      //pass variable locator within func

}
await page.waitForTimeout(5000); //pausing code


//uncheck checkbox
for(const locator of checkboxes)                         
{
if(await page.locator(locator).isChecked())
await page.locator(locator).uncheckcheck()                      

}


await page.waitForTimeout(5000); //pausing code



})