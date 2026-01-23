/** Design a Parking Lot system.
 * different type of vehicle (car, bike, bus)
 * payment system
 * check in and check out
 */

interface IPayment {
  pay(amount: number): boolean;
}

class CashPayment implements IPayment {
  pay(amount: number): boolean {
    return true;
  }
}

class CreditCardPayment implements IPayment {
  pay(amount: number): boolean {
    return true;
  }
}

enum PaymentType {
  CASH = "cash",
  CARD = "card",
}

class PaymentFactory {
  static create(type: string): IPayment {
    switch (type) {
      case "cash":
        return new CashPayment();
      case "card":
        return new CreditCardPayment();
      default:
        return new CashPayment();
    }
  }
}

enum VehicleFeeType {
  HOUR = "hour",
  DAY = "day",
}

interface IVehicleFee {
  calculateFee(
    vehicleType: VehicleType,
    feeType: VehicleFeeType,
    duration: number,
  ): number;
}

class BasicVehicleFee implements IVehicleFee {
  calculateFee(
    vehicleType: VehicleType,
    feeType: VehicleFeeType,
    duration: number,
  ): number {
    switch (vehicleType) {
      case VehicleType.BIKE:
        return feeType === VehicleFeeType.HOUR ? duration * 10 : duration * 100;
      case VehicleType.CAR:
        return feeType === VehicleFeeType.HOUR ? duration * 20 : duration * 200;
      case VehicleType.BUS:
        return feeType === VehicleFeeType.HOUR ? duration * 30 : duration * 300;
      default:
        return 0;
    }
  }
}

enum VehicleType {
  CAR = "car",
  BIKE = "bike",
  BUS = "bus",
}
abstract class Vehicle {
  protected licensePlate: string;
  protected vehicleType: VehicleType;

  constructor(vehicleType: VehicleType, licensePlate: string) {
    this.vehicleType = vehicleType;
    this.licensePlate = licensePlate;
  }
  getVehicleType(): string {
    return this.vehicleType;
  }
  getLicensePlate(): string {
    return this.licensePlate;
  }
}

class Bike extends Vehicle {
  private feeStrategy: IVehicleFee;

  constructor(licensePlate: string, feeStrategy: IVehicleFee) {
    super(VehicleType.BIKE, licensePlate);
    this.feeStrategy = feeStrategy;
  }
  calculateFee(duration: number, feeType: VehicleFeeType): number {
    return this.feeStrategy.calculateFee(this.vehicleType, feeType, duration);
  }
}

class Car extends Vehicle {
  private feeStrategy: IVehicleFee;

  constructor(licensePlate: string, feeStrategy: IVehicleFee) {
    super(VehicleType.CAR, licensePlate);
    this.feeStrategy = feeStrategy;
  }

  calculateFee(duration: number, feeType: VehicleFeeType): number {
    return this.feeStrategy.calculateFee(this.vehicleType, feeType, duration);
  }
}

class VehicleFactory {
  static create(
    vehicleType: VehicleType,
    licensePlate: string,
    feeStrategy: IVehicleFee,
  ): Vehicle {
    switch (vehicleType) {
      case VehicleType.BIKE:
        return new Bike(licensePlate, feeStrategy);
      case VehicleType.CAR:
        return new Car(licensePlate, feeStrategy);
      default:
        throw new Error("Invalid vehicle type");
    }
  }
}

abstract class ParkingSpot {
  private spotNumber: number;
  private isBooked: boolean;
  private vehicle: Vehicle | null = null;
  private spotType: string;

  constructor(spotNumber: number, spotType: string) {
    this.spotNumber = spotNumber;
    this.isBooked = false;
    this.spotType = spotType;
  }

  abstract canParkVehicle(vehicle: Vehicle): boolean;

  parkVehicle(vehicle: Vehicle): void {
    if (this.isBooked) {
      throw new Error("Spot is already occupied");
    }

    if (!this.canParkVehicle(vehicle)) {
      throw new Error("Spot is not suitable for vehicle");
    }

    this.isBooked = true;
    this.vehicle = vehicle;
  }

