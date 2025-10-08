import {test, expect} from '@playwright/test'

test('assertions', async({page})=> {
//open app url
await page.goto('https://demo.nopcommerce.com/jewelry');
const options = await page.locator('select[name="products-pagesize"] option')  //locate how mny elements in dropdown-Display
await expect(options).toHaveCount(3)


})