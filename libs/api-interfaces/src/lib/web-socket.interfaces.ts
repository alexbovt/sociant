export enum WebSocketMessageType {
  NewMessageRequest = 'sociant.new-message-request'
}

export class WebSocketMessage<T> {
  static create<T>(type: WebSocketMessageType, payload: T): WebSocketMessage<T> {
    return new WebSocketMessage<T>(type, payload);
  }

  constructor(
    public readonly type: WebSocketMessageType,
    public readonly payload: T | undefined
  ) {
  }
}
