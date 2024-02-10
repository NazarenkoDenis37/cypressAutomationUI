class Login {
  userName: string = "#userName";
  password: string = "#password";
  loginButton: string = "#login";
  logOutButton: string = "#submit";

  submitButtonLogin() {
    cy.get(this.userName).type(process.env.EMAIL_LOCAL_STAGE);
    cy.get(this.password).type(process.env.PASSWORD_LOCAL_STAGE);
    cy.get(this.loginButton).click();
  }
}

export const LoginPage = new Login();