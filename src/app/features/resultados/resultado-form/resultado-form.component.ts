import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators, FormGroup } from '@angular/forms';
import { ResultadoMedicoService } from '../../../core/services/resultado-medico.service';
import { Router } from '@angular/router';
import { CrearResultadoMedicoDTO } from '../../../core/models/resultado-medico.model';

@Component({
  selector: 'app-resultado-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './resultado-form.component.html',
})
export class ResultadoFormComponent implements OnInit {
  form!: FormGroup; // Usamos "!" para inicializarlo en ngOnInit

  constructor(
    private fb: FormBuilder,
    private resultadoService: ResultadoMedicoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      idCitaMedica: ['', [Validators.required, Validators.minLength(24), Validators.maxLength(24)]],
      descripcion: ['', [Validators.required, Validators.maxLength(1000)]],
      diagnostico: ['', [Validators.required, Validators.maxLength(500)]],
      recomendaciones: ['', [Validators.required, Validators.maxLength(1000)]],
      fechaRegistro: [new Date().toISOString().slice(0, 16), Validators.required],
    });
  }

  guardar(): void {
    if (this.form.valid) {
      const dto = this.form.value as CrearResultadoMedicoDTO; // 👈 Cast seguro

      this.resultadoService.crear(dto).subscribe({
        next: () => {
          alert('Resultado médico creado correctamente');
          this.router.navigate(['/resultados']);
        },
        error: (err) => {
          console.error('Error al crear resultado médico', err);
        },
      });
    } else {
      this.form.markAllAsTouched();
    }
  }
}
