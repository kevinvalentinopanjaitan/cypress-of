/// <reference types="cypress" />
import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
import logPage from "../../pageObject/LoginPage/loginPage.cy";

Given("User navigate to orderfaz website", () => {
    logPage.navigateURL();
})
When("User fill {string} and {string}", (email, password) => {
    logPage.inputEmail(email)
    logPage.inputPass(password);
})
When("User {string} login because {string}", (result) => {
    if(result === 'successfully') {
        logPage.verifyLoginSuccess();
    } else if(result === 'failed1') {
        logPage.verifyInvalidEmail();
    } else if(result === 'failed2') {
        logPage.verifyInvalidPass();
    } else if(result === 'failed3') {
        logPage.verifyEmptyEmail();
    } else {
        logPage.verifyEmptyPass();
    }
})
When("User fill empty email", () => {
    cy.get('[data-cy="email-phone-input"]')
    .clear();
})
When("User click login button", () => {
    logPage.submit();
})
When("User failed login because empty email", () => {
    logPage.verifyEmptyEmail();
})
When("User fill with valid email", () => {
    cy.get('[data-cy="email-phone-input"]')
    .type('48yunyun@gmail.com');
})
When("User leave blank on password", () => {
    logPage.element.passField;
})
Then("User failed login because empty password", () => {
    logPage.verifyEmptyPass();
})