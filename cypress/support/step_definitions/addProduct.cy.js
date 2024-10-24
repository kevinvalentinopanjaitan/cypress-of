/// <reference types="cypress" />
import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
import prodPage from "../../pageObject/LoginPage/addProductPage.cy";

//User create product with type physical with non variant
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
Then('User create new bump offer with {string}', (InputNewBumpOffer) => {
    prodPage.Cr8NewBumpOffer(InputNewBumpOffer)
})
Then('User fill bump title with {string}', (InputBumpTitle) => {
    prodPage.UserFillBumpTitle(InputBumpTitle)
})
Then('User fill bump description with {string}', (InputBumpDesc) => {
    prodPage.UserFillBumpDesc(InputBumpDesc)
})
Then('User fill bump image', () => {
    prodPage.UserFillBumpImg()
})
Then('User check bump product title', () => {
    prodPage.UserCheckBumpProdTitle()
})
Then('User fill bump price {string}', (InputBumpPrice) => {
    prodPage.UserFillBumpPrice(InputBumpPrice)
})
Then('User fill bump text label check', (InputBumpLabelCheck) => {
    prodPage.UserFillBumpLabelCheck(InputBumpLabelCheck)
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

//User failed to create product with type "<type>" and "<variant>"
When('User navigate to create product page', () => {
    prodPage.SideDashboard()
    prodPage.navigateDashNewProduct()
})
Then('User choose {string} of product', (type) => {
     if(type === 'Physical') {
        prodPage.TypePhysical()
     } else {
        prodPage.TypeDigital()
     }
})
Then('User leave blank on product name', () => {
    cy.get(prodPage.element.BI_ProductName)
    .wait(3000)
    .clear();
})
Then('User leave blank on category', () => {
    cy.get(prodPage.element.BI_ProductCategory)
    .wait(3000)
    .clear();
})
Then('User choose variant {string}', (variant) => {
    if(variant === 'Simple') {
        prodPage.VariantSimple()
    } else {
        prodPage.VariantVaries()
    }
})