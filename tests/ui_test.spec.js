import { test, expect } from '@playwright/test';

test('PPos_UI_0001',async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('mata gedhara yanna oonee.');
  await expect(outputBox).toContainText('මට ගෙදර යන්න ඕනේ.');
  
});