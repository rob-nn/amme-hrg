import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcolhimentoPacienteComponent } from './acolhimento-paciente/acolhimento-paciente.component';
import { SplashComponent } from './splash/splash.component';
import { PacienteComponent } from './paciente/paciente.component';
import { ConsultaTriagemComponent } from './consulta-triagem/consulta-triagem.component';

const routes: Routes = [
  { path: '', redirectTo: '/splash', pathMatch: 'full' },
  { path: 'splash', component: SplashComponent },
  { path: 'acolhimentoPaciente', component: AcolhimentoPacienteComponent },
  { path: 'paciente/:id', component: PacienteComponent },
  { path: 'paciente', component: PacienteComponent },
  { path: 'triagem/:pacienteId', component: ConsultaTriagemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }