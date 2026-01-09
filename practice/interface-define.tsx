/**
 * Background: A payment processing system handles different types of transactions. Credit card payments require additional verification, such as CVV and expiry date checks, while bank transfers need account number validation. Digital wallets only need an email or phone number for verification. The payment interface should not impose methods that are irrelevant to each payment type.

Question: How would you design interfaces?
 */

interface ICreditCardValidation {
  validate(cardNumber: string, cvv: string, expiry: string): boolean;
}

interface IBankAccountValidation {
  validate(accountNumber: string): boolean;
}

interface IWalletValidation {
  validate(identifier: string, otp: string): boolean;
}

class CreditCard implements ICreditCardValidation {
  validate(cardNumber: string, cvv: string, expiry: string): boolean {
    console.log("Validating credit card");
    return true;
  }
}

class BankAccount implements IBankAccountValidation {
  validate(accountNumber: string): boolean {
    console.log("Validating bank account");
    return true;
  }
}

class MobileWallet implements IWalletValidation {
  validate(identifier: string, otp: string): boolean {
    console.log("Validating wallet");
    return true;
  }
}

class PaymentProcessor<T> {
  process(method: T, validateFn: (method: T) => boolean): boolean {
    return validateFn(method);
  }
}

const processor = new PaymentProcessor();

const card = new CreditCard();
processor.process(card, () =>
  card.validate("4111111111111111", "123", "12/26")
);

const bank = new BankAccount();
processor.process(bank, () => bank.validate("ACC-987654"));

const wallet = new MobileWallet();
processor.process(wallet, () => wallet.validate("017XXXXXXXX", "456789"));
