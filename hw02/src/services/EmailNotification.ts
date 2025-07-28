import { INotification, ILogger } from "../core/interfaces";

export class EmailNotification implements INotification {
  constructor(private readonly logger: ILogger) {}

  send(recipient: string, message: string): void {
    this.logger.log(`Sending EMAIL to ${recipient}`);
    console.log(`Email sent to ${recipient}: ${message}`);
  }
}
