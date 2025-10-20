import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MedicoService } from '../../../../app/core/services/medico.service';
import {
  CrearMedicoDTO,
  EditarMedicoDTO,
  InformacionMedicoDTO,
} from '../../../../app/core/models/medico.model';

@Component({
  selector: 'app-medico-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './medico-form.component.html',
})
export class MedicoFormComponent implements OnInit {
  medico: CrearMedicoDTO = {
    id: '',
    nombre: '',
    apellido: '',
    especialidad: '',
    correo: '',
    jornadaMedico: '',
  };

  modoEdicion = false;
  idMedico?: string;


  jornadas: string[] = ['HORARIO_1', 'HORARIO_2', 'HORARIO_3'];
  especialidades: string[] = ['GINECOLOGO', 'PEDIATRA', 'DERMATOLOGO', 'CARDIOLOGO', 'GENERAL'];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private medicoService: MedicoService
  ) {}

  ngOnInit(): void {
    this.idMedico = this.route.snapshot.paramMap.get('id') || undefined;

    if (this.idMedico) {
      this.modoEdicion = true;

      this.medicoService.obtenerPorId(this.idMedico).subscribe({
        next: (data: InformacionMedicoDTO) => {
          const [nombre, apellido = ''] = data.nombreCompleto.split(' ');

          this.medico = {
            id: data.id,
            nombre,
            apellido,
            especialidad: data.especialidad,
            correo: data.correo ?? '',
            jornadaMedico: data.jornadaMedico ?? '',
          };
        },
        error: (err) => console.error('Error cargando médico', err),
      });
    }
  }

  guardar(): void {
     console.log('DTO a enviar:', this.medico);
    if (!this.medico.id?.trim()) {
      alert('La cédula es obligatoria');
      return;
    }

    if (this.modoEdicion && this.idMedico) {
      const dto: EditarMedicoDTO = {
        ...this.medico,
      };

      this.medicoService.editar(dto).subscribe({
        next: () => {
          alert('✅ Médico editado exitosamente');
          this.router.navigate(['/medicos']);
        },
        error: () => alert('Error al editar médico'),
      });
    } else {
      this.medicoService.crear(this.medico).subscribe({
        next: () => {
          alert('Médico creado exitosamente');
          this.router.navigate(['/medicos']);
        },
        error: () => alert('Error al crear médico'),
      });
    }
  }
}
