import { test } from '@playwright/test';
import { ButtonsPage } from '../../pages/ButtonsPage';

test('Buttons Page - Double, Right, Dynamic Clicks', async ({ page }) => {

  const buttons = new ButtonsPage(page);

  // 1️⃣ Open Buttons page
  await buttons.openButtons();

  // 2️⃣ Double Click button
  await buttons.doubleClickButton();
  await buttons.verifyDoubleClickMsg('You have done a double click');

  // 3️⃣ Right Click button
  await buttons.rightClickButton();
  await buttons.verifyRightClickMsg('You have done a right click');

  // 4️⃣ Click Me button (Dynamic Click)
  await buttons.clickMeButton();
  await buttons.verifyClickMeMsg('You have done a dynamic click');

});