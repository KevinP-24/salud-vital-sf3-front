import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CrearResultadoMedicoDTO, InformacionResultadoMedicoDTO } from '../models/resultado-medico.model';

@Injectable({
  providedIn: 'root'
})
export class ResultadoMedicoService {
  private apiUrl = 'http://localhost:8080/api/resultados'; // ajusta según backend

  constructor(private http: HttpClient) {}

  listar(): Observable<InformacionResultadoMedicoDTO[]> {
    return this.http.get<InformacionResultadoMedicoDTO[]>(`${this.apiUrl}`);
  }

  crear(dto: CrearResultadoMedicoDTO): Observable<any> {
    return this.http.post(`${this.apiUrl}`, dto);
  }

  obtenerPorIdCita(idCita: string): Observable<InformacionResultadoMedicoDTO> {
    return this.http.get<InformacionResultadoMedicoDTO>(`${this.apiUrl}/cita/${idCita}`);
  }

  eliminar(idCita: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${idCita}`);
  }
}
