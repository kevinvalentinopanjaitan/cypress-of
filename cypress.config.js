const { defineConfig } = require("cypress");
const { addCucumberPreprocessorPlugin} = require('@badeball/cypress-cucumber-preprocessor');
const preprocessor = require('@badeball/cypress-cucumber-preprocessor/browserify').default;

async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", preprocessor(config));
  return config;
}

module.exports = defineConfig({
  retries: { //Retry when error with max retries 3 times
    experimentalStrategy: 'detect-flake-but-always-fail',
    experimentalOptions: {
      maxRetries: 3,
      stopIfAnyPassed: true,
    },
    // you must also explicitly set openMode and runMode to
    // either true or false when using experimental retries
    openMode: true,
    runMode: true,
  },
  e2e: {
    experimentalRunAllSpecs: true, //Run all specs //npx cypress run
    viewportWidth: 1920,
    viewportHeight: 1080,
    // baseUrl: "https://web.orderfaz.com", //production
    baseUrl: "https://webstaging.orderfaz.com/", //staging
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
