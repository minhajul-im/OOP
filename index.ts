interface IParking {
  park(positionNumber: number): void;
  unpark(): void;
  getType(): string;
}

class Bike implements IParking {
  private name: string;
  private type: string = "Bike";
  private parkingPosition: number | null = null;

  constructor(name: string) {
    this.name = name;
  }
  getType(): string {
    return this.type;
  }

  getInfo(): string {
    return `Name: ${this.name}, Type: ${this.type}`;
  }

  park(positionNumber: number): void {
    this.parkingPosition = positionNumber;
    console.log(`Bike is parking at position ${this.parkingPosition}`);
  }

  unpark(): void {
    this.parkingPosition = null;
    console.log(`Bike is unparking from position ${this.parkingPosition}`);
  }
}

class Car implements IParking {
  private name: string;
  private type: string = "Car";
  private parkingPosition: number | null = null;
  constructor(name: string) {
    this.name = name;
  }

  getType(): string {
    return this.type;
  }

  getInfo(): string {
    return `Name: ${this.name}, Type: ${this.type}`;
  }

  park(positionNumber: number): void {
    this.parkingPosition = positionNumber;
    console.log(`Car is parking at position ${this.parkingPosition}`);
  }

  unpark(): void {
    this.parkingPosition = null;
    console.log(`Car is unparking from position ${this.parkingPosition}`);
  }
}

class ParkingManager {
  private CART_SIZE: number = 2;
  private parkingSlots: IParking[] = [];
  private capacity: number;
  private currentCapacity: number = 0;
  private bikeCount: number = 0;
  private carCount: number = 0;

  constructor(capacity: number) {
    this.capacity = capacity;
  }

  addVehicle(vehicle: IParking) {
    if (this.currentCapacity < this.capacity) {
      if (
        vehicle.getType() === "Car" &&
        this.capacity - this.currentCapacity <= this.CART_SIZE
      ) {
        this.carCount++;
      } else if (vehicle.getType() === "Bike") {
        this.bikeCount++;
      }
      this.currentCapacity++;
      this.parkingSlots.push(vehicle);
      vehicle.park(this.currentCapacity);
      console.log(`Added ${vehicle.getType()}`);
    } else {
      console.log("Parking is full");
    }
  }

  removeVehicle(position: number) {
    const vehicle = this.parkingSlots[position - 1];
    vehicle.unpark();
    if (vehicle.getType() === "Car") {
      this.carCount--;
    } else if (vehicle.getType() === "Bike") {
      this.bikeCount--;
    }
    this.currentCapacity--;
    this.parkingSlots.splice(position - 1, 1);
  }
}

// Test
const parkingManager = new ParkingManager(4);
const bike = new Bike("Bike");
const car = new Car("Car");

parkingManager.addVehicle(bike);
parkingManager.addVehicle(car);
parkingManager.removeVehicle(1);
