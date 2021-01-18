import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { WebSocketFacade } from './+state/web-socket.facade';
import { WEBSOCKET_FEATURE_KEY } from './+state/web-socket.feature';
import { reducer } from './+state/web-socket.reducer';
import { WebSocketEffects } from './+state/web-socket.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(WEBSOCKET_FEATURE_KEY, reducer),
    EffectsModule.forFeature([WebSocketEffects])
  ],
  providers: [
    WebSocketFacade
  ]
})
export class WebSocketModule {
}
