import { INotification, ILogger } from "../core/interfaces";

export class SMSNotification implements INotification {
  constructor(
    private readonly recipient: string,
    private readonly logger: ILogger
  ) {}

  send(to: string, message: string): void {
    this.logger.log(`Sending SMS to ${to}`);
    console.log(`SMS sent to ${to}: ${message}`);
  }
}
