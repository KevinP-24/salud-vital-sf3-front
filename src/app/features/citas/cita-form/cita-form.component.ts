import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CitaMedicaService } from '../../../../app/core/services/cita-medica.service';
import { CrearCitaMedicaDTO } from '../../../../app/core/models/cita-medica.model';

@Component({
  selector: 'app-cita-form',
  standalone: true, // 👈 CLAVE
  imports: [CommonModule, FormsModule, RouterLink], // 👈 CLAVE
  templateUrl: './cita-form.component.html',
})
export class CitaFormComponent {
  cita: CrearCitaMedicaDTO = {
    idPaciente: '',
    idMedico: '',
    fecha: '',
    hora: '',
  };

  constructor(private citaService: CitaMedicaService, private router: Router) {}

  agendar(): void {
    this.citaService.agendar(this.cita).subscribe({
      next: () => {
        alert('✅ Cita agendada exitosamente');
        this.router.navigate(['/citas']);
      },
      error: (err) => {
        console.error('❌ Error al agendar cita', err);
        alert('❌ Error al agendar la cita');
      },
    });
  }
}
