import { test, expect } from '@playwright/test';

test.describe('Notes App - System Tests', () => {

  test.beforeEach(async ({ request }) => {
    // Clear all notes before each test for isolation
    const response = await request.get('http://localhost:3001/notes');
    const notes = await response.json();
    for (const note of notes) {
      await request.delete(`http://localhost:3001/notes/${note.id}`);
    }
  });

  test('User can create a note', async ({ page }) => {
    await page.goto('/');

    await page.fill('[data-testid="note-title"]', 'My First Note');
    await page.fill('[data-testid="note-content"]', 'This is the content of my first note.');
    await page.click('[data-testid="add-note-btn"]');

    const noteTitle = page.locator('[data-testid="note-item"] h3').first();
    await expect(noteTitle).toHaveText('My First Note');
  });

  test('User can edit a note', async ({ page }) => {
    await page.goto('/');

    // Create a note first
    await page.fill('[data-testid="note-title"]', 'Note to Edit');
    await page.fill('[data-testid="note-content"]', 'Original content.');
    await page.click('[data-testid="add-note-btn"]');

    // Click edit
    await page.click('[data-testid="edit-note-btn"]');
    await page.fill('[data-testid="note-title"]', 'Edited Note');
    await page.fill('[data-testid="note-content"]', 'Updated content.');
    await page.click('[data-testid="save-note-btn"]');

    const noteTitle = page.locator('[data-testid="note-item"] h3').first();
    await expect(noteTitle).toHaveText('Edited Note');
  });

  test('User can delete a note', async ({ page }) => {
    await page.goto('/');

    // Create a note first
    await page.fill('[data-testid="note-title"]', 'Note to Delete');
    await page.fill('[data-testid="note-content"]', 'This will be deleted.');
    await page.click('[data-testid="add-note-btn"]');

    // Verify it exists
    const noteItem = page.locator('[data-testid="note-item"]');
    await expect(noteItem).toHaveCount(1);

    // Delete it
    await page.click('[data-testid="delete-note-btn"]');

    // Verify it is gone
    await expect(noteItem).toHaveCount(0);
  });

});
