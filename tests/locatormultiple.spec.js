import {test, expect} from '@playwright/test'

test('locatorsmultiple', async({page})=> {

    await page.goto('https://demoblaze.com/');
    const links = await page.$$('a'); //to return all links

    //for(const link of links)                        //each and evey link into links vriable

    //{

       //const linktext= await link.textContent();   //return text content/text value of link
       //console.log(linktext)


    //}
   page.waitForSelector=("//div[@id='tbodyid']//h4/a")
   const products =await page.$$("//div[@id='tbodyid']//h4/a")

   for(const product of products)                          //each and every product in product variable

    {

       const prodName= await product.textContent();     //return text content/text value of product
       console.log(prodName)

    }

})