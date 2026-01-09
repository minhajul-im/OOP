/**
 * Background: A vehicle tracking system calculates the speed for various vehicle types (e.g., bikes, cars, airplanes). The base Vehicle class defines basic speed-related methods, and subclasses such as Bike, Car, and Airplane may need different speed limit handling. The system should calculate speeds consistently across all vehicle types.

Question: How would you design the Vehicle and its subclasses to allow consistent speed calculations without needing different handling for each type?
 */

interface IVehicle {
  calculateSpeed(): number;
  getInfo(): string;
}

abstract class VehicleTrack implements IVehicle {
  protected speedLimit: number;
  protected name: string;
  protected currentSpeed: number;

  constructor(name: string, currentSpeed: number, speedLimit: number) {
    this.name = name;
    this.currentSpeed = currentSpeed;
    this.speedLimit = speedLimit;
  }

  calculateSpeed(): number {
    return Math.min(this.currentSpeed, this.speedLimit);
  }

  getInfo(): string {
    return `${this.name} (Type: ${this.getVehicleType()})`;
  }

  protected abstract getVehicleType(): string;
}

class Bike extends VehicleTrack {
  constructor(name: string, currentSpeed: number) {
    super(name, currentSpeed, 30);
  }

  protected getVehicleType(): string {
    return "Bike";
  }

  calculateSpeed(): number {
    const speed = super.calculateSpeed();
    return speed > 20 ? speed * 0.9 : speed;
  }
}

class Car extends VehicleTrack {
  constructor(name: string, currentSpeed: number) {
    super(name, currentSpeed, 200);
  }

  protected getVehicleType(): string {
    return "Car";
  }

  calculateSpeed(): number {
    return super.calculateSpeed() * 0.95;
  }
}

class Airplane extends VehicleTrack {
  private altitude: number;

  constructor(name: string, currentSpeed: number, altitude: number) {
    super(name, currentSpeed, 900);
    this.altitude = altitude;
  }

  protected getVehicleType(): string {
    return "Airplane";
  }

  calculateSpeed(): number {
    const baseSpeed = super.calculateSpeed();
    return baseSpeed + this.altitude / 1000;
  }

  getInfo(): string {
    return `${super.getInfo()} at altitude ${this.altitude} ft`;
  }
}

class VehicleSystem {
  private vehicles: IVehicle[] = [];

  addVehicle(vehicle: IVehicle): void {
    this.vehicles.push(vehicle);
  }

  calculateSpeedForVehicle(vehicle: IVehicle): void {
    console.log(
      `${vehicle.getInfo()} - Calculated speed: ${vehicle.calculateSpeed()} km/h`
    );
  }

  calculateSpeedForAll(): void {
    this.vehicles.forEach((v) => {
      this.calculateSpeedForVehicle(v);
    });
  }
}

const vehicleSystem = new VehicleSystem();
const bike = new Bike("Mountain Bike", 25);
const car = new Car("Sedan", 150);
const airplane = new Airplane("Jet", 800, 30000);
vehicleSystem.addVehicle(bike);
vehicleSystem.addVehicle(car);
vehicleSystem.addVehicle(airplane);

vehicleSystem.calculateSpeedForVehicle(bike);
vehicleSystem.calculateSpeedForVehicle(car);
vehicleSystem.calculateSpeedForVehicle(airplane);

vehicleSystem.calculateSpeedForAll();
