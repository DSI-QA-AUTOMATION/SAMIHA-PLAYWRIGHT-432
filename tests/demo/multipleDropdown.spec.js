const{test, expect}=require('playwright/test')
test("Handle dropdowns", async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com')




//select multiple options from multiselect dropdown
await page.selectOption('#colors', ['Red', 'Blue', 'Green']); // css by id, put the options within arry
await page.waitForTimeout(5000);

})

