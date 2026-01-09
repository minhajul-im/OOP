/**
 * Background: An e-commerce system stores order data in a SQL database. Later, there may be a need to switch to a NoSQL database or another storage method for scalability. The high-level order processing logic should remain unaffected by these changes.

Question: How would you structure the data persistence layer for order data so that the core order processing logic can work with any storage type without modification?
 */

interface IOrder {
  getId(): string;
  getTotal(): number;
  getDetails(): {
    products: IProduct[];
    customer: Customer;
    total: number;
  };
}

class Customer {
  private name: string;
  private email: string;
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
  getInfo(): string {
    return `${this.name} (${this.email})`;
  }
}
interface IProduct {
  getProductId(): string;
  getProductName(): string;
  getQuantity(): number;
  getPrice(): number;
}
class Product implements IProduct {
  private id: string;
  private name: string;
  private quantity: number;
  private price: number;
  constructor(id: string, name: string, quantity: number, price: number) {
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.price = price;
  }
  getProductId(): string {
    return this.id;
  }
  getProductName(): string {
    return this.name;
  }
  getQuantity(): number {
    return this.quantity;
  }
  getPrice(): number {
    return this.price;
  }
}

class CalculatePrice {
  calculateTotal(products: IProduct[]): number {
    return products.reduce(
      (total, product) => total + product.getPrice() * product.getQuantity(),
      0
    );
  }
}

class Order implements IOrder {
  private id: string;
  private products: IProduct[];
  private customer: Customer;
  private total: number;
  constructor(products: IProduct[], customer: Customer) {
    this.id = `ORD-${Math.random().toString(36).substr(2, 9)}`;
    this.products = products;
    this.customer = customer;
    this.total = new CalculatePrice().calculateTotal(products);
  }
  getId(): string {
    return this.id;
  }
  getTotal(): number {
    return this.total;
  }

  getDetails(): {
    products: IProduct[];
    customer: Customer;
    total: number;
  } {
    return {
      products: this.products,
      customer: this.customer,
      total: this.total,
    };
  }
}

interface ISroteDB {
  storeOrder(order: IOrder): void;
  retrieveOrder(orderId: string): IOrder;
  updateOrderStatus(orderId: string, newStatus: string): void;
  deleteOrder(orderId: string): void;
}

class StoreSqlDB implements ISroteDB {
  storeOrder(order: IOrder): void {}
  retrieveOrder(orderId: string): IOrder {
    return new Order([], new Customer("", ""));
  }
  updateOrderStatus(orderId: string, newStatus: string): void {}
  deleteOrder(orderId: string): void {}
}

class OrderSystem {
  private storeDB: ISroteDB;
  constructor(storeDB: ISroteDB) {
    this.storeDB = storeDB;
  }
  placeOrder(products: IProduct[], customer: Customer): void {
    const order = new Order(products, customer);
    this.storeDB.storeOrder(order);
  }
}

const orderSystem = new OrderSystem(new StoreSqlDB());
orderSystem.placeOrder([], new Customer("", ""));
