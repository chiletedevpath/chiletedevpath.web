import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.route("https://challenges.cloudflare.com/**", route => route.abort());
});

for (const prefix of ["", "/en"]) {
  test(`tecnologias agrupadas y redes legibles ${prefix || "es"}`, async ({ page }) => {
    await page.goto(`${prefix}/ruta/`);
    await expect(page.locator('.route-tool-groups details')).toHaveCount(3);
    await expect(page.locator('.route-tool-list a')).toHaveCount(12);
    await page.locator('.route-tool-groups summary').nth(1).click();
    await expect(page.locator('.route-tool-groups details').nth(1)).toHaveAttribute('open', '');
    await page.locator('[data-theme-button]').click();
    const colors = await page.locator('.pie-redes svg').evaluateAll(icons => icons.map(icon => ({
      fill: getComputedStyle(icon).fill,
      color: getComputedStyle(icon.closest('a')).color,
    })));
    expect(colors).toHaveLength(5);
    for (const { fill, color } of colors) {
      expect(fill).toBe(color);
      expect(fill).not.toBe('rgb(0, 0, 0)');
    }
  });

  test(`recorrido de Excel con evidencia y movil ${prefix || "es"}`, async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 740 });
    await page.goto(`${prefix}/ruta/excel/`);
    await expect(page.locator("h1")).toBeVisible();
    await expect(page.locator('a[href$=".xlsx"]')).toHaveCount(12);
    await expect(page.locator(".learning-block-title")).toHaveCount(10);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await page.locator('[data-theme-button]').click();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await page.goto(`${prefix}/ruta/`);
    await expect(page.locator(`a[href="${prefix}/ruta/excel/"]`)).toBeVisible();
  });

  test(`maestro-detalle, teclado y filtros ${prefix || "es"}`, async ({ page }) => {
    await page.goto(`${prefix}/proyectos/`);
    const tabs = page.locator('[data-project-option]');
    await expect(tabs).toHaveCount(9);
    await tabs.first().focus();
    await page.keyboard.press("ArrowDown");
    await expect(tabs.nth(1)).toHaveAttribute("aria-selected", "true");
    await expect(page.locator('[data-project-panel]:visible')).toHaveCount(1);
    await page.locator('[data-project-search]').fill("zz-no-coincide");
    await expect(page.locator('[data-project-empty]')).toBeVisible();
    await page.locator('[data-project-search]').fill("");
    await page.locator('[data-project-filter="productividad"]').click();
    await expect(page.locator('[data-project-option]:visible')).toHaveCount(1);
  });

  test(`movil, tema y contenido sin animacion ${prefix || "es"}`, async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 740 });
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.goto(`${prefix}/`);
    await expect(page.locator("h1")).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await page.locator('[data-theme-button]').click();
    const theme = await page.locator("html").getAttribute("data-theme");
    await page.reload();
    await expect(page.locator("html")).toHaveAttribute("data-theme", theme);
    await page.locator('[data-menu-button]').click();
    await expect(page.locator('[data-main-menu]')).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(page.locator('[data-menu-button]')).toHaveAttribute("aria-expanded", "false");
  });
}

test("busqueda de rutas conserva ambas areas y muestra vacio", async ({ page }) => {
  await page.goto("/ruta/");
  await page.locator('#route-search').fill("Excel");
  await expect(page.locator('[data-route-search]:visible')).toHaveCount(1);
  await page.locator('#route-search').fill("zz-no-coincide");
  await expect(page.locator('.route-search-empty')).toBeVisible();
});

for (const prefix of ["", "/en"]) {
  test(`PWA real offline y fallback localizado ${prefix || "es"}`, async ({ page, context }) => {
    await page.goto(`${prefix}/recursos/`);
    await page.evaluate(async () => {
      const registration = await navigator.serviceWorker.ready;
      if (!navigator.serviceWorker.controller) await new Promise(resolve =>
        navigator.serviceWorker.addEventListener("controllerchange", resolve, { once: true }));
      return registration.scope;
    });
    await context.setOffline(true);
    await page.goto(`${prefix}/recursos/`);
    await expect(page.locator("html")).toHaveAttribute("lang", prefix ? "en" : "es");
    await expect(page.locator("h1")).toBeVisible();
    await page.goto(`${prefix}/no-precached-page/`);
    await expect(page.locator("html")).toHaveAttribute("lang", prefix ? "en" : "es");
    await expect(page.locator("h1")).toBeVisible();
    await context.setOffline(false);
  });
}
