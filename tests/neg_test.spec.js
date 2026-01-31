import { test, expect } from '@playwright/test';

test('Neg_Fun_0001',async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('ape mallita uNa haedhila hitiye.');
  await expect(outputBox).toContainText('අපෙ මල්ලිට උණ හැදිල හිටියෙ.');
  
});

test('Neg_Fun_0002',async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('Aoyaa pickme ekak dhaemme naedhdha?');
  await expect(outputBox).toContainText('ඔයා pickme එකක් දැම්මෙ නැද්ද?');
  
});

test('Neg_Fun_0003',async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('Ado mata badaginiyi baqq.');
  await expect(outputBox).toContainText('අඩො මට බඩගිනියි බං.');
  
});

test('Neg_Fun_0004',async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('indhiyaavee vishaalathama antharjala seevaa sampadhakayaa Reliance Jio vee.');
  await expect(outputBox).toContainText('ඉන්දියාවේ විශාලතම අන්තර්ජල සේවා සම්පදකයා Reliance Jio වේ.');
  
});

test('Neg_Fun_0005',async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('oya viskothuva mage ');
  await expect(outputBox).toContainText('අඔය විස්කොතුව මගෙ ');
  
});

test('Neg_Fun_0006',async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('apimeetingekatayamu');
  await expect(outputBox).toContainText('අපිmeetingඑකටයමු');
  
});

test('Neg_Fun_007',async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('mee tikakata kalin privatebus ekak giyaa');
  await expect(outputBox).toContainText('මේ ටිකකට කලින් privatebus එකක් ගියා');
  
});

test('Neg_Fun_0008',async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('mama premio ekak gaththaa.');
  await expect(outputBox).toContainText('මම premio එකක් ගත්තා.');
  
});

test('Neg_Fun_0009',async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('oya github dhaagaththe kohomadha kiyannakoo?');
  await expect(outputBox).toContainText('ඔය github දාගත්තෙ කොහොමද කියන්නකෝ?');
  
});

test('Neg_Fun_0010',async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputBox = page.locator('textarea');
  const outputBox = page.locator('div.whitespace-pre-wrap.overflow-y-auto.flex-grow.bg-slate-50');

  await inputBox.fill('eyaa naqq hena simp kenek.');
  await expect(outputBox).toContainText('එයා නං හෙන simp කෙනෙක්.');
  
});