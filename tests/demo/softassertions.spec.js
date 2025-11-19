import {test, expect} from '@playwright/test'
test('softassertions', async({page})=> {


await page.goto('https://demoblaze.com/index.html');

//hard assertions - if one assertion fails, rest of the commands will not execute and the test will get terminatedd
/*await expect(page).toHaveTitle('STORE123')
await expect(page).toHaveURL('https://demoblaze.com/index.html')
await expect(page.locator('.navbar-brand')).toBeVisible()*/

//soft aassertions- if one assertion fails, rest of the command will stil execute
/*await expect.soft(page).toHaveTitle('STORE123')
await expect.soft(page).toHaveURL('https://demoblaze.com/index.html')
await expect.soft(page.locator('.navbar-brand')).toBeVisible()*/

await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2F')

await expect.soft(page).toHaveTitle('nopCommerce demo store. Registers');
const emailInput = await page.locator('#Email')            
emailInput.fill('test@demo.com')
await expect.soft(emailInput).toHaveValue('test@demo.com')




})
