abstract class Animal {
  protected name: string;
  protected color: string;
  protected type: string;
  constructor(name: string, color: string, type: string) {
    this.name = name;
    this.color = color;
    this.type = type;
  }

  getInfo(): string {
    return `Name: ${this.name}, Color: ${this.color}, Type: ${this.type}`;
  }

  eat(): string {
    return `${this.name} is eating generically`;
  }
  sleep(): string {
    return `${this.name} is sleeping`;
  }
  makeSound(): string {
    return `${this.name} makes a generic sound`;
  }
}

class WaterAnimal extends Animal {
  constructor(name: string, color: string) {
    super(name, color, "Water");
  }
  swim(): string {
    return `${this.name} is swimming`;
  }
  eat(): string {
    return `${this.name} is eating fish`;
  }
  makeSound(): string {
    return `${this.name} bubbles`;
  }
}

class AirAnimal extends Animal {
  constructor(name: string, color: string) {
    super(name, color, "Air");
  }
  fly(): string {
    return `${this.name} is flying`;
  }
  eat(): string {
    return `${this.name} is eating seeds`;
  }
  makeSound(): string {
    return `${this.name} chirps`;
  }
}

class LandAnimal extends Animal {
  constructor(name: string, color: string) {
    super(name, color, "Land");
  }
  walk(): string {
    return `${this.name} is walking`;
  }
  eat(): string {
    return `${this.name} is eating grass`;
  }
  makeSound(): string {
    return `${this.name} roars`;
  }
}

interface IEnclosure {
  addAnimal(animal: Animal): void;
  removeAnimal(animal: Animal): void;
  getAnimals(): Animal[];
  getCapacity(): number;
  getInfo(): string;
}

abstract class Enclosure implements IEnclosure {
  protected height: number;
  protected width: number;
  protected length: number;
  protected capacity: number;
  protected animals: Animal[] = [];

  constructor(height: number, width: number, length: number, capacity: number) {
    this.height = height;
    this.width = width;
    this.length = length;
    this.capacity = capacity;
  }

  addAnimal(animal: Animal): void {
    if (this.animals.length < this.capacity) {
      this.animals.push(animal);
    } else {
      console.log("Enclosure full!");
    }
  }

  removeAnimal(animal: Animal): void {
    this.animals = this.animals.filter((a) => a !== animal);
  }

  getAnimals(): Animal[] {
    return this.animals;
  }

  getCapacity(): number {
    return this.capacity;
  }

  abstract getInfo(): string;
}

class AirEnclosure extends Enclosure {
  constructor(height: number, width: number, length: number, capacity: number) {
    super(height, width, length, capacity);
  }
  getInfo(): string {
    return `Air Enclosure (Dims: ${this.height}x${this.width}x${this.length}, Capacity: ${this.capacity})`;
  }
}

class LandEnclosure extends Enclosure {
  constructor(height: number, width: number, length: number, capacity: number) {
    super(height, width, length, capacity);
  }
  getInfo(): string {
    return `Land Enclosure (Dims: ${this.height}x${this.width}x${this.length}, Capacity: ${this.capacity})`;
  }
}

class WaterEnclosure extends Enclosure {
  constructor(height: number, width: number, length: number, capacity: number) {
    super(height, width, length, capacity);
  }
  getInfo(): string {
    return `Water Enclosure (Dims: ${this.height}x${this.width}x${this.length}, Capacity: ${this.capacity})`;
  }
}

abstract class Employee {
  private username: string;
  private email: string;
  private dept: string;
  constructor(username: string, email: string, dept: string) {
    this.username = username;
    this.email = email;
    this.dept = dept;
  }
  getUsername(): string {
    return this.username;
  }
  getEmail(): string {
    return this.email;
  }
  getDept(): string {
    return this.dept;
  }
}

interface IEmployeePay {
  getSalary(): number;
  getHours(): number;
  setHours(hours: number): void;
  setSalary(salary: number): void;
}

interface ICaretaker {
  careForAnimal(animal: Animal): string;
  cleanEnclosure(enclosure: IEnclosure): string;
}

class ZooKeeper extends Employee implements IEmployeePay, ICaretaker {
  private salary: number = 0;
  private hours: number = 0;
  private assignedEnclosure: IEnclosure | null = null;
  constructor(username: string, email: string) {
    super(username, email, "GUARD");
  }
  getSalary(): number {
    return this.salary;
  }
  getHours(): number {
    return this.hours;
  }
  setHours(hours: number): void {
    this.hours = hours;
  }
  setSalary(salary: number): void {
    this.salary = salary;
  }

  careForAnimal(animal: Animal): string {
    return `${this.getUsername()} is caring for ${animal.getInfo()}`;
  }

  cleanEnclosure(enclosure: IEnclosure): string {
    return `${this.getUsername()} is cleaning ${enclosure.getInfo()}`;
  }

