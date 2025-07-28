export interface ILogger {
  log(message: string): void;
}

export interface INotification {
  send(recipient: string, message: string): void;
}

export interface INotificationService {
  notifyAll(message: string): void;
}
