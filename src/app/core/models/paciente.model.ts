export interface ItemPacienteDTO {
  id: string;
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  rh: string;
  fechaNacimiento: string;
  direccion: string;
}

export interface CrearPacienteDTO {
  id: string;
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  rh: string;
  fechaNacimiento: string;
  direccion: string;
}

export interface EditarPacienteDTO {
  id: string;
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  rh: string;
  fechaNacimiento: string;
  direccion: string;
}

export interface InformacionPacienteDTO {
  id: string;
  nombreCompleto: string;
  email: string;
  telefono: string;
  rh: string;
  fechaNacimiento: string;
  direccion: string;
}
