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
})
    it('Should wait for the taxi driver', async () => {
        // 1: call taxi to address
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
    })

     // 2: selecting the supportive class need to add test
     it('Click on Supportive Class', async() => {
     await browser.url('/')
     await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await page.supportiveClass();
     })
//  3: input phone number

const phoneNumber = helper.getPhoneNumber("+1");
await page.submitPhoneNumber(phoneNumber);
await expect (await helper.getElementByText(phoneNumber)).toBeExisting();

// 4: Adding a payment card

await page.addPaymentMethodCard();
//test check
const cardPaymentMethodIcon = await $(page.cardPaymentMethodIcon);
await cardPaymentMethodIcon.waitForDisplayed();
await expect(await $(cardPaymentMethodIcon)).toBeExisting();

// 5: adding a comment  test done

await page.addComment();

const message = await $(page.driverComment).getValue();
await expect(message).toBe("Get some whiskey");

// 6: ordering blanket and hankerchief
await page.addBlanketHankerchief();

// 7 ordering ice cream finish test

await page.addIceCream();

await browser.pause(1000);
// test check
const iceCreamValue = await $(page.iceCreamCounterValue).getText();
await expect(iceCreamValue).toBe("2");


// 8 submitting order need to finish
await page.submitFinalOrder();

await browser.pause(2000);
    })
})    