import { INotification, ILogger } from "../core/interfaces";

export class PushNotification implements INotification {
  constructor(private readonly logger: ILogger) {}

  send(recipient: string, message: string): void {
    this.logger.log(`Sending PUSH to ${recipient}`);
    console.log(`Push sent to ${recipient}: ${message}`);
  }
}
