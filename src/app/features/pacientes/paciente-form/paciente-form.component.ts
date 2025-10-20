import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { PacienteService } from '../../../../app/core/services/paciente.service';
import {
  CrearPacienteDTO,
  EditarPacienteDTO,
} from '../../../../app/core/models/paciente.model';

@Component({
  selector: 'app-paciente-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './paciente-form.component.html',
})
export class PacienteFormComponent implements OnInit {
  paciente: CrearPacienteDTO = this.inicializarPaciente();

  // Lista de tipos de sangre
  tiposRh: string[] = [
    'A+',
    'A-',
    'B+',
    'B-',
    'AB+',
    'AB-',
    'O+',
    'O-',
  ];

  modoEdicion = false;
  idPaciente?: string;

  constructor(private pacienteService: PacienteService) {}

  ngOnInit(): void {}

  guardar(): void {
    if (this.modoEdicion && this.idPaciente) {
      const dto: EditarPacienteDTO = { ...this.paciente };
      this.pacienteService.editar(dto).subscribe(() => alert('✅ Paciente editado'));
    } else {
      this.pacienteService.crear(this.paciente).subscribe({
        next: () => {
          alert('✅ Paciente creado correctamente');
          this.paciente = this.inicializarPaciente(); // 🔹 Limpia el formulario
        },
        error: (err) => {
          console.error('❌ Error al crear paciente:', err);
          alert('Error al crear paciente');
        },
      });
    }
  }

  // 🔹 Método para resetear el objeto paciente
  private inicializarPaciente(): CrearPacienteDTO {
    return {
      id: '',
      nombre: '',
      apellido: '',
      email: '',
      telefono: '',
      rh: '',
      fechaNacimiento: '',
      direccion: '',
    };
  }
}
