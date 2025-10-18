import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PacienteService } from '../../../../app/core/services/paciente.service';
import { ItemPacienteDTO } from '../../../../app/core/models/paciente.model';

@Component({
  selector: 'app-paciente-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './paciente-list.component.html',
})
export class PacienteListComponent implements OnInit {
  pacientes: ItemPacienteDTO[] = [];
  cargando = true;

  constructor(private pacienteService: PacienteService) {}

  ngOnInit(): void {
    this.cargarPacientes();
  }

  cargarPacientes(): void {
    this.pacienteService.listar().subscribe({
      next: (data) => {
        this.pacientes = data;
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error cargando pacientes', err);
        this.cargando = false;
      },
    });
  }

  eliminar(id: string): void {
    if (confirm('¿Deseas eliminar este paciente?')) {
      this.pacienteService.eliminar(id).subscribe(() => this.cargarPacientes());
    }
  }
}
