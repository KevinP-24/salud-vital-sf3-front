import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; 
import { MedicoService } from '../../../../app/core/services/medico.service';
import { ItemMedicoDTO } from '../../../../app/core/models/medico.model';

@Component({
  selector: 'app-medico-list',
  standalone: true,
  templateUrl: './medico-list.component.html',
  imports: [CommonModule, RouterLink], 
})
export class MedicoListComponent implements OnInit {
  medicos: ItemMedicoDTO[] = [];
  cargando = true;

  constructor(private medicoService: MedicoService) {}

  ngOnInit(): void {
    this.medicoService.listar().subscribe({
      next: (data) => {
        this.medicos = data;
        this.cargando = false;
      },
      error: () => (this.cargando = false),
    });
  }
}
