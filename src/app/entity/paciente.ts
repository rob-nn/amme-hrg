export enum Nacionalidade {
    Brasileira = 0,
    Estrangeira = 1,
    Naturalizado = 2
}
export enum EstadoCivil {
    Casado = 0,
    Divorciado = 1,
    Separado = 2,
    Solteiro = 3,
    UniaoEstavel = 4,
    Viuvo = 5
}
export enum Sexo {
    Feminino = 'f',
    Masculino = 'm'
}

export class Paciente {
    id: number;
    ses: number;
    nome: string;
    sexo: Sexo;
    dataNascimento: Date;
    estadoCivil: EstadoCivil;
    nacionalidade: Nacionalidade;
    endereco: string;
    telefoneCelularPessoal: string;
    telefoneCelularContato: string;
    telefoneFixo: String;
    profissao: String;
    nomePai: String;
    nomeMae: String;
    orfao: boolean;
    timestamp: Date;
    numeroPassagem: number;
}