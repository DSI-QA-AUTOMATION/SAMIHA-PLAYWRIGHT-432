import { expect, Page } from '@playwright/test';
import { BasePage } from './base/BasePage';

export class RadioButtonPage extends BasePage {               //RadioButtonPage will use BasePage's features

  constructor(page: Page) {
    super(page);
  }

  // Locators
  yesRadio = this.page.locator('input#yesRadio');           
  impressiveRadio = this.page.locator('input#impressiveRadio');
  resultText = this.page.locator('.text-success');

  // Open Radio Button Page
  async openRadioButton() {
    await this.open('https://demoqa.com/radio-button');           //open radio button page
  }

  // Select Yes
  async selectYes() {
    await this.yesRadio.click({ force: true });                   //no matter what click the radiobutton
  }

  // Select Impressive
  async selectImpressive() {
    await this.impressiveRadio.click({ force: true });
  }

  //No Radio
  noRadio = this.page.locator('#noRadio');

   async verifyNoDisabled() {
  await expect(this.noRadio).toBeDisabled();
}

  // Verify Result
  async verifyResult(expected: string) {
    await expect(this.resultText).toContainText(expected);        //Does result show ‘Yes’ or ‘Impressive
  }
}
