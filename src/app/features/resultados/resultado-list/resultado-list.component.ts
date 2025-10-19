import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ResultadoMedicoService } from '../../../core/services/resultado-medico.service';
import { InformacionResultadoMedicoDTO } from '../../../core/models/resultado-medico.model';

@Component({
  selector: 'app-resultado-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './resultado-list.component.html',
})
export class ResultadoListComponent implements OnInit {
  resultados: InformacionResultadoMedicoDTO[] = [];
  cargando = true;

  constructor(private resultadoService: ResultadoMedicoService) {}

  ngOnInit(): void {
    this.cargarResultados();
  }

  cargarResultados(): void {
    this.resultadoService.listar().subscribe({
      next: (data) => {
        this.resultados = data;
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error cargando resultados médicos', err);
        this.cargando = false;
      },
    });
  }

  eliminar(idCita: string): void {
    if (confirm('¿Deseas eliminar este resultado médico?')) {
      this.resultadoService.eliminar(idCita).subscribe(() => this.cargarResultados());
    }
  }
}
