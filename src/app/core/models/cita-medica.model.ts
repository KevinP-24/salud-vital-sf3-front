// src/app/core/models/cita.model.ts

export interface ItemCitaDTO {
  id: number;
  paciente_id: number;
  medico_id: number;
  fecha_cita: string;   // formato ISO o 'YYYY-MM-DD HH:mm'
  motivo: string;
  estado: string;
}

export interface CrearCitaDTO {
  paciente_id: number;
  medico_id: number;
  fecha_cita: string;   // formato 'YYYY-MM-DD HH:mm'
  motivo: string;
}

export interface EditarCitaEstadoDTO {
  estado: string;
}

export interface InformacionCitaDTO {
  id: number;
  paciente_id: number;
  medico_id: number;
  fecha_cita: string;
  motivo: string;
  estado: string;
}
