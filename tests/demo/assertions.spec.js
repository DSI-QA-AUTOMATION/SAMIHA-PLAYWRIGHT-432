import {test, expect} from '@playwright/test'

test('assertions', async({page})=> {
//open app url
await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2F');
await expect(page).toHaveURL('https://demo.nopcommerce.com/register?returnUrl=%2F');
await expect(page).toHaveTitle('nopCommerce demo store. Register');
const logo = await page.locator('.header-logo')  //locate element by class with .
await expect(logo).toBeVisible()                 //pass element in function to check if its is visible
const searchstore = await page.locator('#small-searchterms') //locate element(id) by css with #
await expect(searchstore).toBeEnabled()                      //check if search box is enabled
const gender = await page.locator('#gender-female') //locate element(id) by css with #
gender.click()
await expect(gender).toBeChecked()                  //if radio button is checked
const newslettercheck = await page.locator('#Newsletter') //locate element(id) by css with #
//newslettercheck.click()
await expect(newslettercheck).toBeChecked()
const register = await page.locator('#register-button') //locate id by attribute, for example register button has multiple attributes like type,id,class etc
await expect(register).toHaveAttribute('type', 'submit') //submit button is type attribute
const header = await page.locator('.page-title h1')      //header Register is undder h1 tag, locaaate by class with .
await expect(header).toHaveText('Register')
await expect(header).toContainText('Reg')                //check partial text
const emailInput = await page.locator('#Email')            
emailInput.fill('test@demo.com')
await expect(emailInput).toHaveValue('test@demo.com')    //check value for input box
})