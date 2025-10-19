import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  ItemCitaMedicaDTO,
  CrearCitaMedicaDTO,
  InformacionResultadoMedicoDTO,
  CrearResultadoMedicoDTO
} from '../models/cita-medica.model';

interface MensajeDTO<T> {
  error: boolean;
  respuesta: T;
}

@Injectable({ providedIn: 'root' })
export class CitaMedicaService {
  private apiUrl = `${environment.apiUrl}/citaMedica`;

  constructor(private http: HttpClient) {}

  // ✅ Agendar nueva cita
  agendar(cita: CrearCitaMedicaDTO): Observable<string> {
    return this.http
      .post<MensajeDTO<string>>(`${this.apiUrl}/agendar`, cita)
      .pipe(map((res) => res.respuesta));
  }

  // ✅ Cancelar una cita
  cancelar(id: string): Observable<string> {
    return this.http
      .put<MensajeDTO<string>>(`${this.apiUrl}/cancelar/${id}`, {})
      .pipe(map((res) => res.respuesta));
  }

  // ✅ Listar citas por paciente
  listarPorPaciente(idPaciente: string): Observable<ItemCitaMedicaDTO[]> {
    return this.http
      .get<MensajeDTO<ItemCitaMedicaDTO[]>>(`${this.apiUrl}/listar/paciente/${idPaciente}`)
      .pipe(map((res) => res.respuesta));
  }

  // ✅ Listar citas por médico
  listarPorMedico(idMedico: string): Observable<ItemCitaMedicaDTO[]> {
    return this.http
      .get<MensajeDTO<ItemCitaMedicaDTO[]>>(`${this.apiUrl}/listar/medico/${idMedico}`)
      .pipe(map((res) => res.respuesta));
  }

  // ✅ Agregar resultado médico
  agregarResultado(idCita: string, dto: CrearResultadoMedicoDTO): Observable<string> {
    return this.http
      .post<MensajeDTO<string>>(`${this.apiUrl}/resultado/${idCita}`, dto)
      .pipe(map((res) => res.respuesta));
  }

  // ✅ Obtener resultado médico
  obtenerResultado(idCita: string): Observable<InformacionResultadoMedicoDTO> {
    return this.http
      .get<MensajeDTO<InformacionResultadoMedicoDTO>>(`${this.apiUrl}/resultado/${idCita}`)
      .pipe(map((res) => res.respuesta));
  }
}
