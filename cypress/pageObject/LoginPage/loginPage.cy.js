class LoginPage {

    element = {
        emailField: '[data-cy="email-phone-input"]',
        passField: '[data-cy="password-input"]',
        btnLogin: '[data-cy="submit-login"]',
    }

    navigateURL() {
        cy.visit('https://web.orderfaz.com/login')
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
        cy.contains('Lihat Toko', {timeout: 50000});
    }
    verifyLoginFailure() {
        cy.contains('Password salah, mohon coba lagi', {timeout: 50000});
    }
}
const logPage = new LoginPage();
export default logPage;