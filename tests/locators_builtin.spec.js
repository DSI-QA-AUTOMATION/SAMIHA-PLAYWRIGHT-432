import {test, expect} from '@playwright/test'
test('locators_builtin', async({page})=> {

page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
const logo =await page.getByAltText('company-branding') //getbyalttext is used to locate an element especially image
await expect(logo).toBeVisible


await page.getByPlaceholder('Username').fill("Admin") //getbyplaceholder
await page.getByPlaceholder('Password').fill("admin123") 
await page.getByRole('button', {type: 'submit'}).click() // getbyrole is used to locate any type of attribute like link or button
await expect(await page.getByText('SmithTest 15 Snow')).toBeVisible
const name=await page.locator('//p[@class="oxd-userdropdown-name"]').textContent()   //xpath by class under p tag, text content function will give content of text for this locator
console.log(name)
                    




})