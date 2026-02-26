import {test, expect} from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { CartPage } from '../../pages/CartPage';
import { CartAPI } from '../api/CARTAPI';


test('Hybrid Login Test', async({page, request}) => {
const loginPage = new LoginPage(page);
const cartPage = new CartPage(page);
const api = new CartAPI(request);

//login
await loginPage.openUrl();
await loginPage.applicationLogin('standard_user','secret_sauce');
expect(page.locator('//span[@data-test="title"]'));

await cartPage.addProductToCartByIndex(3);
await cartPage.navigateToCart();


  // 🖥️ UI Data
  const uiPrices = await cartPage.getUIPrices();
  console.log(uiPrices);
//   const uiTotal = await cartPage.getUITotal();

  // 🔢 Calculate using reduce()
//   const calculatedTotal = uiPrices.reduce((sum, price) => sum + price, 0);

//   expect(calculatedTotal).toBe(uiTotal);

  // 🌐 API Data
  const apiResponse = await api.getCart();
  console.log(apiResponse);

  // Schema Validation
//   expect(apiResponse).toHaveProperty('items');
//   expect(Array.isArray(apiResponse.items)).toBeTruthy();

//   // Compare UI vs API
//   const apiPrices = apiResponse.items.map(item => item.price);

//   expect(apiPrices).toEqual(uiPrices);
    
});