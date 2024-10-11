// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')
// cypress/support/index.js

// Clear cookies, local storage, and session storage before every test
beforeEach(() => {
    cy.clearCookies();        // Clears all cookies
    cy.clearLocalStorage();   // Clears local storage
    cy.window().then((win) => {
      win.sessionStorage.clear();  // Clears session storage
    });
  });

  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
  