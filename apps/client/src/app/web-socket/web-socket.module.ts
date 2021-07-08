import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { WebSocketFacade } from './+state/web-socket.facade';
import { WEBSOCKET_FEATURE_KEY } from './+state/web-socket.feature';
import { reducer } from './+state/web-socket.reducer';
import { WebSocketEffects } from './+state/web-socket.effects';

const WEB_SOCKET_CONFIG: SocketIoConfig = {
  url: 'http://localhost:3000/api', options: {}
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(WEBSOCKET_FEATURE_KEY, reducer),
    EffectsModule.forFeature([WebSocketEffects]),
    SocketIoModule.forRoot(WEB_SOCKET_CONFIG)
  ],
  providers: [
    WebSocketFacade
  ]
})
export class WebSocketModule {
}
