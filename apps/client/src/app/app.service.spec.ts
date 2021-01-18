import { createHttpFactory, HttpMethod, SpectatorHttp } from '@ngneat/spectator';

import { AppService } from './app.service';

describe('AppService', () => {
  let spectator: SpectatorHttp<AppService>;
  let service: AppService;
  const createHttp = createHttpFactory(AppService);

  beforeEach(() => {
    spectator = createHttp();
    service = spectator.service;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get message from api', () =>{
    service.getMessage().subscribe();
    spectator.expectOne('/api/hello', HttpMethod.GET);
  })
});
