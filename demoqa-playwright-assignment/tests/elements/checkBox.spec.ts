import { test } from '@playwright/test';
import { CheckBoxPage } from '../../pages/CheckBoxPage';

test('CheckBox - Select Home', async ({ page }) => {

  // Create CheckBox robot
  const checkbox = new CheckBoxPage(page);

  // Open Checkbox page
  await checkbox.openCheckBox();

  // Expand all folders
  await checkbox.expandAll();

  // Click Home checkbox
  await checkbox.selectHome();

  // Verify result message
  await checkbox.verifyResult('home');

});