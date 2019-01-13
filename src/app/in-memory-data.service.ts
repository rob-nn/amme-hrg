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
      {
          id: 0,
          ses: 0,
          nome: 'José da Silva',
          sexo: Sexo.Masculino,
          dataNascimento: new Date(1975, 12, 29),
          estadoCivil: EstadoCivil.Divorciado,
          nacionalidade: Nacionalidade.Brasileira,
          endereco: "Av. do Coco, N. 10, Salvador, BA, CEP: 111111111",
          telefoneCelularPessoal: "61 922228888",
          telefoneCelularContato: "61 922228888",
          telefoneFixo: null,
          profissao: "Gerente de Banco",
          nomePai: "Marcos da Silva",
          nomeMae: "Josefa da Silva",
          orfao: false,
          timestamp: new Date(),
          numeroPassagem: 0,
      },
      {
          id: 1,
          ses: 1,
          nome: 'Lady Gaga',
          sexo: Sexo.Feminino,
          dataNascimento: new Date(1985, 1, 2),
          estadoCivil: EstadoCivil.Solteiro,
          nacionalidade: Nacionalidade.Estrangeira,
          endereco: "Av. Central, Bl. 190, N. 5, Nucleo Bandeirante, Brasilia, DF, CEP: 717170005",
          telefoneCelularPessoal: "61 911116666",
          telefoneCelularContato: "61 933337777",
          telefoneFixo: null,
          profissao: "Cantora",
          nomePai: "Michael Jackson",
          nomeMae: "Ophra Winfrey",
          orfao: false,
          timestamp: new Date(),
          numeroPassagem: 1,
      }
    ]
    return {pacientes};
  }

  genId(pacientes: Paciente[] ) {
    return pacientes.length > 0 ? Math.max(...pacientes.map(p=>p.id)) + 1: 4;
  }

}
