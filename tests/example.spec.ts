import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://eshop.vodafone.com.eg/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/ڤودافون مصر | تسوق أونلاين/);
//   await page.click("onetrust-close-btn-container");
//   await page.click("onetrust-close-btn-container");
//   await page.click("userProfileMenu");
//   await page.fill("userNameDiv","01154424999");
// });

test('insert user', async ({ page }) => {
  await page.goto('https://eshop.vodafone.com.eg/en/');
  // await page.goto('https://eshop.vodafone.com.eg/ar/');
  await page.getByLabel('إغلاق').click();
  await page.locator('#userProfileMenu').getByRole('button').click();
  await page.getByText('Hello! Managing your line has').click();
  // await page.getByPlaceholder('Ex: 01X XXXXXXXXXX').click();
  // await page.locator('username').getByRole('button').fill('01154424999');
  await page.getByPlaceholder('Ex: 01X XXXXXXXXXX').fill('01023514484');
  await page.getByLabel('Password').fill('158962347890a@A');
  // await page.getByLabel('Password').click();
  // await page.locator('button').click();
  // await page.locator('button').click();
  // await page.getByLabel('Password').fill('Test@1234');
  await page.getByLabel('Password').press('Control+x');
  // await page.fill("username","01154424999");

  await page.getByRole('button', { name: 'Go to my account' }).click();
  // await page.getByLabel('Password').click();
  // await page.getByRole('button', { name: 'مرحباً, usertest' }).click();
  await expect(page.getByRole('button', { name: 'مرحباً, usertest' })).toHaveText(' مرحباً, usertest');


});
// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
