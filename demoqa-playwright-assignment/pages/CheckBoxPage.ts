import { expect, Page } from '@playwright/test';
import { BasePage } from './base/BasePage';

export class CheckBoxPage extends BasePage {

  constructor(page: Page) {
    super(page);
  }

  // Locators
  expandAllBtn = this.page.locator('.rct-option-expand-all');
  homeCheckbox = this.page.locator('.rct-node-parent > .rct-text .rct-checkbox');
  resultText = this.page.locator('#result');

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
    await expect(this.resultText).toContainText(expected);
  }
}