class CheckoutComplete {

    get PurchaseConfirmationCheckmark () {return $('//img[@class="pony_express"]')};

async OrderCompleted () {
    await expect(this.PurchaseConfirmationCheckmark).toBeExisting};

}

export default new CheckoutComplete();