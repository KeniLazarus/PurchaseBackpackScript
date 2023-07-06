class ShoppingCart {

    get CartPageName () {return $('//div[@class="title"]')};
    get CheckoutButton () {return $('//button[@id="checkout"]')};

async CartPageIdentifier () {
    await expect(this.CheckoutButton).toBeExisting()};

async CheckoutButtonClick () {
    await this.CheckoutButton.click();}


}

export default new ShoppingCart();