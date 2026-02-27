import { Locator,expect, Page } from '@playwright/test';
import { BasePage } from './base/BasePage';

export class ButtonsPage extends BasePage{


// ✅ Locators
readonly doubleClickBtn: Locator;
readonly rightClickBtn: Locator;
readonly clickMeBtn: Locator;

readonly doubleClickMsg: Locator;
readonly rightClickMsg: Locator;
readonly clickMeMsg: Locator;

constructor(page: Page) {
  super(page);

  // Buttons
  this.doubleClickBtn = page.locator('#doubleClickBtn');
  this.rightClickBtn = page.locator('#rightClickBtn');

  // Dynamic Click button - use text locator because ID changes
  this.clickMeBtn = page.locator('text="Click Me"');

 // Messages after Click
 this.doubleClickMsg = page.locator('#doubleClickMessage');
 this.rightClickMsg = page.locator('#rightClickMessage');
 this.clickMeMsg = page.locator('#dynamicClickMessage');
}


// Open Buttons page
async openButtons() {
await this.open('https://demoqa.com/buttons');
  }


  // Actions
  async doubleClickButton() {
    await this.doubleClickBtn.dblclick();
  }

  async rightClickButton() {
    await this.rightClickBtn.click({ button: 'right' });
  }

  async clickMeButton() {
    await this.clickMeBtn.click();
  }

  // Verifications
  async verifyDoubleClickMsg(expected: string) {
    await expect(this.doubleClickMsg).toHaveText(expected);
  }

  async verifyRightClickMsg(expected: string) {
    await expect(this.rightClickMsg).toHaveText(expected);
  }

  async verifyClickMeMsg(expected: string) {
    await expect(this.clickMeMsg).toHaveText(expected);
  }
}




