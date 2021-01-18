import { Component } from '@angular/core';

import { AppService } from './app.service';
import { FormControl } from '@ngneat/reactive-forms';
import { WebSocketFacade } from './web-socket/+state/web-socket.facade';
import { WebSocketMessageType } from '@sociant/api-interfaces';

@Component({
  selector: 'sociant-root',
  template: `
    <div>Online: {{ isOnline$ | async }}</div>
    <hr>
    <input [formControl]='newMessage' type='text' />
    <button (click)='sendMessage()'>Send Message</button>
    <hr>
    <div>{{(message$ | async)?.message}}</div>
  `
})
export class AppComponent {
  readonly isOnline$ = this.webSocketFacade.isOnline$;
  readonly message$ = this.service.getMessage();
  readonly newMessage = new FormControl<string>('');

  constructor(private readonly service: AppService, private readonly webSocketFacade: WebSocketFacade) {
  }

  sendMessage(): void {
    this.webSocketFacade.sendMessage(
      WebSocketMessageType.NewMessageRequest,
      { message: this.newMessage.value }
    );
  }
}
