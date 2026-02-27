import { test } from '@playwright/test';
import { RadioButtonPage } from '../../pages/RadioButtonPage';

test('Radio Button - Yes and Impressive', async ({ page }) => {

  const radio = new RadioButtonPage(page);

  // Open page
  await radio.openRadioButton();

  // Select Yes and verify
  await radio.selectYes();          //functions mentioned in RadioButtonPage.ts            
  await radio.verifyResult('Yes');

  // Select Impressive and verify
  await radio.selectImpressive();
  await radio.verifyResult('Impressive');

  //Verify No is disabled
  await radio.verifyNoDisabled();
});