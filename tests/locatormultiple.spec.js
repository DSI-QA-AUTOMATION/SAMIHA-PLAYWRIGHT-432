import {test, expect} from '@playwright/test'

test('locatorsmultiple', async({page})=> {

    await page.goto('https://demoblaze.com/');
    //const links = await page.$$('a'); //to return all links

    //for(const link of links)

    //{

      // const linktext= await link.textContent();   //return text content/text value of link
       //console.log(linktext)
    //}

 const products =await page.$$("//div[@id='tbodyid']//div//h4/a")

 for(const product of products)

    {

       const productName= await product.textContent();   //return text content/text value of link
       console.log(productName)
    }

})