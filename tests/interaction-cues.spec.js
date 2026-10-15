import { test, expect } from "@playwright/test";

test("señales de interacción y movimiento reducido", async ({ page }) => {
  await page.goto("/recursos/");
  const link = page.locator(".library-entry-action a").first();
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await link.hover();
  await expect(link).toHaveCSS("transform", "matrix(1, 0, 0, 1, 3, 0)");
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(link).toHaveCSS("transform", "none");
  expect(
    await link.evaluate((node) => parseFloat(getComputedStyle(node).transitionDuration)),
  ).toBeLessThanOrEqual(0.00001);
  await page.setViewportSize({ width: 390, height: 844 });
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
});
