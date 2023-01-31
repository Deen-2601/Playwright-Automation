const {test, expect} = require('@playwright/test');

test('First Test', async ({page})=> {

   await page.goto('https://opensource-demo.orangehrmlive.com/')
   await expect(page).toHaveTitle('OrangeHRM')



})