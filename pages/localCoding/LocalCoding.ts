class LocalCodingLogin {
    email: string = '#normal_login_email';
    password: string = '#normal_login_password';
    loginButton: string = 'button[type="submit"]';  

    buttonLogin(email: string, password: string) :void {
        cy.get(this.email).type(process.env.EMAIL_LOCAL_STAGE);
        cy.get(this.password).type(process.env.PASSWORD_LOCAL_STAGE, {log:false});
        cy.get(this.loginButton).click();
    }
}

export const LocCodingLogin = new LocalCodingLogin();