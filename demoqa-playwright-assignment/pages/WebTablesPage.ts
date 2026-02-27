import { expect, Page } from '@playwright/test';
import { BasePage } from './base/BasePage';

export class WebTablesPage extends BasePage {                           //WebTablesPage will use BasePage's features
// Locators
addBtn;
firstNameInput;
lastNameInput;
emailInput;
ageInput;
salaryInput;
departmentInput;
submitBtn;

tableRows;


constructor(page:Page){
super(page);

this.addBtn=this.page.locator('#addNewRecordButton');
this.firstNameInput=this.page.locator('#firstName');
this.lastNameInput=this.page.locator('#lastName');
this.emailInput=this.page.locator('#userEmail');
this.ageInput=this.page.locator('#age');
this.salaryInput=this.page.locator('#salary');
this.departmentInput=this.page.locator('#department');
this.submitBtn=this.page.locator('#submit');
this.tableRows = this.page.locator('.rt-tbody .rt-tr-group');
                                                                //whole table is rt-tbody, //Cierra //Alden ,each line is rt-tr-group
}

//Open page
async openWebTables(){
await this.open('https://demoqa.com/webtables');

}

//Click add button
async addButton(){
await this.addBtn.click();

}
// Fill form
async fillForm(firstName: string, lastName: string, email: string,
    age: string, salary: string, department: string) {
await this.firstNameInput.fill(firstName)
await this.lastNameInput.fill(lastName)
await this.emailInput.fill(email)
await this.ageInput.fill(age)
await this.salaryInput.fill(salary)
await this.departmentInput.fill(department)

 }

//Submit form
async submitForm(){
await this.submitBtn.click();    
}

// Verify record added in a row of the table
async verifyRecordAdded(name: string) {

    await expect(this.tableRows).toContainText(name);

  }




  
}


                 