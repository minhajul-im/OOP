// /**
//  * Background: A multi-functional printer can print, scan, copy, and fax. However, some models are simpler and only support printing and scanning, while others support all four functions. The printer's interface should not force simpler models to implement unnecessary methods.

// Question: How would you design interfaces for the printer functions?
//  */

// interface IPrint {
//   print(): void;
//   scan(): void;
// }
// abstract class Printer {
//   print(): void {}
//   scan(): void {}
// }

// class MultiFunction extends Printer {
//   print(): void {
//     console.log("Method not implemented.");
//   }
//   scan(): void {
//     console.log("Method not implemented.");
//   }
//   copy(): void {
//     console.log("Method not implemented.");
//   }
//   fax(): void {
//     console.log("Method not implemented.");
//   }
// }

// class NormalPRinter extends Printer {
//   print(): void {
//     console.log("Method not implemented.");
//   }
//   scan(): void {
//     console.log("Method not implemented.");
//   }
// }

// class PrinterSystem {
//   printer: Printer;
//   constructor(printer: Printer) {
//     this.printer = printer;
//   }
//   print() {
//     this.printer.print();
//   }
//   scan() {
//     this.printer.scan();
//   }
// }

/**
 * Background: A payment gateway processes various types of transactions—such as credit, debit, and digital wallets—for e-commerce sites. It must validate transaction details, communicate with banks, log transactions, and send confirmation or error responses. The platform also requires fraud detection and report generation for each transaction type. 

Question: What are the classes you might need in this software solution?
 */

interface IReport {
  generateReport(): void;
}

class ReportGenerator implements IReport {
  generateReport(): void {
    console.log("Method not implemented.");
  }
}

interface IPayment {
  processPayment(): void;
}

class PaymentProcessor implements IPayment {
  processPayment(): void {
    console.log("Method not implemented.");
  }
}

class PaymentGateway {
  paymentProcessor: PaymentProcessor;
  reportGenerator: ReportGenerator;
  constructor(
    paymentProcessor: PaymentProcessor,
    reportGenerator: ReportGenerator
  ) {
    this.paymentProcessor = paymentProcessor;
    this.reportGenerator = reportGenerator;
  }
}
