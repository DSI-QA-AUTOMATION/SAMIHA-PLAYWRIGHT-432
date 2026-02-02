import { test } from '@playwright/test';
import { TextBoxPage } from '../../pages/TextBoxPage';
import data from '../../test-data/users.json';

test('TextBox Basic Test', async ({ page }) => {      //get browser

  const textBox = new TextBoxPage(page);             //passes browser

  await textBox.openTextBox();                       

  await textBox.fillForm(
    data.textBoxUser.name,
    data.textBoxUser.email,                         //get data fro json
    data.textBoxUser.current,
    data.textBoxUser.permanent
  );

  await textBox.submit();

  await textBox.verifyOutput(
    data.textBoxUser.name,
    data.textBoxUser.email
  );
});
