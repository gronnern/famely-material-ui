import { test, expect } from "@playwright/test";

test("Test lag liste fra hjemmeside med innlogging", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  const homeLoginButton = page.getByRole("button", { name: "Logg inn" });
  await homeLoginButton.click();

  const emailInput = page.getByLabel("E-post");
  const passwordInput = page.getByLabel("Passord");

  await emailInput.fill("test@example.com");
  await passwordInput.fill("password");

  expect(await emailInput.inputValue()).toBe("test@example.com");
  expect(await passwordInput.inputValue()).toBe("password");

  const loginButton = page.getByRole("button", { name: "Logg inn" });
  await loginButton.click();

  const heading = page.getByRole("heading", { name: "Familien Olsen" });
  await expect(heading).toBeVisible();

  const createListCard = page.getByText("Lag liste");
  await expect(createListCard).toBeVisible();

  // Velg "Gå til"-knappen i "Lag liste"-kortet
  const goToButton = page
    .locator("text=Lag liste")
    .locator("..")
    .locator("..")
    .locator('button:has-text("Gå til")');
  await goToButton.click();

  const input = page.getByLabel("Liste tittel");
  const addButton = page.getByRole("button", { name: "Legg til liste" });

  await input.fill("Handleliste");
  await addButton.click();

  const addItemButton = page.getByText("Legg til element");
  await addItemButton.click();

  const itemInput = page.getByLabel("Element", { exact: true });
  const addItemDialogButton = page.getByRole("button", {
    name: "Legg til",
  });

  await itemInput.fill("Melk");
  await addItemDialogButton.click();

  const newItem = page.getByText("Melk");
  await expect(newItem).toBeVisible();
});
