import { createReducer, on } from '@ngrx/store';

import { WebSocketActions } from './web-socket.actions';

export interface WebSocketState {
  isOnline: boolean
}

const initialState: WebSocketState = {
  isOnline: false
};

export const reducer = createReducer(
  initialState,
  on(WebSocketActions.open, state => {
    return {
      ...state,
      isOnline: true
    };
  }),
  on(WebSocketActions.close, state => {
    return {
      ...state,
      isOnline: false
    };
  })
);

