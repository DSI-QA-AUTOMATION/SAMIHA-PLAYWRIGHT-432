import {test, expect} from '@playwright/test'

test('handle dropdowns', async({page})=> {
//open app url
await page.goto('https://testautomationpractice.blogspot.com/');

//multiple ways to select option from the dropdwon
//await page.locator("#country").selectOption({label:'Japan'})  //id by css with # , select option function, label for <Country>
//await page.locator("#country").selectOption('China')  
//await page.locator("#country").selectOption({value:'germany'}) // by value
//await page.locator("#country").selectOption({index:1}) // by serial no or index
//await page.selectOption("#country", 'India'); // by text


//Aassertions
//1)check no of options in dropdown -1
//const options =await page.locator('#country option')  //return all options for country locator
//await expect(options).toHaveCount(10);                //after capturing all options inside a variable check if the count is 10

//2)check no of options in dropdown -2
//const options =await page.$$('#country option')
//console.log("no of options", options.length)          //print how maany options are there in the array
//await expect(options.length).toBe(10)

//3)check presence of value in the dropdown-1
//const content=await page.locator('#country').textContent()
//await expect(content.includes('India')).toBeTruthy()
//await expect(content.includes('xyx')).toBeTruthy()     //negative case
//await expect(content.includes('xyx')).toBeFalsy()     

//3)check presence of value in the dropdown-2 using looping
//const options=await page.$$('#country.option')          //captured options
//let status=false                                        //status initially true

//for(const option of options)
//{

//console.log(await option.textContent())                 //capture text content from dropdown of options that is print all options in the dropdown
//let value=await option.textContent()
//if(value.includes('France'))
//{

//status=true;                                             //status will be set to true if valus is found
//break;

//}

//}

//expect(status).toBeTruthy()


//select option from ddropddown using loop
const options=await page.$$('#country.option')          
                                       

for(const option of options)
{

console.log(await option.textContent())                
let value=await option.textContent()                       //capture text content of the options
if(value.includes('France'))
{

await page.selectOption("#country", value)                                            
break;

}

}


await page.waitForTimeout(5000)


})