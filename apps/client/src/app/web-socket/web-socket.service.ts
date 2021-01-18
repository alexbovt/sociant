import { Injectable } from '@angular/core';
import { WebSocketMessage } from '@sociant/api-interfaces';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  open(): void {
    console.log('WEBSOCKET OPEN CONNECTIONS');
  }

  close(): void {
    console.log('WEBSOCKET CLOSE CONNECTION');
  }

  send<T = unknown>(message: WebSocketMessage<T>): void {
    console.log('WEBSOCKET SEND MESSAGE', message);
  }
}
