import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ItemPacienteDTO, CrearPacienteDTO, EditarPacienteDTO } from '../models/paciente.model';

interface MensajeDTO<T> {
  error: boolean;
  respuesta: T;
}

@Injectable({ providedIn: 'root' })
export class PacienteService {
  private apiUrl = `${environment.apiUrl}/pacientes`;

  constructor(private http: HttpClient) {}

  listar(): Observable<ItemPacienteDTO[]> {
    return this.http
      .get<MensajeDTO<ItemPacienteDTO[]>>(`${this.apiUrl}/listar-todo`)
      .pipe(map((res) => res.respuesta));
  }

  obtenerPorId(id: string): Observable<ItemPacienteDTO> {
    return this.http
      .get<MensajeDTO<ItemPacienteDTO>>(`${this.apiUrl}/obtener/${id}`)
      .pipe(map((res) => res.respuesta));
  }

  crear(paciente: CrearPacienteDTO): Observable<string> {
    return this.http
      .post<MensajeDTO<string>>(`${this.apiUrl}/crear`, paciente)
      .pipe(map((res) => res.respuesta));
  }

  editar(paciente: EditarPacienteDTO): Observable<string> {
    return this.http
      .put<MensajeDTO<string>>(`${this.apiUrl}/editar`, paciente)
      .pipe(map((res) => res.respuesta));
  }

  eliminar(id: string): Observable<string> {
    return this.http
      .delete<MensajeDTO<string>>(`${this.apiUrl}/eliminar/${id}`)
      .pipe(map((res) => res.respuesta));
  }
}
