import { test, expect } from '@playwright/test';

test('Ooredoo shop - iPhone 16e 24 months installment flow', async ({ page }) => {
  // 1. Navigate to https://shop.ooredoo.om/
  await page.goto('https://shop.ooredoo.om/');

  // Optional: Pause for debugging
  // await page.pause();

  // 2. Click on 'Devices' > 'Smartphones & Tablets'
  await page.waitForSelector('text=Devices');
  await page.getByText('Devices', { exact: true }).first().click();

  await page.waitForSelector('text=Smartphones & Tablets');
  await page.getByRole('link', { name: /Smartphones & Tablets/i }).click();

  // 3. Verify the iphone-16e is in the list present
  await page.waitForSelector('text=iPhone 16e');
  await expect(page.getByRole('link', { name: /iPhone 16e/i })).toBeVisible();

  // 4. Click the iphone-16e
  await page.getByRole('link', { name: /iPhone 16e/i }).click();

  // 5. Select the Internal Storage '128GB'
  await page.waitForSelector('text=128 GB');
  await page.getByRole('link', { name: /128 GB/i }).click();

  // 6. Choose Payment Method as 24 Months installment
  await page.waitForSelector('text=24 months instalment');
  await page.getByRole('link', { name: /24 months instalment/i }).click();

  // 7. Check the device installment price is OMR 11.419 / month
  await page.waitForSelector('text=OMR 11.419 / month');
  const price = await page.locator('text=OMR 11.419 / month').first();
  await expect(price).toBeVisible();
});
