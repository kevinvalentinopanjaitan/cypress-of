/// <reference types="cypress" />
import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
import prodPage from "../../pageObject/LoginPage/addProductPage.cy";

When('User fill all form with valid format', () => {
    prodPage.SideDashboard()
    prodPage.navigateDashNewProduct()
    prodPage.fillProductName()
    prodPage.fillCategory()
    prodPage.fillPVA()
    prodPage.fillWeightAndVolume()
    prodPage.fillMedia()
    prodPage.fillProductInfo()
    prodPage.fillCatalog()
    prodPage.fillTitleNewCatalog()
    prodPage.fillImgNewCatalog()
    prodPage.SelectCatalog()
})
Then('User click to the next steps', () => {
    prodPage.NextButton()
})
Then('User add new bump offer', () => {
    prodPage.AddNewBumpOffer()
})
Then('User create new bump offer', () => {
    prodPage.Cr8NewBumpOffer()
})
Then('User fill bump title', () => {
    prodPage.UserFillBumpTitle()
})
Then('User fill bump description', () => {
    prodPage.UserFillBumpDesc()
})
Then('User fill bump image', () => {
    prodPage.UserFillBumpImg()
})
Then('User check bump product title', () => {
    prodPage.UserCheckBumpProdTitle()
})
Then('User fill bump price', () => {
    prodPage.UserFillBumpPrice()
})
Then('User fill bump text label check', () => {
    prodPage.UserFillBumpLabel()
})
Then('User click finish edit', () => {
    prodPage.UserFinishEdit()
})
Then('User click save', () => {
    prodPage.UserClickSave()
})
Then('User validate success popup', () => {
    prodPage.UserValidateSuccessPopup()
})