import { INotificationService } from "../core/interfaces";

export class User {
  constructor(
    public readonly email: string,
    public readonly phone: string,
    public readonly deviceToken: string,
    private readonly notificationService: INotificationService
  ) {}

  sendNotification(message: string): void {
    this.notificationService.notifyAll(message);
  }
}
