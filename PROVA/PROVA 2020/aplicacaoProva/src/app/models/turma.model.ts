import { Aluno } from './aluno.model';
import { Disciplina } from './disciplina.model';
export class Turma {
    constructor(
        public codigo: number,
        public discipTurma: Disciplina,
        public listaAlunos: Aluno[]
    ) {} 
}