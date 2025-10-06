const {test, expect} = require('@playwright/test')


test('My first test' , async({page}) => {
 await page.goto('https://google.com')                                             // test block, page instaance created for each test ,async,await to avoid timeout--aawait to wait before page loads
 await expect(page).toHaveTitle('Google')
} )                                           //js anonymous function