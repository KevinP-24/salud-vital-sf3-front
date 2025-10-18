import { Routes } from '@angular/router';
import { PacienteListComponent } from './features/pacientes/paciente-list/paciente-list.component';
import { PacienteFormComponent } from './features/pacientes/paciente-form/paciente-form.component';
import { MedicoListComponent } from './features/medicos/medico-list/medico-list.component';
import { MedicoFormComponent } from './features/medicos/medico-form/medico-form.component';
import { CitaListComponent } from './features/citas/cita-list/cita-list.component';
import { CitaFormComponent } from './features/citas/cita-form/cita-form.component';

export const routes: Routes = [
  { path: '', redirectTo: 'pacientes', pathMatch: 'full' },
  { path: 'pacientes', component: PacienteListComponent },
  { path: 'pacientes/nuevo', component: PacienteFormComponent },
  { path: 'pacientes/editar/:id', component: PacienteFormComponent },
  { path: 'medicos', component: MedicoListComponent },
  { path: 'medicos/nuevo', component: MedicoFormComponent },
  { path: 'medicos/editar/:id', component: MedicoFormComponent },
  { path: 'citas', component: CitaListComponent },
  { path: 'citas/nueva', component: CitaFormComponent },
];
