import { createFeatureSelector } from '@ngrx/store';

import { WebSocketState } from './web-socket.reducer';

export const WEBSOCKET_FEATURE_KEY = 'web-socket';
export const websocketFeatureSelector = createFeatureSelector<WebSocketState>(WEBSOCKET_FEATURE_KEY);
