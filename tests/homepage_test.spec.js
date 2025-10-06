const {test, expect} = require('@playwright/test') //include all playwright node modules) // we need test(create test) and expect module(assertion)

test('Home page' , async({page}) => {
    await page.goto('https://demoblaze.com/');    //js anonymous function       // test block, page instance created for each test ,async,await to avoid timeout--await to wait before page loads
    //await expect(page).toHaveTitle('STORE')
    const pageTitle = await page.title();
    console.log('page title is',pageTitle);
    await expect(page).toHaveTitle('STORE');
    const pageURL=page.url(); 
    console.log('page url is:',pageURL);      //capture url from the webpage
    await expect(page).toHaveURL('https://demoblaze.com/') ;   
    await page.close();                          //validation of title to have STORE with expect
   } )                                            