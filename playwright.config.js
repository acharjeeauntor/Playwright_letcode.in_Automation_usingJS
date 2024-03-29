// @ts-check
const testConfig = require("./testConfig")
const {devices} = require("@playwright/test")
const ENV = process.env.ENV

if (!ENV || ![`functional`,`api`].includes(ENV)) {
  console.log(`Please provide a correct environment value like "npx cross-env ENV=functional|api"`);
  process.exit();
}

const config = {

  // testDir: './tests',
  // testMatch:['*.test.ts','*.api.ts'],
  expect: {

    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 20000
  },
  //Global Setup to run before all tests
  globalSetup: `./global-setup`,

  //Global Teardown to run after all tests
  globalTeardown: `./global-teardown`,

  //sets timeout for each test case
  timeout: 120000,

  //number of retries if test case fails
  retries: 0,

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */

  // reporter: [[`./CustomReporterConfig.ts`], ['list'], [`allure-playwright`], [`html`, { outputFolder: 'html-report', open: 'never' }]],
  reporter: [['list'], [`allure-playwright`], [`html`, { outputFolder: 'html-report', open: 'never' }]],

  /* Configure projects for major browsers */
  projects: [
    {
      name: `chrome`,
      //testDir:'./tests/functional',
      grepInvert:/@API/,
      use: {
        // Configure the browser to use.
        browserName: `chromium`,
        //Picks Base Url based on User input
        baseURL: testConfig[process.env.ENV],
        //Browser Mode
        headless: false,
        //Browser height and width
        viewport: { width: 1600, height: 900 },
        ignoreHTTPSErrors: true,
        //Enable File Downloads in Chrome
        acceptDownloads: true,
        //Artifacts
        screenshot: `only-on-failure`,
        video: `retain-on-failure`,
        trace: `retain-on-failure`,
        //Slows down execution by ms
        launchOptions: {
          slowMo: 0
        },
      },
    },
    {
      name: `headlessTest`,
      grepInvert:/@API/,
      use: {
        browserName: `chromium`,
        baseURL: testConfig[process.env.ENV],
        headless: true,
        viewport: { width: 1600, height: 900 },
        ignoreHTTPSErrors: true,
        acceptDownloads: true,
        screenshot: `only-on-failure`,
        video: `retain-on-failure`,
        trace: `retain-on-failure`,
        launchOptions: {
          slowMo: 0
        },
      },
    },
    {
      name:"Smoke",
      grep:/@Smoke/,
      use: {
        browserName: `firefox`,
        baseURL: testConfig[process.env.ENV],
        headless: !true,
        viewport: { width: 1500, height: 730 },
        ignoreHTTPSErrors: true,
        acceptDownloads: true,
        screenshot: `only-on-failure`,
        video: `retain-on-failure`,
        trace: `retain-on-failure`,
        launchOptions: {
          slowMo: 0
        }
      }
    },
    {
      name:"Functional",
      grep:/@Functional/,
      use: {
        browserName: `webkit`,
        baseURL: testConfig[process.env.ENV],
        headless: !true,
        viewport: { width: 1500, height: 730 },
        ignoreHTTPSErrors: true,
        acceptDownloads: true,
        screenshot: `only-on-failure`,
        video: `retain-on-failure`,
        trace: `retain-on-failure`,
        launchOptions: {
          slowMo: 0
        }
      }
    },
    {
      name: `Firefox`,
      use: {
        browserName: `firefox`,
        baseURL: testConfig[process.env.ENV],
        headless: !true,
        viewport: { width: 1500, height: 730 },
        ignoreHTTPSErrors: true,
        acceptDownloads: true,
        screenshot: `only-on-failure`,
        video: `retain-on-failure`,
        trace: `retain-on-failure`,
        launchOptions: {
          slowMo: 0
        }
      },
    },

    {
      name: `Edge`,
      use: {
        browserName: `chromium`,
        baseURL: testConfig[process.env.ENV],
        headless: false,
        viewport: { width: 1500, height: 730 },
        ignoreHTTPSErrors: true,
        acceptDownloads: true,
        screenshot: `only-on-failure`,
        video: `retain-on-failure`,
        trace: `retain-on-failure`,
        launchOptions: {
          slowMo: 0
        }
      },
    },
    {
      name: `WebKit`,
      use: {
        browserName: `webkit`,
        baseURL: testConfig[process.env.ENV],
        headless: true,
        viewport: { width: 1500, height: 730 },
        ignoreHTTPSErrors: true,
        acceptDownloads: true,
        screenshot: `only-on-failure`,
        video: `retain-on-failure`,
        trace: `retain-on-failure`,
        launchOptions: {
          slowMo: 0
        }
      },
    },
    {
      name: `Device`,
      use: {
        ...devices[`Pixel 4a (5G)`],
        browserName: `chromium`,
        baseURL: testConfig[process.env.ENV],
        headless: true,
        ignoreHTTPSErrors: true,
        acceptDownloads: true,
        screenshot: `only-on-failure`,
        video: `retain-on-failure`,
        trace: `retain-on-failure`,
        launchOptions: {
          slowMo: 0
        }
      },
    },
    {
      name: `DB`
    },
    {
      name: `API`,
      //testDir:'./tests/api',
      grep:/@API/,
      use: {
        baseURL:testConfig[process.env.ENV],
        extraHTTPHeaders:{
          'Accept': 'application/json',
        }
      }
    }
  ],
};
module.exports = config;