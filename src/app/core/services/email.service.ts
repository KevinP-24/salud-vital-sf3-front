import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class EmailService {
  private apiUrl = `${environment.apiUrl}/email`;

  constructor(private http: HttpClient) {}

  enviar(destinatario: string, asunto: string, mensaje: string): Observable<any> {
    const body = { destinatario, asunto, mensaje };
    return this.http.post(`${this.apiUrl}/enviar`, body);
  }
}
