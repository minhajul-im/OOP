enum ProductCategory{
    FRUIT = "fruit",
    VEGETABLE = "vegetable" ,
    ELECTRONICS = "electronics",
    CLOTHING = "clothing",
    GROCERIES = "groceries",
    BEAUTY = "beauty",
    BOOKS = "books",
    FURNITURE  = "furniture",
    MEDICINE = "medicine", 
    OTHER = "other"
}

abstract class Product {
    private name: string;
    private quantity: number;
    private price: number;
    private description: string;
    private category: ProductCategory;
    constructor(category: ProductCategory, name: string, quantity: number, price: number, description: string) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
        this.description = description;
        this.category = category;
    }

    setName(name: string){
        this.name = name;
    }
    getName(): string {
        return this.name;
    }
    setQuantity(quantity: number){
        this.quantity = quantity;
    }
    getQuantity(): number {
        return this.quantity;
    }
    setPrice(price: number){
        this.price = price;
    }
    getPrice(): number {
        return this.price;
    }
    setDescription(description: string){
        this.description = description;
    }
    getDescription(): string {
        return this.description;
    }
    setCategory(category: ProductCategory){
        this.category = category;
    }
    getCategory(): ProductCategory {
        return this.category;
    }
    isAvailable(): boolean {
        return this.quantity > 0;
    }
}


class Electronics extends Product {
    private warranty: number;

    constructor(name: string, quantity: number, price: number, description: string, warranty: number) {
        super(ProductCategory.ELECTRONICS, name, quantity, price, description);
        this.warranty = warranty;
    }
    setWarranty(warranty: number){
        this.warranty = warranty;
    }
    getWarranty(): number {
        return this.warranty;
    }
}

class Clothing extends Product {
    private size: string;
    private color: string;

    constructor(name: string, quantity: number, price: number, description: string, size: string, color: string) {
        super(ProductCategory.CLOTHING, name, quantity, price, description);
        this.size = size;
        this.color = color;
    }
    setSize(size: string){
        this.size = size;
    }
    getSize(): string {
        return this.size;
    }
    setColor(color: string){
        this.color = color;
    }
    getColor(): string {
        return this.color;
    }
}
class Other extends Product {
    constructor(name: string, quantity: number, price: number, description: string,) {
        super(ProductCategory.OTHER, name, quantity, price, description);
    } 
}

class ProductFactory {
    static create(category: ProductCategory, name: string, quantity: number, price: number, description: string): Product {
        switch (category) {
            case ProductCategory.ELECTRONICS:
                return new Electronics(name, quantity, price, description, 0);
            case ProductCategory.CLOTHING:
                return new Clothing(name, quantity, price, description, "", "");
            default:
                return new Other( name, quantity, price, description);
        }
    }
}

interface IWarehouse {
    addProduct(product: Product): void;
    removeProduct(product: Product): void;
    updateProduct(product: Product): void;
    getProducts(): Product[];
    getAvailableProduct(sku: string): Product | null;
}

class Warehouse implements IWarehouse {
    private products: Product[] = [];

    addProduct(product: Product): void {
        this.products.push(product);
    }

    removeProduct(product: Product): void {
        const index = this.products.indexOf(product);
        if (index !== -1) {
            this.products.splice(index, 1);
        }   
    }

    updateProduct(product: Product): void {
        const index = this.products.indexOf(product);
        if (index !== -1) {
            this.products[index] = product;
        }
    }

    getProducts(): Product[] {
        return this.products;
    }

    getAvailableProduct(sku: string): Product | null {
        return this.products.find(product => product.getName() === sku) || null;
    }
}

interface INotify {
    notify(message: string): void;
}

class Notify implements INotify {
    notify(message: string): void {
        console.log(message);
    }
}

class InventoryManager {
    private warehouses: IWarehouse[] = [];
    private static instance: InventoryManager;

    static getInstance(): InventoryManager {
        if (!InventoryManager.instance) {
            InventoryManager.instance = new InventoryManager();
        }
        return InventoryManager.instance;
    }

    addWarehouse(warehouse: IWarehouse): void {
        this.warehouses.push(warehouse);
    }

    getWarehouses(): IWarehouse[] {
        return this.warehouses;
    }

    getAvailableProduct(sku: string): Product | null {
        for (const warehouse of this.warehouses) {
            const product = warehouse.getAvailableProduct(sku);
            if (product) {
                return product;
            }
        }
        return null;
    }

    getAdminAlerts(notify: INotify) {
        const alerts: string[] = [];
        for (const warehouse of this.warehouses) {
            const products = warehouse.getProducts();
            for (const product of products) {
                if (!product.isAvailable()) {
                    alerts.push(`Product ${product.getName()} is out of stock!`);
                }
            }
        }
        notify.notify(alerts.join('\n'));
    }
}


const inventoryManager = InventoryManager.getInstance();

const warehouse1 = new Warehouse();
const warehouse2 = new Warehouse();

inventoryManager.addWarehouse(warehouse1);
inventoryManager.addWarehouse(warehouse2);

const product1 = ProductFactory.create(ProductCategory.OTHER, "Product 1", 10, 100, "Description 1");
const product2 = ProductFactory.create(ProductCategory.OTHER, "Product 2", 20, 200, "Description 2");

inventoryManager.getAdminAlerts(new Notify());
