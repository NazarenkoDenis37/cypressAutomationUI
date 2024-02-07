import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://uitestingplayground.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      stage: "https://stage.pasv.us/user/login",
      prod: "https://coding.pasv.us/course",
      test: "Hello World!",
      demoQA: 'https://demoqa.com',
      hw: "https://play1.automationcamp.ir/expected_conditions.html",
      email: "293728den@gmail.com",
      password: "293728den"
    },
  },
  defaultCommandTimeout:16000
});
