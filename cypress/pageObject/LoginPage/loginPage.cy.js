class LoginPage {

    element = {
        emailField: '[data-cy="email-phone-input"]',
        passField: '[data-cy="password-input"]',
        btnLogin: '[data-cy="submit-login"]',
    }
    navigateURL() {
        cy.visit('/login')
        cy.url().should('contain','/login');
    }
    inputEmail(email) {
        cy.get(this.element.emailField)
        .type(email);
        return this;
    }
    inputPass(password) {
        cy.get(this.element.passField)
        .type(password);
        return this;
    }
    submit() {
        cy.get(this.element.btnLogin)
        .click({timeout: 10000})
        return this;
    }
    verifyLoginSuccess() {
        cy.contains('Lihat Toko', {timeout: 10000});
    }
    verifyInvalidEmail() {
        cy.contains('Akun tidak ditemukan, silahkan daftar terlebih dahulu', {timeout: 10000});
    }
    verifyInvalidPass() {
        cy.contains('Password salah, mohon coba lagi', {timeout: 10000});
    }
    verifyEmptyEmail() {
        cy.contains('Email / no telepon tidak boleh kosong', {timeout: 10000});
    }
    verifyEmptyPass() {
        cy.contains('Password tidak boleh kosong', {timeout: 10000});
    }
}
const logPage = new LoginPage();
export default logPage;