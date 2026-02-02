//const {test, expect} = require('@playwright/test') 
import {test, expect} from '@playwright/test'

test('Locators', async({page})=> {

    await page.goto('https://demoblaze.com/');
    //await page.click('locator');

    //click on login button - property
    await page.locator('id=login2').click();  //by id(property)
    //await page.click('id=login2');

    //provide username using css
    //await page.lvv bnmnjgdgffdgffvbbbbbb tyt     ocator('#loginusername').fill("samiha"); //use # for css id is loginusernaame for username field
    await page.fill('#loginusername','samiha') //use # for css id is loginusernaame for username field
   //await page.type('#loginusername') //use # for css id is loginusernaame for username field

   //provide password using css
   await page.fill("input[id='loginpassword']" , 'password')

   //click login using xpath
   await page.click("//*[@id='logInModal']/div/div/div[3]/button[2]");

   //verify logout link presence
   const logoutlink = await page.locator("//*[@id='logout2']")
   await expect(logoutlink).toBeVisible(); // assert presence
   await page.close();

   //locate multiple elements
   const element= await page.$$(locator)
   
})