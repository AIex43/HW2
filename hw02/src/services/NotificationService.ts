import { INotification, INotificationService } from "../core/interfaces";

interface RecipientMap {
  email: string;
  phone: string;
  deviceToken: string;
}

export class NotificationService implements INotificationService {
  constructor(
    private readonly recipients: RecipientMap,
    private readonly channels: { channel: INotification; type: keyof RecipientMap }[]
  ) {}

  notifyAll(message: string): void {
    for (const { channel, type } of this.channels) {
      channel.send(this.recipients[type], message);
    }
  }
}
