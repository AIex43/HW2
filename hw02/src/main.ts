import { Logger } from "./services/Logger";
import { EmailNotification } from "./services/EmailNotification";
import { SMSNotification } from "./services/SMSNotification";
import { PushNotification } from "./services/PushNotification";
import { NotificationService } from "./services/NotificationService";
import { User } from "./models/User";


const logger = new Logger();


const emailChannel = new EmailNotification("example@email.com", logger);
const smsChannel = new SMSNotification("+380123456789", logger);
const pushChannel = new PushNotification("device-token-abc", logger);


const notificationService = new NotificationService([
  emailChannel,
  smsChannel,
  pushChannel
]);


const user = new User(
  "example@email.com",
  "+380123456789",
  "device-token-abc",
  notificationService
);

user.sendNotification("Ваш платіж оброблено успішно!");
