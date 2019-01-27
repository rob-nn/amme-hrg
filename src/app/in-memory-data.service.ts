import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Paciente, Sexo, EstadoCivil, Nacionalidade,  } from './entity/paciente';



@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const pacientes = [
      new Paciente(
          0,
          0,
          'José da Silva',
          Sexo.Masculino,
          new Date(1975, 12, 29),
          EstadoCivil.Divorciado,
          Nacionalidade.Brasileira,
          "Av. do Coco, N. 10, Salvador, BA, CEP: 111111111",
          "61 922228888",
          "61 922228888",
          null,
          "Gerente de Banco",
          "Marcos da Silva",
          "Josefa da Silva",
          false,
          new Date(),
      ),
      new Paciente(  
          1,
          1,
          'Lady Gaga',
          Sexo.Feminino,
          new Date(1985, 1, 2),
          EstadoCivil.Casado,
          Nacionalidade.Estrangeira,
          "Av. Central, Bl. 190, N. 5, Nucleo Bandeirante, Brasilia, DF, CEP: 717170005",
          "61 911116666",
          "61 933337777",
          "61 99999999",
          "Cantora",
          "Michael Jackson",
          "Ophra Winfrey",
          true,
          new Date(),
      )
    ]
    return {pacientes};
  }

  genId(pacientes: Paciente[] ) {
    return pacientes.length > 0 ? Math.max(...pacientes.map(p=>p.id)) + 1: 4;
  }

}
