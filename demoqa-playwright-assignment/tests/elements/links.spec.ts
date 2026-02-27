import { test } from '@playwright/test';
import { LinksPage } from '../../pages/LinksPage';

test('Links Test', async ({ page }) => {

  const linksPage = new LinksPage(page);

  await linksPage.openLinks();
  await linksPage.simpleLinkClick();
  await linksPage.dynamicLinkClick();
  await linksPage.createdClick();
  await linksPage.verifyResponse('201');
  await linksPage.noContentClick();
  await linksPage.verifyResponse('204');


});