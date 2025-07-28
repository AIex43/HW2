import { INotification, ILogger } from "../core/interfaces";

export class SMSNotification implements INotification {
  constructor(private readonly logger: ILogger) {}

  send(recipient: string, message: string): void {
    this.logger.log(`Sending SMS to ${recipient}`);
    console.log(`SMS sent to ${recipient}: ${message}`);
  }
}
