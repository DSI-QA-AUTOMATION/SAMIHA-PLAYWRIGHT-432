import { test } from '@playwright/test';
import { WebTablesPage } from '../../pages/WebTablesPage';

test('Web Tables - Add User', async ({ page }) => {

    const WebTable = new WebTablesPage(page);

    await WebTable.openWebTables();
    await WebTable.addButton();
    await WebTable.fillForm(

        
    'John',
    'K',
    'john@test.com',
    '30',
    '5000',
    'QA'

    );

    await WebTable.submitForm();
    await WebTable.verifyRecordAdded('John');


})