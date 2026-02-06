import { test, expect } from '@playwright/test'

// See here how to get started:
// https://playwright.dev/docs/intro
test('visits the app and shows Ruby Poole portfolio', async ({ page }) => {
  await page.goto('/')
  
  // Check for Ruby Poole branding in navbar
  await expect(page.locator('text=Ruby Poole')).toBeVisible()
})

test('hero section displays key information', async ({ page }) => {
  await page.goto('/')
  
  // Check for hero content
  await expect(page.locator('text=Your Dream Home Awaits')).toBeVisible()
  await expect(page.locator('text=Contact the Team')).toBeVisible()
})

test('stats section shows sales metrics', async ({ page }) => {
  await page.goto('/')
  
  // Check for stats
  await expect(page.locator('text=160')).toBeVisible() // Sales last 12 months
  await expect(page.locator('text=1,274+')).toBeVisible() // Total sales
})

test('navigation links work', async ({ page }) => {
  await page.goto('/')
  
  // Check navigation is present
  await expect(page.locator('nav a[href="#home"]')).toBeVisible()
  await expect(page.locator('nav a[href="#contact"]')).toBeVisible()
})
