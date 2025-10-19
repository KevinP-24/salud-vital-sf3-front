import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CrearResultadoMedicoDTO, InformacionResultadoMedicoDTO } from '../models/resultado-medico.model';

@Injectable({ providedIn: 'root' })
export class ResultadoMedicoService {
  private apiUrl = `${environment.apiUrl}/resultados-medicos`;

  constructor(private http: HttpClient) {}

  listar(): Observable<InformacionResultadoMedicoDTO[]> {
    return this.http.get<InformacionResultadoMedicoDTO[]>(this.apiUrl);
  }

  obtenerPorId(id: number): Observable<InformacionResultadoMedicoDTO> {
    return this.http.get<InformacionResultadoMedicoDTO>(`${this.apiUrl}/${id}`);
  }

  crear(resultado: CrearResultadoMedicoDTO): Observable<InformacionResultadoMedicoDTO> {
    return this.http.post<InformacionResultadoMedicoDTO>(this.apiUrl, resultado);
  }

  eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  listarPorMedico(idMedico: number): Observable<InformacionResultadoMedicoDTO[]> {
    return this.http.get<InformacionResultadoMedicoDTO[]>(`${this.apiUrl}/medico/${idMedico}`);
  }
}
