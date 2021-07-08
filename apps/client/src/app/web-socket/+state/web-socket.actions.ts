import { createAction, props } from '@ngrx/store';
import { WebSocketMessage } from '@sociant/api-interfaces';

const open = createAction('[WS] - Open');
const close = createAction('[WS] - Close');
const sendMessage = createAction('[WS] - Send message', props<{ message: WebSocketMessage<unknown> }>());

export const WebSocketActions = {
  open,
  close,
  sendMessage
};
