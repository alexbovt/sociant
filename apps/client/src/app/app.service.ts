import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@sociant/api-interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private readonly http: HttpClient) {
  }

  getMessage(): Observable<Message> {
    return this.http.get<Message>('/api/hello');
  }
}
