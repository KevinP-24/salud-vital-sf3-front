import { ItemHorarioDTO } from './horario.model';

export interface ItemMedicoDTO {
  id: string;
  nombre: string;
  apellido: string;
  especialidad: string;
  correo: string;
}

export interface CrearMedicoDTO {
  nombre: string;
  apellido: string;
  especialidad: string;
  correo: string;
}

export interface EditarMedicoDTO {
  id: string;
  nombre: string;
  apellido: string;
  especialidad: string;
  correo: string;
}

export interface InformacionMedicoDTO {
  id: string;
  nombreCompleto: string;
  especialidad: string;
  horarios: ItemHorarioDTO[];
}
