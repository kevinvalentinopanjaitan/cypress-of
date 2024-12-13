class ProductPage {
    element = {
        //Start of Section "Tambah Produk" from Dashboard
        SideDashProduct: '#menu-produk > .relative > .justify-between',
        SideDashProduct_ProductList: '.border-l-blue-600 > .router-link-active',
        DashNewProduct: '.primary > .text-sm', //Daftar Produk > "+Produk Baru"
        DashNewProduct_Dropdn: 'a > .flex > .text-start > .font-semibold', //Tambah Satuan
        DashCheckboxCOLink: '[type="checkbox"]', //Default ON Switch Button "Buat Checkout Link"
        //End of Section "Tambah Produk" from Dashboard

        //Start of Section "Tambah Produk" page
        //Basic Information section (BI)
        BI_Physical: '[data-cy="button-product-type-100"]',
        BI_Digital: '[data-cy="button-product-type-200"]',
        BI_ProductName: '[data-cy="input-product-name"]', //Input Product Name
        BI_ProductCategory: '[data-cy="select-product-category"]', //Select Category Dropdown
        BI_EnterCategory: '#multiselect-option-160 > span', //Select Category "Fashion Pria"
        BI_ProductIsHide: '[data-cy="switch-product-ishide-store"]', //Default ON
        BI_ProductPhysc:'[data-cy="button-product-type-100"]', //Category Physical
        BI_ProductDgtl: '[data-cy="button-product-type-200"]', //Category Digital

        //Price, Variant and Availability section (PVA)
        PVA_isVariantFalse: '[data-cy="button-product-isVariant-false"]', //Varian Simple
        PVA_isVariantTrue: '[data-cy="button-product-isVariant-true"]', //Bervarian
        PVA_InputPriceSimple: '[data-cy="input-product-price"]',
        PVA_OptVariant_btn: '[data-cy="button-add-variant-category"]',
        PVA_InputVariantName: '[data-cy="inputTag-variant-type-1"]',
        PVA_CategoryVariant: '[data-cy="select-variant-category-1-listbutton"]',
        PVA_InputPriceVariant1: '[data-cy="input-price-variant-1"]',
        PVA_InputPriceVariant2: '[data-cy="input-price-variant-2"]',
        PVA_InputCogs: '[data-cy="input-product-cogs"]',
        PVA_btn_Stocks: '[data-cy="button-product-stock-edit"]',
        PVA_InputStocks: '[data-cy="product-input-stock"]',
        PVA_btn_CancelStocks: '[data-cy="product-button-cancel-stock"]',
        PVA_btn_OkStocks: '[data-cy="product-button-save-stock"]',
        PVA_isAvail: '[data-cy="switch-product-isActive-label"]',
        PVA_isAvail_btn: '[data-cy="switch-product-isActive"]',
        PVA_AddDiscount: '[data-cy="button-product-discount-add"]',
        PVA_FillDiscount: '[data-cy="add-product-input-price-discount"]',
        PVA_FillDiscount_btn_OK: '[data-cy="add-product-button-save-discount"]',
        PVA_FillDiscount_btn_Cncl: '[data-cy="add-product-button-cancel-discount"]',
        PVA_FillDiscount_btn_Close: '[data-cy="add-product-button-close-discount"]',
        PVA_InputSKU: '[data-cy="input-product-sku"]',
        PVA_EditWholeSale: '[data-cy="button-product-manage-wholesales"]',
        PVA_MinWholeSale1: '[data-cy="product-input-qty-wholesales-1"]', //The First Column
        PVA_WholePrice1: '[data-cy="product-input-price-wholesales-1"]', //The First Column
        PVA_MinWholeSale2: '[data-cy="product-input-qty-wholesales-2"]', //The Second Column
        PVA_WholePrice2: '[data-cy="product-input-price-wholesales-2"]', //The Second Column
        PVA_btnSaveWS: '[data-cy="product-button-save-wholesales"]',
        PVA_btnCnclWS: '[data-cy="product-button-cancel-wholesales"]',
        PVA_addColumn_WS: '[data-cy="product-button-add-wholesales"]',
        PVA_deleteAll_WS: '[data-cy="product-button-clear-wholesales"]',
        PVA_deletePer_WS: '[data-cy="product-button-delete-wholesales-2"]', //Delete second column of whole sale

        //Weight and Volume (WV)
        WV_WeightSimple_btn: '[data-cy="button-product-is-every-variant-weight-same-true"]',
        WV_FieldWeightSimple: '[data-cy="input-product-volumetric-weight"]',
        WV_VariantVaries: '[data-cy="button-product-is-every-variant-weight-same-false"]',
        WV_WeightVariant1: '[data-cy="input-variant-weight-1"]',
        WV_WeightVariant2: '[data-cy="input-variant-weight-2"]',
        WV_Weight_Grams: '[data-cy="select-product-volumetric-weight-unit"] > .multiselect-new-wrappper > .w-full',
        WV_Weight_Kg: '#multiselect-option-1000',
        WV_ProductLength:'[data-cy="input-product-volumetric-length"]', //Panjang
        WV_ProductWidth: '[data-cy="input-product-volumetric-width"]', //Lebar
        WV_ProductHeight: '[data-cy="input-product-volumetric-height"]', //Tinggi
        
        //Media (MED)
        MED_Upload: '[data-cy="button-file-upload-media"]',
        MED_InputLink: '[data-cy="button-file-link-media"]',
        MED_SaveMedia: '[data-cy="button-dialog-yes"]',
        MED_EnterLink_Field: '[data-cy="input-link-media"]',
        MED_AddLinkBtn: '[data-cy="button-save-link"]',
        MED_CnclLinkBtn: '[data-cy="button-cancel-save-link"]',
        MED_CloseLinkBtn: '[data-cy="modal-button-close"]',

        //Product Information (PI)
        PI_Description: '[data-cy="editor-description-product"]',
        PI_LoremIpsum: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula diam, cursus faucibus euismod et, pharetra quis ante. Sed placerat urna sit amet lacus fermentum, ac lacinia lectus pellentesque. Maecenas lacinia, leo nec posuere venenatis, dolor mi mattis tellus, non pellentesque nunc nulla eu ligula. Morbi porta rhoncus cursus. Cras pharetra fermentum eros, sed dapibus odio sollicitudin sed. Quisque ut augue velit. Curabitur rhoncus neque non venenatis sagittis. Nulla mattis sodales tellus, at cursus dui.',
        PI_ChckListPoint: '[data-cy="input-product-extra"]',
        PI_COLinkbtn: '//*[@id="form"]/div[6]/button',

        //Catalog
        Cat_dropdn: '.multiselect-wrapper',
        Cat_create: '/html[1]/body[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[2]/div[5]/div[2]/div[3]/div[2]/div[2]/a[1]/button[1]',
        Cat_title: '/html/body/div/div/div[3]/div/div[2]/div/div/div[2]/div[1]/input',
        Cat_img_btn: '.aspect-square',
        Cat_save_btn: ':nth-child(2) > .items-center > p',
        Cat_cancel_btn: ':nth-child(2) > :nth-child(1) > p',

        //Nav top button
        Nav_next_btn: '/html/body/div/div/div[3]/div[1]/div/div[2]/button[2]',
        Nav_cancel_btn: '[data-cy="button-addProduct-cancel-save-product"]',
        Nav_save_btn: '[data-cy="button-addProduct-save-product"]',
    
        //Bump Offer
        Bump_add_btn: '/html/body/div/div/div[3]/div[2]/div[2]/div[2]/div/div[2]/div[1]/div/div/div[2]/button', //xpath
        Bump_title_product: '[data-cy="search-bump-product-input"]',
        Bump_create_btn: '/html/body/div/div/div[3]/div[2]/div[2]/div[2]/div/div[2]/div[1]/div/div[2]/div/div/div/div/div/div[2]/div/div/div[2]/div/button', //xpath
        Bump_title_content: '[data-cy="bump-title-input"]',
        Bump_add_img: '[data-cy="bump-imageProduct-dropzone"]',
        Bump_cropImg_Svbtn: '[data-cy="crop-image-submit"]',
        Bump_desc: '[data-cy="bump-description-input"] > .base-input',
        Bump_title_product_content: '[data-cy="bump-title-product-input"]',
        Bump_price: '[data-cy="bump-price-input"]',
        Bump_text_label_check: '[data-cy="bump-label-input"]', //Field "Teks Label Centang"
        Bump_finish_edit_btn: '[data-cy="bump-button-save"]', //Button "Selesai Mengedit"

        //End of Section Tambah produk       
    }
    //Checking element when product success created
    elementCheck = {
        Popup_close_btn: '.absolute > .material-symbols-outlined',
        Popup_See_Store_btn: ':nth-child(3) > .gap-y-2 > .gap-x-1\\.5 > a.flex > .secondary',
        Popup_Copy_Link_SF_btn: ':nth-child(3) > .gap-y-2 > .gap-x-2 > [icon="copy_all"]',
        Popup_Share_SF_btn: ':nth-child(3) > .gap-y-2 > .gap-x-2 > [text="Bagikan"]',
        Popup_See_CO_btn: ':nth-child(4) > .gap-y-2 > .gap-x-1\\.5 > a.flex > .secondary',
        Popup_Edit_CO_btn: '.gap-x-1\\.5 > .py-1',
        Popup_Link_CO_btn: '.w-fit > .border',
        Popup_Embed_CO_btn: '.w-fit > .bg-white',
        Popup_Copy_Link_CO_btn: ':nth-child(4) > .gap-y-2 > .gap-x-2 > [icon="copy_all"]',
        Popup_Share_CO_btn: ':nth-child(4) > .gap-y-2 > .gap-x-2 > [text="Bagikan"]',
        Popup_Next_Product_btn: '[data-cy="button-dialog-cancel-link"]',
        Popup_See_Product_List_btn: '[data-cy="button-dialog-yes-with-disabled"]',

        //Validate error
        FormCreateProduct: '.sticky > .bg-red-50',
    }

    SideDashboard() {
        cy.get(this.element.SideDashProduct)
        .wait(1000)
        .click()
        cy.get(this.element.SideDashProduct_ProductList)
        .wait(1000)
        .click();
        return this;
    }
    navigateDashNewProduct() {
        cy.get(this.element.DashNewProduct)
        .click()
        cy.get(this.element.DashNewProduct_Dropdn)
        .click()
        cy.get(this.element.DashCheckboxCOLink)
        .should('be.checked');
        return this;
    }
    fillProductName() {
        cy.get(this.element.BI_ProductName)
        .wait(1000)
        .type('Celana Panjang Jeans');
        return this;
    }
    fillCategory() {
        cy.get(this.element.BI_ProductCategory) //Get element category
        .scrollIntoView({ easing: 'linear' })
        .click()
        .should('be.visible')
        cy.get(this.element.BI_EnterCategory) //Enter category "Fashion Pria"
        .scrollIntoView({ easing: 'linear' })
        .click();
        return this;
    }
    fillPVA() { //Pricing, Variant & Availability
        cy.get(this.element.PVA_InputPriceSimple)
        .scrollIntoView({ easing: 'linear' })
        .should('be.visible')
        .type('500000') //Input Price with 500k
        cy.get(this.element.PVA_InputCogs)
        .scrollIntoView({ easing: 'linear' })
        .should('be.visible')
        .type('100000') //Input Cogs with 100k
        cy.get(this.element.PVA_AddDiscount)
        .scrollIntoView({ easing: 'linear' })
        .should('be.visible')
        .click()
        cy.get(this.element.PVA_FillDiscount)
        .scrollIntoView({ easing: 'linear' })
        .should('be.visible')
        .type('400000')
        cy.get(this.element.PVA_FillDiscount_btn_OK)
        .scrollIntoView({ easing: 'linear' })
        .should('be.visible')
        .click();
        cy.get(this.element.PVA_InputSKU)
        .scrollIntoView({ easing: 'linear' })
        .should('be.visible')
        .type('CJ-00001-JEANS')
        cy.get(this.element.PVA_btn_Stocks)
        .scrollIntoView({ easing: 'linear' })
        .should('be.visible')
        .click()
        cy.get(this.element.PVA_InputStocks)
        .scrollIntoView({ easing: 'linear' })
        .should('be.visible')
        .type('99')
        cy.get(this.element.PVA_btn_OkStocks)
        .scrollIntoView({ easing: 'linear' })
        .should('be.visible')
        .click()
        cy.get(this.element.PVA_isAvail).then(btn => {
            const buttonText = btn.text().trim(); // Get the text inside the button
            if (buttonText === 'Nonaktif') {
              // If the button text is "Nonaktif", click to make it "Aktif"
              cy.get(this.element.PVA_isAvail_btn).click();
              cy.log('Switch turned to Aktif');
            } else {
              cy.log('Switch is already Aktif');
            }
          });
          //Fill The First Column of Whole Price
          cy.get(this.element.PVA_EditWholeSale)
          .should('be.visible')
          .click()
          cy.get(this.element.PVA_MinWholeSale1)
          .should('be.visible')
          .type('5')
          cy.get(this.element.PVA_WholePrice1)
          .should('be.visible')
          .type('450000')
          cy.get(this.element.PVA_addColumn_WS)
          .click()
          //Fill The Second Column of Whole Price
          cy.get(this.element.PVA_MinWholeSale2)
          .should('be.visible')
          .type('10')
          cy.get(this.element.PVA_WholePrice2)
          .should('be.visible')
          .type('425000')
          cy.get(this.element.PVA_btnSaveWS)
          .should('be.visible')
          .click();
          return this;
    }
    fillWeightAndVolume() {
        cy.get(this.element.WV_FieldWeightSimple)
        .should('be.visible')
        .type('10')
        cy.get(this.element.WV_ProductLength)
        .should('be.visible')
        .type('10')
        cy.get(this.element.WV_ProductWidth)
        .should('be.visible')
        .type('10')
        cy.get(this.element.WV_ProductHeight)
        .should('be.visible')
        .type('10')
        return this;
    }
    fillMedia() {
        cy.get('[data-cy="button-file-upload-media"]')
        .selectFile('download.jpeg', { action: 'drag-drop', force: true })
        cy.get(this.element.MED_SaveMedia)
        .click();
        return this;
    }
    fillProductInfo() {
        cy.get(this.element.PI_Description)
        .type(this.element.PI_LoremIpsum)
        .type('{selectall}')
        cy.get(this.element.PI_ChckListPoint)
        .type('Murah{enter}Orginal{enter}Garansi Resmi 100%');
        return this;
    }
    fillCatalog() {
        cy.get(this.element.Cat_dropdn)
        .click()
        .wait(1000)
        cy.xpath(this.element.Cat_create)
        .click();
        return this;
    }
    fillTitleNewCatalog() {
        cy.xpath(this.element.Cat_title)
        .type('Puncak Komedi');
        return this;
    }
    fillImgNewCatalog() {
        cy.get(this.element.Cat_img_btn)
        .wait(1000)
        .selectFile('download.jpeg', { action: 'drag-drop', force: true })
        cy.get(this.element.MED_SaveMedia)
        .wait(1000)
        .click()
        cy.get(this.element.Cat_save_btn)
        .click();
        return this;
    }
    SelectCatalog() {
        cy.get(this.element.Cat_dropdn)
        .click()
        .wait(1000)
        cy.contains('li', 'Puncak Komedi')
        .click();
        return this;
    }
    NextButton() {
        cy.xpath(this.element.Nav_next_btn)
        .click();
        return this;
    }
    AddNewBumpOffer() {
        cy.xpath(this.element.Bump_add_btn)
        .click();
        return this;
    }
    Cr8NewBumpOffer(InputNewBumpOffer) {
        cy.get(this.element.Bump_title_product)
        .should('be.visible')
        .type(InputNewBumpOffer)
        cy.xpath(this.element.Bump_create_btn)
        .should('be.visible')
        .click();
        return this;
    }
    UserFillBumpTitle(InputBumpTitle) {
        cy.get(this.element.Bump_title_content)
        .should('be.visible')
        .clear()
        .type(InputBumpTitle);
        return this;
    }
    UserFillBumpDesc(InputBumpDesc) {
        cy.get(this.element.Bump_desc)
        .should('be.visible')
        .clear()
        .type(InputBumpDesc);
        return this;
    }
    UserFillBumpImg() {
        cy.get(this.element.Bump_add_img, {force: true})
        .wait(1000)
        .selectFile('download.jpeg', { action: 'drag-drop', force: true })
        cy.get(this.element.Bump_cropImg_Svbtn)
        .wait(1000)
        .click();
        return this;
    }
    UserCheckBumpProdTitle() {
        cy.get(this.element.Bump_title_product_content)
        .wait(1000)
        .then($el => {
            const value = $el.val();  // Get the value of the input or text field
            expect(value).to.equal("OrderFaz Bump Offer");  // Assert the expected value
            cy.log("The Bump Title Product Content value is:", value);  // Log the value
          });
        return this;
    }
    UserFillBumpPrice(InputBumpPrice) {
        cy.get(this.element.Bump_price)
        .should('be.visible')
        .clear()
        .wait(1000)
        .type(InputBumpPrice);
        return this;
    }
    UserFillBumpLabelCheck(InputBumpLabelCheck) {
        cy.get(this.element.Bump_text_label_check)
        .should('be.visible')
        .clear()
        .type(InputBumpLabelCheck)
        return this;
    }
    UserFinishEdit() {
        cy.get(this.element.Bump_finish_edit_btn)
        .should('be.visible')
        .click()
        return this;
    }
    UserClickSave() {
        cy.get(this.element.Nav_save_btn)
        .should('be.visible')
        .click()
        return this;
    }
    UserValidateSuccessPopup() {
        cy.get(this.elementCheck.Popup_close_btn)
        .should('be.visible')
        .log('Close button is visible')
        //cy.get(this.element.Popup_Field_Store)
        //.contains('.fazlink.co/product/')
        //.log('Field has a value')
        cy.get(this.elementCheck.Popup_See_Store_btn)
        .should('be.visible')
        .log('Button "Lihat" StoreFront is visible')
        cy.get(this.elementCheck.Popup_Copy_Link_SF_btn)
        .should('be.visible')
        .log('Button "Salin Link" StoreFront is visible')
        cy.get(this.elementCheck.Popup_Share_SF_btn)
        .should('be.visible')
        .log('Button "Bagikan" StoreFront is visible')
        cy.get(this.elementCheck.Popup_See_CO_btn)
        .should('be.visible')
        .log('Button "Lihat" Checkout Link is visible')
        cy.get(this.elementCheck.Popup_Edit_CO_btn)
        .should('be.visible')
        .log('Button "Edit" Checkout Link is visible')
        cy.get(this.elementCheck.Popup_Link_CO_btn)
        .should('be.visible')
        .log('Section "Link" on Checkout Link is visible')
        cy.get(this.elementCheck.Popup_Embed_CO_btn)
        .should('be.visible')
        .log('Section "Embed Code" on Checkout Link is visible')
        cy.get(this.elementCheck.Popup_Copy_Link_CO_btn)
        .should('be.visible')
        .log('Button "Salin Link" on Checkout Link is visible')
        cy.get(this.elementCheck.Popup_Share_CO_btn)
        .should('be.visible')
        .log('Button "Bagikan" on Checkout Link is visible')
        cy.get(this.elementCheck.Popup_Next_Product_btn)
        .should('be.visible')
        .log('Button "Buat produk selanjutnya" is visible')
        cy.get(this.elementCheck.Popup_See_Product_List_btn)
        .wait(1000)
        .should('be.visible')
        .log('Button "Lihat list produk" is visible');
        return this;
    }
    TypePhysical() {
        cy.get(this.element.BI_Physical)
        .wait(1000)
        .should('be.visible')
        .click();
        return this;
    }
    TypeDigital() {
        cy.get(this.element.BI_Digital)
        .wait(1000)
        .should('be.visible')
        .click();
        return this;
    }
    VariantSimple() {
        cy.get(this.element.PVA_isVariantFalse)
        .wait(1000)
        .should('be.visible')
        .click();
        return this;
    }
    VariantVaries() { //Bervarian
        cy.get(this.element.PVA_isVariantTrue)
        .wait(1000)
        .should('be.visible')
        .click()
        return this;
    }
    EmptyPriceSimple() {
        cy.get(this.element.PVA_InputPriceSimple)
        .wait(1000)
        .should('be.visible')
        .clear();
        return this;
    }
    EmptyWeightPhysicalSimple() {
        cy.get(this.element.WV_FieldWeightSimple)
        .wait(1000)
        .should('be.visible')
        .clear();
        return this;
    }
    EmptyPriceVariant() {
        cy.get(this.element.PVA_CategoryVariant)
        .click()
        .wait(1000)
        cy.contains('li', 'Ukuran') //Get the frist ul>li
        .wait(1000)
        .click()
        cy.get(this.element.PVA_InputVariantName)
        .wait(1000)
        .should('be.visible')
        .type('L{enter}XL{enter}')
        cy.get(this.element.PVA_InputPriceVariant1)
        .wait(1000)
        .should ('be.visible')
        .clear()
        cy.get(this.element.PVA_InputPriceVariant2)
        .wait(1000)
        .should ('be.visible')
        .clear();
        return this;
    }
    EmptyWeightPhysicalVariant() {
        cy.get(this.element.WV_VariantVaries)
        .wait(1000)
        .should('be.visible')
        .click()
        cy.get(this.element.WV_WeightVariant1)
        .wait(1000)
        .should('be.visible')
        .clear()
        cy.get(this.element.WV_WeightVariant2)
        .wait(1000)
        .should('be.visible')
        .clear()
    }
    EmptyWeightDigitalSimple() {
        cy.xpath(this.element.Nav_next_btn)
        .click();
        return this;
    }
    EmptyWeightDigitalVariant() {
        cy.xpath(this.element.Nav_next_btn)
        .click();
        return this;
    }
    ValidateFormPhysicalVariant() {
        cy.get(this.elementCheck.FormCreateProduct)
        .contains('Nama produk wajib diisi')
        .and('have.text', 'Nama produk wajib diisi')
        .log('Form has given error statement "Nama produk wajib diisi"')
        cy.get(this.elementCheck.FormCreateProduct)
        .contains('Kategori produk wajib diisi')
        .and('have.text', 'Kategori produk wajib diisi')
        .log('Form has given error statement "Kategori produk wajib diisi"')
        cy.get(this.elementCheck.FormCreateProduct)
        .contains('Harga satuan varian "L" wajib diisi')
        .and('have.text', 'Harga satuan varian "L" wajib diisi')
        .log('Form has given error statement "Harga satuan varian "L" wajib diisi"')
        cy.get(this.elementCheck.FormCreateProduct)
        .contains('Harga satuan varian "XL" wajib diisi')
        .and('have.text', 'Harga satuan varian "XL" wajib diisi')
        .log('Form has given error statement "Harga satuan varian "XL" wajib diisi"')
        return this;
    }
    ValidateFormDigitalVariant() {
        cy.get(this.elementCheck.FormCreateProduct)
        .contains('Nama produk wajib diisi')
        .and('have.text', 'Nama produk wajib diisi')
        .log('Form has given error statement "Nama produk wajib diisi"')
        cy.get(this.elementCheck.FormCreateProduct)
        .contains('Kategori produk wajib diisi')
        .and('have.text', 'Kategori produk wajib diisi')
        .log('Form has given error statement "Kategori produk wajib diisi"')
        cy.get(this.elementCheck.FormCreateProduct)
        .contains('Harga satuan varian "L" wajib diisi')
        .and('have.text', 'Harga satuan varian "L" wajib diisi')
        .log('Form has given error statement "Harga satuan varian "L" wajib diisi"')
        cy.get(this.elementCheck.FormCreateProduct)
        .contains('Harga satuan varian "XL" wajib diisi')
        .and('have.text', 'Harga satuan varian "XL" wajib diisi')
        .log('Form has given error statement "Harga satuan varian "XL" wajib diisi"')
        return this;
    }
    ValidateFormPhysicalSimple() {
        cy.get(this.elementCheck.FormCreateProduct)
        .contains('Nama produk wajib diisi')
        .and('have.text', 'Nama produk wajib diisi')
        .log('Form has given error statement "Nama produk wajib diisi"')
        cy.get(this.elementCheck.FormCreateProduct)
        .contains('Kategori produk wajib diisi')
        .and('have.text', 'Kategori produk wajib diisi')
        .log('Form has given error statement "Kategori produk wajib diisi"')
        cy.get(this.elementCheck.FormCreateProduct)
        .contains('Berat produk wajib diisi')
        .and('have.text', 'Berat produk wajib diisi')
        .log('Form has given error statement "Berat produk wajib diisi"')
        cy.get(this.elementCheck.FormCreateProduct)
        .contains('Harga satuan wajib diisi')
        .and('have.text', 'Harga satuan wajib diisi')
        .log('Form has given error statement "Harga satuan wajib diisi"')
        return this;
    }
    ValidateFormDigitalSimple() {
        cy.get(this.elementCheck.FormCreateProduct)
        .contains('Nama produk wajib diisi')
        .and('have.text', 'Nama produk wajib diisi')
        .log('Form has given error statement "Nama produk wajib diisi"')
        cy.get(this.elementCheck.FormCreateProduct)
        .contains('Kategori produk wajib diisi')
        .and('have.text', 'Kategori produk wajib diisi')
        .log('Form has given error statement "Kategori produk wajib diisi"')
        cy.get(this.elementCheck.FormCreateProduct)
        .contains('Harga satuan wajib diisi')
        .and('have.text', 'Harga satuan wajib diisi')
        .log('Form has given error statement "Harga satuan wajib diisi"')
        return this;
    }
}
const prodPage = new ProductPage();
export default prodPage;