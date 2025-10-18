import { ItemMedicoDTO } from './medico.model';
import { ItemCitaMedicaDTO } from './cita-medica.model';

export interface CrearResultadoMedicoDTO {
  idCita: number;
  descripcion: string;
  observaciones: string;
}

export interface InformacionResultadoMedicoDTO {
  id: number;
  descripcion: string;
  observaciones: string;
  fecha: string;
  medico: ItemMedicoDTO;
  cita: ItemCitaMedicaDTO;
}