  assignToEnclosure(enclosure: IEnclosure): void {
    this.assignedEnclosure = enclosure;
  }
  getAssignedEnclosure(): IEnclosure | null {
    return this.assignedEnclosure;
  }
}

class AnimalFeeder extends Employee implements IEmployeePay, ICaretaker {
  private salary: number = 0;
  private hours: number = 0;
  private assignedEnclosure: IEnclosure | null = null;

  constructor(username: string, email: string) {
    super(username, email, "FEEDER");
  }

  getSalary(): number {
    return this.salary;
  }
  getHours(): number {
    return this.hours;
  }
  setHours(hours: number): void {
    this.hours = hours;
  }
  setSalary(salary: number): void {
    this.salary = salary;
  }

  careForAnimal(animal: Animal): string {
    return `${this.getUsername()} is feeding ${animal.eat()}`;
  }
  cleanEnclosure(enclosure: IEnclosure): string {
    return `${this.getUsername()} is preparing food in ${enclosure.getInfo()}`;
  }

  assignToEnclosure(enclosure: IEnclosure): void {
    this.assignedEnclosure = enclosure;
  }

  getAssignedEnclosure(): IEnclosure | null {
    return this.assignedEnclosure;
  }
}

class Visitor {
  private name: string;
  private observedEnclosures: IEnclosure[] = [];

  constructor(name: string) {
    this.name = name;
  }

  observeEnclosure(enclosure: IEnclosure): string {
    this.observedEnclosures.push(enclosure);
    return `${this.name} is observing ${enclosure.getInfo()}`;
  }

  getObservedCount(): number {
    return this.observedEnclosures.length;
  }
}

interface IReportGenerator {
  generateAnimalReport(animals: Animal[]): string;
  generateVisitorReport(visitors: Visitor[]): string;
}

class SimpleReportGenerator implements IReportGenerator {
  generateAnimalReport(animals: Animal[]): string {
    return `Daily Animal Report: ${animals
      .map((a) => a.getInfo() + " - " + a.makeSound())
      .join("\n")}`;
  }

  generateVisitorReport(visitors: Visitor[]): string {
    return `Visitor Count: ${
      visitors.length
    }, Total Observations: ${visitors.reduce(
      (sum, v) => sum + v.getObservedCount(),
      0
    )}`;
  }
}

class ZooSystem {
  private zookeepers: ZooKeeper[] = [];
  private feeders: AnimalFeeder[] = [];
  private enclosures: IEnclosure[] = [];
  private visitors: Visitor[] = [];
  private reportGenerator: IReportGenerator;

  constructor(reportGenerator: IReportGenerator) {
    this.reportGenerator = reportGenerator;
  }

  addZookeeper(zookeeper: ZooKeeper): void {
    this.zookeepers.push(zookeeper);
  }

  addFeeder(feeder: AnimalFeeder): void {
    this.feeders.push(feeder);
  }

  addEnclosure(enclosure: IEnclosure): void {
    this.enclosures.push(enclosure);
  }

  addVisitor(visitor: Visitor): void {
    this.visitors.push(visitor);
  }

  getDailyAnimalReport(): string {
    const allAnimals = this.enclosures.flatMap((e) => e.getAnimals());
    return this.reportGenerator.generateAnimalReport(allAnimals);
  }

  getVisitorReport(): string {
    return this.reportGenerator.generateVisitorReport(this.visitors);
  }
}

const zoo = new ZooSystem(new SimpleReportGenerator());

const airEnclosure = new AirEnclosure(100, 100, 100, 5);
const landEnclosure = new LandEnclosure(50, 200, 200, 3);
const waterEnclosure = new WaterEnclosure(20, 100, 300, 10);

zoo.addEnclosure(airEnclosure);
zoo.addEnclosure(landEnclosure);
zoo.addEnclosure(waterEnclosure);

// Animals + Composition
const falcon = new AirAnimal("Falcon", "Gray");
const lion = new LandAnimal("Lion", "Golden");
const shark = new WaterAnimal("Shark", "Gray");

airEnclosure.addAnimal(falcon);
landEnclosure.addAnimal(lion);
waterEnclosure.addAnimal(shark);

// Staff + Association
const keeper = new ZooKeeper("zookeeper", "zookeeper@gmail.com");
keeper.setSalary(50000);
keeper.assignToEnclosure(airEnclosure);
zoo.addZookeeper(keeper);

const feeder = new AnimalFeeder("feeder", "feeder@gmail.com");
feeder.setSalary(40000);
feeder.assignToEnclosure(landEnclosure);
zoo.addFeeder(feeder);

// Visitors + Association
const visitor1 = new Visitor("Alice");
visitor1.observeEnclosure(airEnclosure);
visitor1.observeEnclosure(landEnclosure);
zoo.addVisitor(visitor1);

console.log(keeper.careForAnimal(falcon));
console.log(feeder.careForAnimal(lion));
console.log(zoo.getDailyAnimalReport());
console.log(zoo.getVisitorReport());
