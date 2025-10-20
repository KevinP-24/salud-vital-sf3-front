import { ItemHorarioDTO } from './horario.model';

export interface ItemMedicoDTO {
  id: string;
  nombre: string;
  apellido: string;
  especialidad: string;
  correo: string;
  jornadaMedico: string;
}

export interface CrearMedicoDTO {
  id: string;
  nombre: string;
  apellido: string;
  especialidad: string;
  correo: string;
  jornadaMedico: string;
}

export interface EditarMedicoDTO {
  id: string;
  nombre: string;
  apellido: string;
  especialidad: string;
  correo: string;
  jornadaMedico: string;
}

export interface InformacionMedicoDTO {
  id: string;
  nombreCompleto: string;
  especialidad: string;
  horarios: ItemHorarioDTO[];
  correo?: string;
  jornadaMedico?: string;
}


