// Step 1: Interface to define a notification
interface INotification {
  send(): void;
}

// Step 2: Base class for Notification
class Notification implements INotification {
  protected message: string;

  constructor(message: string) {
    this.message = message;
  }

  send(): void {
    console.log("Sending generic notification: " + this.message);
  }
}

// Step 3: Subclass for Email Notification
class EmailNotification extends Notification {
  private email: string;

  constructor(message: string, email: string) {
    super(message);
    this.email = email;
  }

  send(): void {
    console.log(`📧 Email sent to ${this.email}: ${this.message}`);
  }
}

// Step 4: Subclass for SMS Notification
class SMSNotification extends Notification {
  private phoneNumber: string;

  constructor(message: string, phoneNumber: string) {
    super(message);
    this.phoneNumber = phoneNumber;
  }

  send(): void {
    console.log(`📱 SMS sent to ${this.phoneNumber}: ${this.message}`);
  }
}

// Step 5: Notification Manager
class NotificationManager {
  private notifications: INotification[] = [];

  addNotification(notification: INotification): void {
    this.notifications.push(notification);
  }

  sendAll(): void {
    this.notifications.forEach(notification => notification.send());
  }
}

// ✅ Test / Demo
const manager = new NotificationManager();

const email1 = new EmailNotification("Welcome to our platform!", "user@example.com");
const sms1 = new SMSNotification("Your OTP is 123456", "+918888888888");

manager.addNotification(email1);
manager.addNotification(sms1);

manager.sendAll();