  unParkVehicle(): void {
    if (!this.isBooked) {
      throw new Error("Spot is not occupied");
    }
    this.isBooked = false;
    this.vehicle = null;
  }

  isOccupied(): boolean {
    return this.isBooked;
  }

  getSpotNumber(): number {
    return this.spotNumber;
  }
  getVehicle(): Vehicle | null {
    return this.vehicle;
  }
  getSpotType(): string {
    return this.spotType;
  }
}

class CarParkingSpot extends ParkingSpot {
  constructor(spotNumber: number) {
    super(spotNumber, VehicleType.CAR);
  }

  canParkVehicle(vehicle: Vehicle): boolean {
    return vehicle.getVehicleType() === VehicleType.CAR;
  }
}

class BikeParkingSpot extends ParkingSpot {
  constructor(spotNumber: number) {
    super(spotNumber, VehicleType.BIKE);
  }

  canParkVehicle(vehicle: Vehicle): boolean {
    return vehicle.getVehicleType() === VehicleType.BIKE;
  }
}

class ParkingLot {
  private parkingSpots: ParkingSpot[] = [];
  private feeStrategy: IVehicleFee;
  private paymentStrategy: IPayment;
  private tokens: string[] = [];

  constructor(feeStrategy: IVehicleFee, paymentStrategy: IPayment) {
    this.feeStrategy = feeStrategy;
    this.paymentStrategy = paymentStrategy;
  }

  addParkingSpot(parkingSpot: ParkingSpot): void {
    this.parkingSpots.push(parkingSpot);
  }

  findAvailableSpot(vehicleType: VehicleType): ParkingSpot | null {
    for (const spot of this.parkingSpots) {
      if (!spot.isOccupied() && spot.getSpotType() === vehicleType) {
        return spot;
      }
    }
    return null;
  }

  parkVehicle(vehicle: Vehicle): void {
    const spot = this.findAvailableSpot(
      vehicle.getVehicleType() as VehicleType,
    );
    if (!spot) {
      throw new Error("No available spot for vehicle");
    }
    spot.parkVehicle(vehicle);
    this.tokens.push(spot.getSpotNumber().toString());
  }

  unParkVehicle(spotNumber: number): void {
    const spot = this.parkingSpots?.find(
      (spot) => spot.getSpotNumber() === spotNumber,
    );
    if (!spot) {
      throw new Error("Spot not found");
    }
    if (!spot.isOccupied()) {
      throw new Error("Spot is not occupied");
    }
    const amount = this.feeStrategy.calculateFee(
      spot.getVehicle()?.getVehicleType() as VehicleType,
      VehicleFeeType.HOUR,
      1,
    );

    const isPaymentSuccessful = this.paymentStrategy.pay(amount);
    if (!isPaymentSuccessful) {
      throw new Error("Payment failed");
    }
    spot.unParkVehicle();
  }

  getVehicle(spotNumber: number): Vehicle | null {
    const spot = this.parkingSpots?.find(
      (spot) => spot.getSpotNumber() === spotNumber,
    );
    if (!spot) {
      throw new Error("Spot not found");
    }
    return spot.getVehicle();
  }

  getParkingSpots(): ParkingSpot[] {
    return this.parkingSpots;
  }
}

class ParkingSystem {
  static park() {
    const parkingLot = new ParkingLot(
      new BasicVehicleFee(),
      PaymentFactory.create(PaymentType.CARD),
    );

    const bikeParkingSpot = new BikeParkingSpot(1);
    const carParkingSpot = new CarParkingSpot(2);

    parkingLot.addParkingSpot(bikeParkingSpot);
    parkingLot.addParkingSpot(carParkingSpot);

    const bike = VehicleFactory.create(
      VehicleType.BIKE,
      "ABC123",
      new BasicVehicleFee(),
    );
    const car = VehicleFactory.create(
      VehicleType.CAR,
      "DEF456",
      new BasicVehicleFee(),
    );

    parkingLot.parkVehicle(bike);
    parkingLot.parkVehicle(car);

    const parkedBike = parkingLot.getVehicle(1);
    const parkedCar = parkingLot.getVehicle(2);

    console.log(parkedBike);
    console.log(parkedCar);
  }
}

ParkingSystem.park();
