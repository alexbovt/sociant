import { Component } from '@angular/core';

import { AppService } from './app.service';

@Component({
  selector: 'sociant-root',
  template: `
    <div>{{(message$ | async).message}}</div>
  `
})
export class AppComponent {
  message$ = this.service.getMessage();

  constructor(private readonly service: AppService) {
  }
}
