class CheckoutStepTwo {

    get FinishButton () {return $('//button[@id="finish"]')};

async CheckoutPageTwoIdentifier () {
    await expect(this.FinishButton).toBeExisting();}

async ClickOnFinish () {
    await this.FinishButton.click ();}



}

export default new CheckoutStepTwo();