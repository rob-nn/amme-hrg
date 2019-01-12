import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Paciente } from './entity/paciente'

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const pacientes = [
      { id: 0, ses: 0, nome: 'xpto' },
      { id: 1, ses: 1, nome: 'xpto' },
      { id: 2, ses: 2, nome: 'xpto' },
    ]
    return {pacientes};
  }

  genId(pacientes: Paciente[] ) {
    return pacientes.length > 0 ? Math.max(...pacientes.map(p=>p.id)) + 1: 4;
  }
}
