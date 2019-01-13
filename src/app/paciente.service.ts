import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Paciente } from './entity/paciente';
import { HeaderRowOutlet } from '@angular/cdk/table';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  private baseUrl = 'api/pacientes';  // URL to web api

  constructor(private http: HttpClient) { }

  getPaciente(id: number): Observable<Paciente> {
    return this.http.get<Paciente>(`${this.baseUrl}/${id}`);
  }

   procurarPaciente (ses: number): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(`${this.baseUrl}/?ses=${ses}`).pipe(
      catchError(this.handleError<Paciente[]>(`SES "${ses}" não encontrado`))
    );
  }
  
  addPaciente(paciente: Paciente): Observable<Paciente> {
    paciente.timestamp = new Date();
    paciente.numeroPassagem= Math.random() * 1000;
    return this.http.post<Paciente>(this.baseUrl, paciente, httpOptions).pipe(
      catchError(this.handleError<Paciente>('addPaciente'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  updatePaciente (paciente: Paciente): Observable<any> {
    return this.http.put(this.baseUrl, paciente, httpOptions).pipe(
      catchError(this.handleError<any>('updatePaciente'))
    );
  }

  private log(message: string) {
    alert(`HeroService: ${message}`);
  }
}