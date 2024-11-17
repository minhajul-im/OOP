/**
 Create a BankAccount class that includes properties for account number, account name, and balance. 
The class should have methods for withdrawing, depositing, and transferring funds between accounts. 
Ensure that withdrawals or transfers do not result in a negative balance.
 */

class BankAccount<T> {
  private accountName: T;
  private accountNumber: string;
  private balance: number;

  constructor(accountName: T, accountNumber: string, balance: number) {
    this.accountName = accountName;
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  getBalance(): number {
    return this.balance;
  }

  getAccountInfo(): string {
    return `Account Name: ${this.accountName} | Account Number: ${this.accountNumber} | Account Balance: ${this.balance}`;
  }

  private checkAmount(amount: number): boolean {
    if (amount <= 0) return false;
    if (this.balance < amount) return false;
    return true;
  }

  deposit(amount: number): boolean {
    if (!this.checkAmount(amount)) return false;
    this.balance += amount;
    return true;
  }

  withdraw(amount: number): boolean {
    if (!this.checkAmount(amount)) return false;
    this.balance -= amount;
    return true;
  }

  transfer(amount: number, targetAccount: BankAccount<T>): boolean {
    if (!this.checkAmount(amount)) {
      return false;
    }
    this.withdraw(amount);
    targetAccount.deposit(amount);
    return true;
  }
}

const account1 = new BankAccount<string>("Mr. Minhaj", "1010101010101", 3000);
const account2 = new BankAccount<string>("Mr. John", "2020202020202", 1000);

console.log("minhaj", account1.deposit(2000));
console.log("minhaj", account1.withdraw(12000));
console.log("minhaj", account1.withdraw(1000));

console.log("minhaj", account1.getBalance());
console.log("john", account2.getBalance());

console.log("minhaj", account1.getAccountInfo());
console.log("john", account2.getAccountInfo());
account1.transfer(500, account2);
console.log("minhaj", account1.getBalance());
console.log("john", account2.getBalance());
