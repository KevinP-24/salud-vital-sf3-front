import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  ItemMedicoDTO,
  CrearMedicoDTO,
  EditarMedicoDTO,
  InformacionMedicoDTO
} from '../models/medico.model';
import { ItemHorarioDTO, CrearHorarioDTO } from '../models/horario.model';

interface MensajeDTO<T> {
  error: boolean;
  respuesta: T;
}

@Injectable({ providedIn: 'root' })
export class MedicoService {
  private apiUrl = `${environment.apiUrl}/medicos`;

  constructor(private http: HttpClient) {}

  listar(): Observable<ItemMedicoDTO[]> {
    return this.http
      .get<MensajeDTO<ItemMedicoDTO[]>>(`${this.apiUrl}/listar-todo`)
      .pipe(map((res) => res.respuesta));
  }

  obtenerPorId(id: string): Observable<InformacionMedicoDTO> {
    return this.http
      .get<MensajeDTO<InformacionMedicoDTO>>(`${this.apiUrl}/obtener/${id}`)
      .pipe(map((res) => res.respuesta));
  }

  crear(medico: CrearMedicoDTO): Observable<string> {
    return this.http
      .post<MensajeDTO<string>>(`${this.apiUrl}/crear`, medico)
      .pipe(map((res) => res.respuesta));
  }

  editar(medico: EditarMedicoDTO): Observable<string> {
    return this.http
      .put<MensajeDTO<string>>(`${this.apiUrl}/editar`, medico)
      .pipe(map((res) => res.respuesta));
  }

  eliminar(id: string): Observable<string> {
    return this.http
      .delete<MensajeDTO<string>>(`${this.apiUrl}/eliminar/${id}`)
      .pipe(map((res) => res.respuesta));
  }

  // ----- Horarios -----
  agregarHorario(idMedico: string, dto: CrearHorarioDTO): Observable<string> {
    return this.http
      .post<MensajeDTO<string>>(`${this.apiUrl}/horario/agregar/${idMedico}`, dto)
      .pipe(map((res) => res.respuesta));
  }

  listarHorarios(idMedico: string): Observable<ItemHorarioDTO[]> {
    return this.http
      .get<MensajeDTO<ItemHorarioDTO[]>>(`${this.apiUrl}/horarios/${idMedico}`)
      .pipe(map((res) => res.respuesta));
  }
}
