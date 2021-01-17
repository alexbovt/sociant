import { createComponentFactory, Spectator } from '@ngneat/spectator';

import { AppComponent } from './app.component';
import { AppService } from './app.service';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;
  let component: AppComponent;
  const createComponent = createComponentFactory({
    component: AppComponent,
    providers: [
      {
        provide: AppService, useValue: {
          getMessage: jest.fn(() => mocks.message)
        }
      }
    ]
  });
  const mocks = {
    message: 'Hello World!'
  };

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
  });

  it('should create', () => {
    expect(spectator.component).toBeDefined();
  });

  it('should get message', () => {
    const next = jest.fn();
    component.message$.subscribe(next);
    expect(next).toHaveBeenCalledWith(mocks.message);
  });
});




