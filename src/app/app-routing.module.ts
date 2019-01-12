import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcolhimentoPacienteComponent } from './acolhimento-paciente/acolhimento-paciente.component';
import { SplashComponent } from './splash/splash.component';

const routes: Routes = [
  { path: '', redirectTo: '/splash', pathMatch: 'full' },
  { path: 'splash', component: SplashComponent},
  { path: 'acolhimentoPaciente', component: AcolhimentoPacienteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
