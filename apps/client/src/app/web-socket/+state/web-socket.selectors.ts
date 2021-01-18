import { createSelector } from '@ngrx/store';

import { websocketFeatureSelector } from './web-socket.feature';

const selectIsOnline = createSelector(
  websocketFeatureSelector,
  state => state.isOnline
);

export const WebSocketSelectors = {
  selectIsOnline
};
