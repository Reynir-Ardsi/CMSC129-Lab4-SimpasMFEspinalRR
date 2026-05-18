import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests/system',
  timeout: 10000,
  use: {
    baseURL: 'http://localhost:5173',
    headless: true,
  },
  webServer: [
    {
      command: 'npm start',
      cwd: '../server',
      port: 3001,
      timeout: 10000,
      reuseExistingServer: !process.env.CI,
    },
    {
      command: 'npm run dev',
      port: 5173,
      timeout: 10000,
      reuseExistingServer: !process.env.CI,
    }
  ],
});
