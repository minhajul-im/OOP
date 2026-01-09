/**
 * Background: An online store needs a backend to handle order placement, track payment, and manage shipment information. Each order involves checking inventory, processing payments, and updating shipment status. The system should also notify customers of order status changes and generate invoices for each order.

Question: What are the classes you might need in this software solution?
 */

/**
 * Background: An online store needs a backend to handle order placement, track payment, and manage shipment information. Each order involves checking inventory, processing payments, and updating shipment status. The system should also notify customers of order status changes and generate invoices for each order.

Question: What are the classes you might need in this software solution?
 */

// Define data structures for clarity (abstraction, type safety)
interface IProduct {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

interface ICustomer {
  name: string;
  email: string; // For notifications
  address: string;
  city: string;
  state: string;
  zip: string;
}

class CalculatePrice {
  calculateTotal(products: IProduct[]): number {
    return products.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  }
}

class Order {
  private id: string;
  private products: IProduct[];
  private customer: ICustomer;
  private total: number;
  private status: string = "Pending";

  constructor(products: IProduct[], customer: ICustomer) {
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

  getCustomerEmail(): string {
    return this.customer.email;
  }

  updateStatus(newStatus: string): void {
    this.status = newStatus;
  }

  getDetails(): {
    products: IProduct[];
    customer: ICustomer;
    total: number;
    status: string;
  } {
    return {
      products: this.products,
      customer: this.customer,
      total: this.total,
      status: this.status,
    };
  }
}

interface IInvoice {
  generateInvoice(order: Order): void;
}

class Invoice implements IInvoice {
  generateInvoice(order: Order): void {
    console.log(
      `Generating invoice for order ${order.getId()}: Total $${order.getTotal()}`
    );
  }
}

interface IShipment {
  trackShipment(order: Order): string;
  updateShipmentStatus(order: Order, newStatus: string): void;
}

class Shipment implements IShipment {
  private trackingId: string | null = null;

  trackShipment(order: Order): string {
    this.trackingId = `TRK-${order.getId()}`;
    console.log(
      `Tracking shipment for order ${order.getId()}: ${this.trackingId}`
    );
    return this.trackingId;
  }

  updateShipmentStatus(order: Order, newStatus: string): void {
    order.updateStatus(newStatus);
    console.log(
      `Updated shipment status for order ${order.getId()} to ${newStatus}`
    );
  }
}

interface IInventory {
  checkInventory(products: IProduct[]): boolean;
}

class Inventory implements IInventory {
  checkInventory(products: IProduct[]): boolean {
    console.log(
      `Checking inventory for products: ${products
        .map((p) => p.name)
        .join(", ")}`
    );
    return true;
  }
}

interface IPayment {
  processPayment(order: Order): boolean;
}

class Payment implements IPayment {
  processPayment(order: Order): boolean {
    console.log(
      `Processing payment of $${order.getTotal()} for order ${order.getId()}`
    );
    return true;
  }
}

interface INotify {
  sendNotification(order: Order, message: string): void;
}

class Notify implements INotify {
  sendNotification(order: Order, message: string): void {
    console.log(
      `Sending notification to ${order.getCustomerEmail()}: ${message}`
    );
  }
}

class OrderSystem {
  private invoice: IInvoice;
  private notify: INotify;
  private payment: IPayment;
  private inventory: IInventory;
  private shipment: IShipment;

  constructor(
    invoice: IInvoice,
    notify: INotify,
    payment: IPayment,
    inventory: IInventory,
    shipment: IShipment
  ) {
    this.invoice = invoice;
    this.notify = notify;
    this.payment = payment;
    this.inventory = inventory;
    this.shipment = shipment;
  }

  placeOrder(products: IProduct[], customer: ICustomer): void {
    const order = new Order(products, customer);

    if (!this.inventory.checkInventory(products)) {
      this.notify.sendNotification(order, "Order failed: Out of stock.");
      console.log("Out of stock");
      return;
    }

    if (!this.payment.processPayment(order)) {
      this.notify.sendNotification(order, "Order failed: Payment issue.");
      console.log("Payment failed");
      return;
    }

    this.shipment.updateShipmentStatus(order, "Processing");
    this.invoice.generateInvoice(order);
    this.shipment.trackShipment(order);
    this.shipment.updateShipmentStatus(order, "Shipped");
    this.notify.sendNotification(
      order,
      `Order ${order.getId()} placed successfully! Tracking: ${this.shipment.trackShipment(
        order
      )}`
    );

    console.log("Order placed successfully", order.getDetails());
  }
}

const orderSystem = new OrderSystem(
  new Invoice(),
  new Notify(),
  new Payment(),
  new Inventory(),
  new Shipment()
);
orderSystem.placeOrder(
  [
    { id: "P1", name: "Product 1", quantity: 2, price: 10 },
    { id: "P2", name: "Product 2", quantity: 1, price: 20 },
  ],
  {
    name: "John Doe",
    email: "john@example.com",
    address: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345",
  }
);
