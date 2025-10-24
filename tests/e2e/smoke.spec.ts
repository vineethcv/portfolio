import { test, expect } from "@playwright/test";

test("homepage renders and has nav", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("link", { name: "See Projects" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Read Writing" })).toBeVisible();
});

test("projects index loads", async ({ page }) => {
  await page.goto("/projects");
  await expect(page.getByRole("heading", { level: 1, name: /projects/i })).toBeVisible();
});

test("writing index loads", async ({ page }) => {
  await page.goto("/writing");
  await expect(page.getByRole("heading", { level: 1, name: /writing/i })).toBeVisible();
});

// Optional: 404 works (adjust if you have a custom 404 page)
test("unknown route returns 404 page", async ({ page }) => {
  const res = await page.goto("/definitely-not-a-real-page");
  expect(res?.status()).toBe(404);
});