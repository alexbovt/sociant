import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@sociant/api-interfaces';

@Component({
  selector: 'sociant-root',
  template: `
    <div>{{(response$ | async).message}}</div>
  `
})
export class AppComponent {
  response$ = this.http.get<Message>('/api/hello');

  constructor(private readonly http: HttpClient) {
  }
}
