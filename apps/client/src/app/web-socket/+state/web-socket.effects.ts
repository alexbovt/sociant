import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';

import { WebSocketService } from '../web-socket.service';
import { WebSocketActions } from './web-socket.actions';

@Injectable()
export class WebSocketEffects {

  constructor(
    private readonly store: Store,
    private readonly actions: Actions,
    private readonly webSocketService: WebSocketService
  ) {
  }

  sendMessage = createEffect(() => this.actions.pipe(
    ofType(WebSocketActions.sendMessage),
    tap(action => {
      this.webSocketService.send(action.message);
    })
  ), { dispatch: false });
}
