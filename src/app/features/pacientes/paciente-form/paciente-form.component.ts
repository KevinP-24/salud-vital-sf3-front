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
  paciente: CrearPacienteDTO = {
    nombre: '',
    apellido: '', // 🔹 siguen existiendo en el modelo pero no se usan
    correo: '',
    telefono: '',
    dni: '',
  };

  modoEdicion = false;
  idPaciente?: string;

  constructor(private pacienteService: PacienteService) {}

  ngOnInit(): void {}

  guardar(): void {
    if (this.modoEdicion && this.idPaciente) {
      const dto: EditarPacienteDTO = { id: this.idPaciente, ...this.paciente };
      this.pacienteService.editar(dto).subscribe(() => alert('✅ Paciente editado'));
    } else {
      const payload = {
        nombre: this.paciente.nombre,
        email: this.paciente.correo, // 👈 coincide con lo que el backend espera
      };

      this.pacienteService.crear(payload as any).subscribe({
        next: () => alert('✅ Paciente creado correctamente'),
        error: (err) => {
          console.error('❌ Error al crear paciente:', err);
          alert('Error al crear paciente');
        },
      });
    }
  }
}
