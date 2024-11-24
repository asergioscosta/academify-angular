import { IAluno } from "./ialuno";

export class Aluno implements IAluno {
    id?: number;
    matricula?: string;
    nome?: string;
    nascimento?: Date;
    dataHoraCadastro?: Date;
}
