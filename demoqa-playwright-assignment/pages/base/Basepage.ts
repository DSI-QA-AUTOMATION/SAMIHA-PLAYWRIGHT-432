import { Page } from '@playwright/test';

export class BasePage {            
  protected page: Page;

  constructor(page: Page) {       //page is browser window
    this.page = page;             //Save the browser inside the constructor.
  }

  async open(url: string) {       //function called open takes url string
    await this.page.goto(url);
  }
}