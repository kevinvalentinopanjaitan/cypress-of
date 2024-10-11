const { defineConfig } = require("cypress");
const { addCucumberPreprocessorPlugin} = require('@badeball/cypress-cucumber-preprocessor');
const preprocessor = require('@badeball/cypress-cucumber-preprocessor/browserify').default;

async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", preprocessor(config));
  return config;
}

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080,
    baseUrl: "https://web.orderfaz.com",
    chromeWebSecurity: false, //bypass invalid certificate
    video: true,
    videoCompression: 32,
    videoUploadOnPasses: true,
    reporter: require.resolve("@badeball/cypress-cucumber-preprocessor/pretty-reporter"),
    screenshotOnRunFailure: true,
    setupNodeEvents,
    specPattern: "cypress/e2e/orderfaz/features/*.feature"
  },
});
