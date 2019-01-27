import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module.module';
import { SplashComponent } from './splash/splash.component';
import { AcolhimentoPacienteComponent, DialogCadastrarNovoPaciente } from './acolhimento-paciente/acolhimento-paciente.component';
import { PacienteComponent } from './paciente/paciente.component';
import { ConsultaTriagemComponent } from './consulta-triagem/consulta-triagem.component';
import { ConsultaAcolhimentoComponent } from './consulta-acolhimento/consulta-acolhimento.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    AcolhimentoPacienteComponent,
    DialogCadastrarNovoPaciente,
    PacienteComponent,
    ConsultaTriagemComponent,
    ConsultaAcolhimentoComponent,
  ],
  entryComponents: [AcolhimentoPacienteComponent, DialogCadastrarNovoPaciente],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
      ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
