import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from './base/BasePage';

export class LinksPage extends BasePage{

//Locators
readonly simpleLink: Locator;
readonly dynamicLink: Locator;
readonly created: Locator;
readonly noContentLink: Locator;
readonly moved: Locator;
readonly response: Locator;
    

constructor (page:Page){
super(page);

this.simpleLink=page.locator('#simpleLink');
this.dynamicLink=page.locator('#dynamicLink');
this.created = page.locator('#created');
this.noContentLink = page.locator('#no-content');
this.moved = page.locator('#moved');
this.response = page.locator('#linkResponse');

  }

  //open page
  async openLinks(){
  await this.open("https://demoqa.com/links");
  }
  
  //click links
  async simpleLinkClick() {
  await this.simpleLink.click();
  }

  async dynamicLinkClick() {
  await this.dynamicLink.click();
     }
  
 async createdClick() {
 await this.created.click();
     }
      
 async noContentClick() {
 await this.noContentLink.click();
         }
  // Verify message
  async verifyResponse(text: string) {
    await expect(this.response).toContainText(text);
  } 
         


}



