import { createServiceFactory, SpectatorService } from '@ngneat/spectator';

import { WebSocketService } from './web-socket.service';

describe('WebSocketService', () => {
  let spectator: SpectatorService<WebSocketService>;
  let service: WebSocketService;
  const createService = createServiceFactory(WebSocketService);

  beforeEach(() => {
    spectator = createService();
    service = spectator.service;
  });

  it('should create', () => {
    expect(service).toBeDefined();
  });
});
