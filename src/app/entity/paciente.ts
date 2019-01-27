export enum Nacionalidade {
    Brasileira = "0",
    Estrangeira = "1",
    Naturalizado = "2"
}
export enum EstadoCivil {
    Casado = "0",
    Divorciado = "1",
    Separado = "2",
    Solteiro = "3",
    UniaoEstavel = "4",
    Viuvo = "5"
}
export enum Sexo {
    Feminino = 'f',
    Masculino = 'm'
}

export class Paciente {
    constructor (
    public id?: number,
    public ses?: number,
    public nome?: string,
    public sexo?: Sexo,
    public dataNascimento?: Date,
    public estadoCivil?: EstadoCivil,
    public nacionalidade?: Nacionalidade,
    public endereco?: string,
    public telefoneCelularPessoal?: string,
    public telefoneCelularContato?: string,
    public telefoneFixo?: String,
    public profissao?: String,
    public nomePai?: String,
    public nomeMae?: String,
    public orfao?: boolean,
    public timestamp?: Date,
    public triagem: PerguntaTriagem [] = [
        new PerguntaTriagem('Vocë tem pressão alta (Hipertensão Arterial)'),
        new PerguntaTriagem('Você tem diabetes?'),
        new PerguntaTriagem('Vocë tem arritimia (no coração)?'),
    ]){}
}

export class PerguntaTriagem {
    constructor (
        public pergunta: string,
        public resposnta: boolean = false
    ) {}
}