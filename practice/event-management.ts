/**
 * Background: An event management system allows users to view available events, make reservations, pay for tickets, and receive notifications. Each event has specific seat allocations, which need real-time updates. Cancellations should be handled with refund options, and users must be notified of successful reservations or cancellations.

Question: What are the classes you might need in this software solution?
*/

interface IEvent {
  getName(): string;
  getAvailableSeats(): ISeat[];
  isAvailable(): boolean;
}

interface ISeat {
  getPrice(): number;
  isAvailable(): boolean;
  makeUnavailable(): void;
  makeAvailable(): void;
}

interface IPayment {
  makePayment(amount: number, user: User): boolean;
  refundPayment(amount: number, user: User): void;
}

interface INotification {
  sendSuccessNotification(user: User, message: string): void;
  sendCancelNotification(user: User, message: string): void;
}

class BaseEvent implements IEvent {
  protected name: string;
  protected seats: ISeat[] = [];

  constructor(name: string, numSeats: number, seatPrice: number) {
    this.name = name;
    for (let i = 0; i < numSeats; i++) {
      this.seats.push(new StandardSeat(seatPrice));
    }
  }

  getName(): string {
    return this.name;
  }

  getAvailableSeats(): ISeat[] {
    return this.seats.filter((seat) => seat.isAvailable());
  }

  isAvailable(): boolean {
    return this.getAvailableSeats().length > 0;
  }
}

class StandardSeat implements ISeat {
  private price: number;
  private available: boolean = true;

  constructor(price: number) {
    this.price = price;
  }

  getPrice(): number {
    return this.price;
  }

  isAvailable(): boolean {
    return this.available;
  }

  makeUnavailable(): void {
    this.available = false;
  }

  makeAvailable(): void {
    this.available = true;
  }
}

class OnlinePayment implements IPayment {
  makePayment(amount: number, user: User): boolean {
    console.log(
      `Processing payment of $${amount} for user ${user.getUsername()}`
    );
    return true;
  }

  refundPayment(amount: number, user: User): void {
    console.log(`Refunding $${amount} to user ${user.getUsername()}`);
  }
}

class EmailNotification implements INotification {
  sendSuccessNotification(user: User, message: string): void {
    console.log(`Email to ${user.getUsername()}: Success - ${message}`);
  }

  sendCancelNotification(user: User, message: string): void {
    console.log(`Email to ${user.getUsername()}: Cancellation - ${message}`);
  }
}

class User {
  private username: string;
  private reservations: Reservation[] = [];

  constructor(username: string) {
    this.username = username;
  }

  getUsername(): string {
    return this.username;
  }

  addReservation(reservation: Reservation): void {
    this.reservations.push(reservation);
  }

  getReservations(): Reservation[] {
    return this.reservations;
  }

  clearReservations(): void {
    this.reservations = [];
  }

  getReservationByEvent(event: IEvent): Reservation | null {
    return this.reservations.find((r) => r.event === event) || null;
  }

  removeReservation(reservation: Reservation): void {
    this.reservations = this.reservations.filter((r) => r !== reservation);
  }
}

class Reservation {
  constructor(public event: IEvent, public seat: ISeat, public user: User) {}
}

class EventManagementSystem {
  private payment: IPayment;
  private notification: INotification;
  private events: IEvent[] = [];
  private reservations: Reservation[] = [];

  constructor(payment: IPayment, notification: INotification) {
    this.payment = payment;
    this.notification = notification;
  }

  addEvent(event: IEvent): void {
    this.events.push(event);
  }

  removeEvent(event: IEvent): void {
    this.events = this.events.filter((e) => e !== event);
  }

  getAvailableEvents(): IEvent[] {
    return this.events.filter((e) => e.isAvailable());
  }

  reserveSeat(event: IEvent, user: User, seatIndex: number): void {
    const availableSeats = event.getAvailableSeats();
    if (
      availableSeats.length === 0 ||
      seatIndex < 0 ||
      seatIndex >= availableSeats.length
    ) {
      console.log("Invalid seat or no seats available.");
      return;
    }

    const seat = availableSeats[seatIndex];
    const amount = seat.getPrice();

    if (this.payment.makePayment(amount, user)) {
      seat.makeUnavailable();
      const reservation = new Reservation(event, seat, user);
      this.reservations.push(reservation);
      user.addReservation(reservation);
      this.notification.sendSuccessNotification(
        user,
        `Reserved seat for ${event.getName()}`
      );
    } else {
      this.notification.sendCancelNotification(
        user,
        `Payment failed for ${event.getName()}`
      );
    }
  }

  cancelReservation(reservation: Reservation): void {
    const { event, seat, user } = reservation;
    seat.makeAvailable();
    this.payment.refundPayment(seat.getPrice(), user);
    this.reservations = this.reservations.filter((r) => r !== reservation);
    user.removeReservation(reservation);
    this.notification.sendCancelNotification(
      user,
      `Cancelled reservation for ${event.getName()}`
    );
  }
}

const system = new EventManagementSystem(
  new OnlinePayment(),
  new EmailNotification()
);
const concert = new BaseEvent("Rock Concert", 10, 50);
system.addEvent(concert);

const user = new User("john_doe");
const fastOne = system.reserveSeat(concert, user, 0);
system.reserveSeat(concert, user, 0);

// Cancel example
const reservation = user.getReservationByEvent(concert);
if (reservation) system.cancelReservation(reservation);
