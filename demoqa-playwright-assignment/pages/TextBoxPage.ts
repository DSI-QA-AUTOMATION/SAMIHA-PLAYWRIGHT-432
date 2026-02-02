import { expect, Page } from '@playwright/test';  // Page : the browser tab

import { BasePage } from './base/BasePage';      

export class TextBoxPage extends BasePage {        //use BasePage

  constructor(page: Page) {                        //page = Chrome tab
    super(page);                                   //give this page to BasePage i.e both TextBoxPage and BasePage wll use the browser            
   
    
    
  }

  userName = this.page.locator('#userName');
  userEmail = this.page.locator('#userEmail');
  currentAddress = this.page.locator('#currentAddress');
  permanentAddress = this.page.locator('#permanentAddress');
  submitBtn = this.page.locator('#submit');

  async openTextBox() {
    await this.open('https://demoqa.com/text-box');
  }

  async fillForm(name: string, email: string, current: string, permanent: string) {
    await this.userName.fill(name);
    await this.userEmail.fill(email);
    await this.currentAddress.fill(current);
    await this.permanentAddress.fill(permanent);
  }

  async submit() {
    await this.submitBtn.click();
  }

  async verifyOutput(name: string, email: string) {
    await expect(this.page.locator('#name')).toContainText(name);
    await expect(this.page.locator('#email')).toContainText(email);
  }
}
