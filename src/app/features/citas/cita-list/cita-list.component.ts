import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CitaMedicaService } from '../../../../app/core/services/cita-medica.service';
import { ItemCitaDTO } from '../../../../app/core/models/cita-medica.model';

@Component({
  selector: 'app-cita-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cita-list.component.html',
})
export class CitaListComponent implements OnInit {
  citas: ItemCitaDTO[] = [];
  cargando = true;

  constructor(private citaService: CitaMedicaService) {}

  ngOnInit(): void {
    this.cargarCitas();
  }

  /** 🔹 Cargar todas las citas */
  cargarCitas(): void {
    this.cargando = true;
    this.citaService.listar().subscribe({
      next: (data) => {
        this.citas = data;
        this.cargando = false;
      },
      error: (err) => {
        console.error('❌ Error al cargar citas:', err);
        this.cargando = false;
      },
    });
  }

  /** 🔹 Eliminar una cita */
  eliminarCita(id: number | string): void {
    if (confirm('¿Seguro que deseas eliminar esta cita?')) {
      this.citaService.eliminar(id).subscribe({
        next: () => {
          alert('✅ Cita eliminada correctamente');
          this.cargarCitas();
        },
        error: (err) => {
          console.error('❌ Error al eliminar cita:', err);
        },
      });
    }
  }

  /** 🔹 Cambiar estado de una cita (opcional) */
  actualizarEstado(id: number | string, nuevoEstado: string): void {
    this.citaService.actualizarEstado(id, nuevoEstado).subscribe({
      next: () => this.cargarCitas(),
      error: (err) => console.error('❌ Error al actualizar estado:', err),
    });
  }
}
