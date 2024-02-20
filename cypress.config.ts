import { defineConfig } from "cypress";

require("dotenv").config();

export default defineConfig({
  e2e: {
    reporter: "cypress-mochawesome-reporter",
    baseUrl: "https://uitestingplayground.com",
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on); //reporter
      // implement node event listeners here
    },
    env: {
      stage: "https://stage.pasv.us",
      prod: "https://coding.pasv.us/course",
      test: "Hello World!",
      demoQA: "https://demoqa.com",
      hw: "https://play1.automationcamp.ir/expected_conditions.html",
      herokuapp: "https://the-internet.herokuapp.com",
      hw2: "https://play1.automationcamp.ir",
      email: "293728den@gmail.com",
      password: "293728den"
    },
  },
  retries: {
    runMode: 3,
    openMode: 2,
  },
  video: true,
  screenshotOnRunFailure: true,
  defaultCommandTimeout: 16000,
  reporterOptions: {
    charts: true,
    reportPageTitle: "custom-title",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
});
