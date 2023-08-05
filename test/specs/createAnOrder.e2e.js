const page = require('../../page');
const helper = require('../../helper')

describe('Create an order', () => {
   /* it('should open phone number modal', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumberButton = await $(page.phoneNumberButton);
        await phoneNumberButton.waitForDisplayed();
        await phoneNumberButton.click();
        const pnoneNumberModal = await $(page.phoneNumberModal);
        await expect(pnoneNumberModal).toBeExisting();
    })*/

    it('Should wait for the taxi driver', async () => {
        // 1: call taxi to address !DONE
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const addressFilled = await $(page.addressFilled);
        await addressFilled.waitForDisplayed();
        await expect(await $(addressFilled)).toBeExisting();
    })

     // 2: selecting the supportive class !DONE
     it('Pick the Supportive Class', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.supportiveClass();
const supportClassTest = await $(page.supportClassTest);
await supportClassTest.waitForDisplayed();
await expect(await $(supportClassTest)).toBeExisting();
})

//  3: input phone number !DONE
it('Adding Phone Number', async () => { 
    await browser.url(`/`)
    await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
const phoneNumber = helper.getPhoneNumber("+1");
await page.submitPhoneNumber(phoneNumber);
await expect (await helper.getElementByText(phoneNumber)).toBeExisting();
})
// 4: Adding a payment card !DONE
it('Adding Payment Method', async () => {
    await browser.url(`/`)
    await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
await page.addPaymentMethodCard();
//test check
const cardPaymentMethodIcon = await $(page.cardPaymentMethodIcon);
await cardPaymentMethodIcon.waitForDisplayed();
await expect(await $(cardPaymentMethodIcon)).toBeExisting();
})
// 5: adding a comment  !DONE
it('Adding a Comment', async () => {
    await browser.url(`/`)
await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
await page.addComment();
const message = await $(page.driverComment).getValue();
await browser.pause(1000);
await expect(message).toBe("Get some whiskey");
})

// 6: ordering blanket and hankerchief
it('Adding Blanket and Hankerchief', async () => {
    await browser.url(`/`)
    await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
    await page.supportiveClass();
await page.addBlanketHankerchief();
const blanketHank = await $(page.blanketHank);
await expect (blanketHank).toBeEnabled();

})
// 7 ordering ice cream !DONE
it('Adding Ice Cream', async () => {
    await browser.url(`/`)
    await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
    await page.supportiveClass();
    await page.addIceCream();
const iceCreamValue = await $(page.iceCreamCounterValue).getText();
await expect(iceCreamValue).toBe("2");
})
// 8 submitting order need to finish
it('Finishing The Order', async () => {
    await browser.url(`/`)
    await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
    await page.addComment();
    await page.addIceCream();
await page.submitFinalOrder();
await browser.pause(40000);
const finalOrderCheck = await $(page.finalOrderCheck);
await finalOrderCheck.waitForDisplayed();
await expect(await $(finalOrderCheck)).toBeExisting();

})
    })