/**
 Background: An e-commerce platform manages products with various types, such as physical goods, digital downloads, and services. Physical goods need methods for shipping, inventory tracking, and delivery, while digital products only require download and licensing methods. Service-based products may need scheduling functionality. The product interface should avoid imposing irrelevant methods on different product types. 
 
 * Question: How would you design interfaces for these different product types?
 */

interface IDigitalProduct {
  handleProduct(licensing: string): void;
}
class DigitalProduct implements IDigitalProduct {
  private name: string;
  private price: number;

  constructor(name: string, price: number) {
    (this.name = name), (this.price = price);
  }
  handleProduct(licensing: string): void {
    //payment
    // send notify
    // access download
    this.download(licensing);

    console.log("licensing checking...");
  }
  private download(licensing: string) {
    console.log("downloading...");
  }
  getPrice(): number {
    return this.price;
  }
  getInfo(): string {
    return this.name;
  }
}

interface IPhysicalProduct {
  handleProduct(shipping: string): void;
}
class PhysicalProduct implements IPhysicalProduct {
  handleProduct(shipping: string): void {
    // check inventory,
    // calculate price,
    // payment
    // sent notification
  }
}

interface IServiceProduct {
  handleProduct(): void;
}
class ServiceProduct implements IServiceProduct {
  handleProduct(): void {
    // check the user info
    // payment process
    // notify email
    // service access
  }
}

class ProductManagement<T> {
  placeOrder(product: T, onOrderFn: (method: T) => void) {
    return onOrderFn(product);
  }
}

const manage = new ProductManagement();

const digital = new DigitalProduct("digital", 123112);
manage.placeOrder(digital, () => digital.handleProduct("licensing"));

const physical = new PhysicalProduct();
manage.placeOrder(physical, () => physical.handleProduct("shipping"));

const service = new ServiceProduct();
manage.placeOrder(service, () => service.handleProduct());
