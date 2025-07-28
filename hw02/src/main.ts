import { Logger } from "./services/Logger";
import { EmailNotification } from "./services/EmailNotification";
import { SMSNotification } from "./services/SMSNotification";
import { PushNotification } from "./services/PushNotification";
import { NotificationService } from "./services/NotificationService";
import { User } from "./models/User";

const logger = new Logger();

const notificationService = new NotificationService(
  {
    email: "user@example.com",
    phone: "+380123456789",
    deviceToken: "device-token-abc"
  },
  [
    { channel: new EmailNotification(logger), type: "email" },
    { channel: new SMSNotification(logger), type: "phone" },
    { channel: new PushNotification(logger), type: "deviceToken" }
  ]
);

const user = new User(
  "user@example.com",
  "+380123456789",
  "device-token-abc",
  notificationService
);

user.sendNotification("Ваш платіж оброблено успішно!");
