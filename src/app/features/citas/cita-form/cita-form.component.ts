import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CitaMedicaService } from '../../../../app/core/services/cita-medica.service';
import { MedicoService } from '../../../../app/core/services/medico.service';
import { CrearCitaMedicaDTO } from '../../../../app/core/models/cita-medica.model';
import { ItemMedicoDTO } from '../../../../app/core/models/medico.model';
@Component({
  selector: 'app-cita-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './cita-form.component.html',
})
export class CitaFormComponent implements OnInit {
cita: CrearCitaMedicaDTO = {
  idPaciente: '',
  idMedico: '',
  horario: {
    fecha: '',
    horaInicio: '',
    horaFin: '',
  },
};

  especialidades: string[] = ['GINECOLOGO', 'PEDIATRA', 'DERMATOLOGO', 'CARDIOLOGO', 'GENERAL'];
  especialidadSeleccionada: string = '';
  medicosFiltrados: ItemMedicoDTO[] = [];
  todosMedicos: ItemMedicoDTO[] = [];

  constructor(private citaService: CitaMedicaService,
              private medicoService: MedicoService,
              private router: Router) {}

ngOnInit(): void {
  this.medicoService.listar().subscribe({
    next: (data) => {
      // Aseguramos que todos tengan "id"
      this.todosMedicos = data.map((m: any) => ({
        ...m,
        id: m.id || m._id, // si viene como "_id" lo copiamos a "id"
      }));
    },
    error: (err) => console.error('Error cargando médicos', err),
  });
}


  cargarMedicosPorEspecialidad(): void {
    if (!this.especialidadSeleccionada) {
      this.medicosFiltrados = [];
      return;
    }
    this.medicosFiltrados = this.todosMedicos.filter(
      m => m.especialidad === this.especialidadSeleccionada
    );
    // Limpiar selección anterior de médico
    this.cita.idMedico = '';
  }

  agendar(): void {
    console.log('Cita a enviar:', this.cita);
    this.citaService.agendar(this.cita).subscribe({
      next: () => {
        alert('Cita agendada exitosamente');
        this.router.navigate(['/citas']);
      },
      error: (err) => {
        console.error('Error al agendar cita', err);
        alert('Error al agendar la cita');
      },
    });
  }
}
