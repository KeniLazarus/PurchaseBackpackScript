//Page with purchase confirmation, this is step three of the checkout process
//Script confirms the existence of the page, thereby confirming that the purchase item process has been completed.

class CheckoutComplete {

    get PurchaseConfirmationCheckmark () {return $('//img[@class="pony_express"]')};

async OrderCompleted () {
    await expect(this.PurchaseConfirmationCheckmark).toBeExisting};}

export default new CheckoutComplete();