import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module.module';
import { SplashComponent } from './splash/splash.component';
import { AcolhimentoPacienteComponent } from './acolhimento-paciente/acolhimento-paciente.component';

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    AcolhimentoPacienteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
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
