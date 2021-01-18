import { Injectable } from '@angular/core';
import { WebSocketMessage } from '@sociant/api-interfaces';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  constructor(private readonly socket: Socket) {
  }

  open(): void {
    console.log('WEBSOCKET OPEN CONNECTIONS');
  }

  close(): void {
    console.log('WEBSOCKET CLOSE CONNECTION');
  }

  send<T = unknown>(message: WebSocketMessage<T>): void {
    console.log('WEBSOCKET SEND MESSAGE', message);
    this.socket.emit('message', message);
  }
}
