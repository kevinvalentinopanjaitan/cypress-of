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
When("User click login button", () => {
    logPage.submit();
})
Then("User {string} login", (result) => {
    if(result === 'successfully') {
        logPage.verifyLoginSuccess();
    } else {
        logPage.verifyLoginFailure();
    }
})