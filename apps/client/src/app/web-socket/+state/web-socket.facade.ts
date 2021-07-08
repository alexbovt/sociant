import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { WebSocketMessage, WebSocketMessageType } from '@sociant/api-interfaces';

import { WebSocketActions } from './web-socket.actions';
import { WebSocketSelectors } from './web-socket.selectors';

@Injectable({
  providedIn: 'root'
})
export class WebSocketFacade {

  readonly isOnline$ = this.store.pipe(
    select(WebSocketSelectors.selectIsOnline)
  );

  constructor(
    private readonly store: Store
  ) {
  }

  public sendMessage<T>(type: WebSocketMessageType, payload: T): void {
    this.store.dispatch(WebSocketActions.sendMessage({
      message: WebSocketMessage.create<T>(type, payload)
    }));
  }
}
