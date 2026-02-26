export class BasePage{
    constructor(page){
        this.page = page;
    }

    async openUrl(){
        await this.page.goto('/');
    }

}