class COTemplatePage {
    element = {
        SideDashProduct: '#menu-produk > .relative > .justify-between',
        SideDashProduct_CO: ':nth-child(3) > .bg-white',
        CreateCOLinkList_btn: '[data-cy="create-template-button"]',
        CreateNewTemplate: '[data-cy="create-new-template-button"]',
        DesignSimple: '[data-cy="checkout-theme-500"]',
        DesignModernTerang: '[data-cy="checkout-theme-100"]',
        DesignModernGelap: '[data-cy="checkout-theme-200"]',
        DesignTokoHitam: '[data-cy="checkout-theme-400"]',
        DesignTokoOren: '[data-cy="checkout-theme-300"]',
    }
    ChooseDesign() {
        cy.get(this.element.DesignTokoOren)
        .focus()
        .click();
        return this;
    }
}

const cotemplatePage = new COTemplatePage();
export default cotemplatePage;