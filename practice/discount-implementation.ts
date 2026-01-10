/**
 Background: An e-commerce platform applies different discounts based on promotions or customer segments (e.g., seasonal discounts, loyalty discounts, bulk purchase discounts). The marketing team frequently introduces new types of discounts. The system should allow adding new discount types without modifying the code for existing discounts.

Question: How would you design the discount calculation system so that new discount types can be introduced without changing the existing discount logic?
 */
interface DiscountStrategy {
  calculate(price: number): number;
}

class SeasonalDiscount implements DiscountStrategy {
  private discountPercentage = 0.15;

  calculate(price: number): number {
    return price * this.discountPercentage;
  }
}

class LoyaltyDiscount implements DiscountStrategy {
  private discountPercentage = 0.1;

  calculate(price: number): number {
    return price * this.discountPercentage;
  }
}

class BulkPurchaseDiscount implements DiscountStrategy {
  private threshold = 1000;
  private discountPercentage = 0.2;

  calculate(price: number): number {
    if (price >= this.threshold) {
      return price * this.discountPercentage;
    }
    return 0;
  }
}

class FirstOrderDiscount implements DiscountStrategy {
  calculate(price: number): number {
    return price * 0.25;
  }
}

class Order {
  private itemsTotal: number;
  private discountStrategy: DiscountStrategy;

  constructor(itemsTotal: number, discountStrategy: DiscountStrategy) {
    this.itemsTotal = itemsTotal;
    this.discountStrategy = discountStrategy;
  }

  setDiscountStrategy(strategy: DiscountStrategy): void {
    this.discountStrategy = strategy;
  }

  getFinalPrice(): number {
    const discountAmount = this.discountStrategy.calculate(this.itemsTotal);
    return this.itemsTotal - discountAmount;
  }

  showCalculation(): void {
    const discount = this.discountStrategy.calculate(this.itemsTotal);
    console.log(`Total: ${this.itemsTotal.toFixed(2)}`);
    console.log(`Discount: ${discount.toFixed(2)}`);
    console.log(`Final price: ${(this.itemsTotal - discount).toFixed(2)}`);
  }
}

const order1 = new Order(1200, new SeasonalDiscount());
order1.showCalculation();

const order2 = new Order(2500, new BulkPurchaseDiscount());
order2.showCalculation();

const vipOrder = new Order(800, new LoyaltyDiscount());
vipOrder.showCalculation();

const firstOrder = new Order(999, new FirstOrderDiscount());
firstOrder.showCalculation();
