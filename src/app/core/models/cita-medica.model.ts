export interface ItemCitaMedicaDTO {
  id: string;
  idPaciente: string;
  idMedico: string;
  fecha: string;
  hora: string;
  estado: string;
}

export interface ItemHorarioDTO {
  fecha: string;
  horaInicio: string;
  horaFin: string;
}

export interface CrearCitaMedicaDTO {
  idPaciente: string;
  idMedico: string;
  horario: ItemHorarioDTO;
}


export interface CrearResultadoMedicoDTO {
  descripcion: string;
  recomendaciones: string;
}

export interface InformacionResultadoMedicoDTO {
  descripcion: string;
  recomendaciones: string;
  fechaRegistro: string;
}
