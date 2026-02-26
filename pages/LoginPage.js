import { BasePage } from "./BasePage";

export class LoginPage extends BasePage{
    constructor(page){
        super(page);
        
        this.userNameField = this.page.locator('#user-name');
        this.passwordField = this.page.locator('#password');
        this.loginButton = this.page.locator('#login-button');


    }

    async applicationLogin(username, password){
        await this.userNameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }
}