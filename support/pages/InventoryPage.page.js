class InventoryPage {

    get SauceLabsBackpack () {return $('//div[@class="inventory_item_name"]')};
    get SauceLabsBackpackAddToCartButton () {return $('//button[@id="add-to-cart-sauce-labs-backpack"]')};
    get ShoppingCartButton () {return $('//div[@id="shopping_cart_container"]')};

async SauceLabsBackpackExists () {
    await expect(this.SauceLabsBackpack).toBeExisting()};

async SauceLabsBackpackAddToCart () {
    await this.SauceLabsBackpackAddToCartButton.click()};

async GoToCart () {
    await this.ShoppingCartButton.click()};

}


export default new InventoryPage();