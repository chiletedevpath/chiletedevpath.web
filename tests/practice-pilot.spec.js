import { test, expect } from '@playwright/test';

for (const prefix of ['', '/en']) {
  test(`piloto interactivo ${prefix || 'es'}`, async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(`${prefix}/recursos/`);
    const pilot = page.locator('[data-practice-pilot]');
    await pilot.locator('[name="columns"]').selectOption('3');
    await pilot.locator('[name="gap"]').fill('16');
    await pilot.locator('[data-grid-form] [type="submit"]').click();
    await expect(pilot.locator('[data-grid-output]')).toHaveCSS('gap', '16px');
    await expect(pilot.locator('[data-grid-status]')).toContainText(prefix ? 'Challenge' : 'reto');
    for (const topic of ['HTML', 'CSS', '<b>JavaScript</b>']) {
      await pilot.locator('[name="topic"]').fill(topic);
      await pilot.locator('[data-dom-form] [type="submit"]').click();
    }
    await expect(pilot.locator('[data-dom-output] li')).toHaveCount(3);
    await expect(pilot.locator('[data-dom-output] b')).toHaveCount(0);
    await pilot.locator('[data-dom-form] [type="submit"]').click();
    await expect(pilot.locator('[data-dom-output] li')).toHaveCount(3);
    await pilot.locator('[name="quantity"]').fill('4');
    await pilot.locator('[name="discount"]').fill('10');
    await pilot.locator('[data-formula-form] [type="submit"]').click();
    await expect(pilot.locator('[data-formula-output]')).toHaveText('90.00');
    await pilot.locator('[data-formula-form] [type="reset"]').click();
    await expect(pilot.locator('[data-formula-output]')).toHaveText('50.00');
    await pilot.locator('[data-dom-form] [type="reset"]').click();
    await expect(pilot.locator('[data-dom-output] li')).toHaveCount(0);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await pilot.screenshot({ path: `test-results/pilot-${prefix ? 'en' : 'es'}.png` });
  });
}
