export interface ItemPacienteDTO {
  id: string; // ✅ era number
  nombre: string;
  apellido: string;
  correo: string;
  telefono: string;
  dni: string;
}

export interface CrearPacienteDTO {
  nombre: string;
  apellido: string;
  correo: string;
  telefono: string;
  dni: string;
}

export interface EditarPacienteDTO {
  id: string; // ✅ era number
  nombre: string;
  apellido: string;
  correo: string;
  telefono: string;
  dni: string;
}

export interface InformacionPacienteDTO {
  id: string; // ✅ era number
  nombreCompleto: string;
  correo: string;
  telefono: string;
  dni: string;
}
