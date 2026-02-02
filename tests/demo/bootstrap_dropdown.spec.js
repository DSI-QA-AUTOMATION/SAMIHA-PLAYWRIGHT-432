import {test, expect} from '@playwright/test'

test('bootstrap dropdown', async({page})=> {
//open app url
await page.goto('https://coreui.io/bootstrap/docs/forms/multi-select/');
await page.locator('.multiselect').click();    //class - multiselect

await page.waitForTimeout(5000);

})