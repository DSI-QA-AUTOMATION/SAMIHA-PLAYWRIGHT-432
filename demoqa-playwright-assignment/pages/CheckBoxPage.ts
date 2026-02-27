import { expect, Page } from '@playwright/test';
import { BasePage } from './base/BasePage';

export class CheckBoxPage extends BasePage {

  constructor(page: Page) {
    super(page);
  }

  // Locators
  expandAllBtn = this.page.locator('.rct-option-expand-all');
  //homeCheckbox = this.page.locator('.rct-node-parent > .rct-text .rct-checkbox'); 
  homeCheckbox = this.page.locator('li span.rct-checkbox').first();                //.rct-node-parent  → Home row
   
                                                                                     
                                                                                    //.rct-text  → text area
                                                                                    //.rct-checkbox → checkbox icon
  
  
  resultText = this.page.locator('#result');                                       //Look at result area, Check if it contains "home"
  

  // Open Page
  async openCheckBox() {
    await this.open('https://demoqa.com/checkbox');
  }

  // Expand All
  async expandAll() {
    await this.expandAllBtn.click();
  }

  // Select Home Checkbox
  async selectHome() {
    await this.homeCheckbox.click();
  }

  // Verify Result
  async verifyResult(expected: string) {
    await expect(this.resultText).toContainText(expected);                        //verify text contains home ;; website shows You have selected :home, so checking with text home
    
  }
}