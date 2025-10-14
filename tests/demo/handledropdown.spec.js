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
const options =await page.$$('#country option')
console.log("no of options", options.length)             //print how maany options aare there in the array









await page.waitForTimeout(5000)


})