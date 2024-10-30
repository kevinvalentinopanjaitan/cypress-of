/// <reference types="cypress" />
import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
import cotemplatePage from "../../pageObject/LoginPage/CO_templatePage.cy";

When('User navigate to checkout link page', () => {
    cy.visit('https://webstaging.orderfaz.com/checkout-link/editor?template=true')
})
Then('User choose design {string}', () => {
    cotemplatePage.ChooseDesign()
})