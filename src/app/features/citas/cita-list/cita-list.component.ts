import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; 
import { CitaMedicaService } from '../../../../app/core/services/cita-medica.service';
import { ItemCitaMedicaDTO } from '../../../../app/core/models/cita-medica.model';

@Component({
  selector: 'app-cita-list',
  standalone: true,
  imports: [CommonModule, RouterLink], 
  templateUrl: './cita-list.component.html', 
})
export class CitaListComponent implements OnInit {
  citas: ItemCitaMedicaDTO[] = [];
  cargando = true;

  constructor(private citaService: CitaMedicaService) {}

  ngOnInit(): void {
    // ⚠️ Cambia el ID de paciente por uno real de tu base
    const idPaciente = 'ID_PACIENTE_DE_PRUEBA';
    this.citaService.listarPorPaciente(idPaciente).subscribe({
      next: (data) => {
        this.citas = data;
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error al cargar citas', err);
        this.cargando = false;
      },
    });
  }
}
