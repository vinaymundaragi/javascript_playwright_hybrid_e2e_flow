import { BasePage } from "./BasePage";

export class CartPage extends BasePage{
    constructor(page){
        super(page);
        this.addToCartBtn = this.page.locator('//button[text()="Add to cart"]');
        this.cartButton = this.page.locator('//a[@data-test="shopping-cart-link"]');
        this.cartItems = page.locator('.cart-item');
        this.prices = this.page.locator('//div[@class="inventory_item_price"]');
        this.total = this.page.locator('//div[@class="inventory_item_price"]');
    }

    async addProductToCartByIndex(count){
        for(let i=1;i<=count;i++){
        await this.addToCartBtn.nth(i).click();
        }
    }

    async navigateToCart(){
        await this.cartButton.click();
    }

    async getUIPrices(){
        const prices = await this.prices.allTextContents();
        return prices.map(p => Number(p.replace('$','')));
    }
}