// src/app/models/resultado-medico.model.ts
export interface CrearResultadoMedicoDTO {
  idCitaMedica: string;
  descripcion: string;
  diagnostico: string;
  recomendaciones: string;
  fechaRegistro: string; // Formato "dd/MM/yyyy HH:mm"
}

export interface InformacionResultadoMedicoDTO {
  idCitaMedica: string;
  descripcion: string;
  diagnostico: string;
  recomendaciones: string;
  fechaRegistro: string;
}
