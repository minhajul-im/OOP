/**
 * Background: A notification system sends different types of notifications, such as SMS, email, and push notifications. Each type has specific requirements (e.g., SMS requires a phone number, while email requires an email address). The notification interface should avoid requiring any one notification type to provide unnecessary information or implement irrelevant methods.

Question: How would you design the interfaces for notifications?
 */

interface INotifyByPhone {
  notify(number: string): void;
}
class NotifyByPhone implements INotifyByPhone {
  notify(number: string): void {}
}
interface INotifyByEmail {
  notify(number: string): void;
}

class NotifyByEmail implements INotifyByEmail {
  notify(number: string): void {}
}

class NotifySystem<T> {
  notify(obj: T, methods: (obj: T) => void) {
    return methods(obj);
  }
}

const notifySystem = new NotifySystem();
const email = new NotifyByEmail();
notifySystem.notify(email, () => email.notify("123"));
