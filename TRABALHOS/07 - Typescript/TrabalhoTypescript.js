class Pessoa {
    constructor(nome, dataNascimento, sexo) {
        this._nome = nome;
        this._dataNascimento = dataNascimento;
        this._sexo = sexo;
    }
    get nome() {
        return this._nome;
    }
    get dataNascimento() {
        return this._dataNascimento;
    }
    get sexo() {
        return this._sexo;
    }
}
class Aluno extends Pessoa {
    constructor(nome, dataNascimento, sexo) {
        super(nome, dataNascimento, sexo);
    }
    getExibiDescricao() {
        //throw new Error("Method not implemented.")
        console.log('Nome: ' + this.nome);
        console.log('Data Nascimento: ' + this.dataNascimento);
        console.log('Sexo: ' + this.sexo);
        console.log();
    }
}
class Professor extends Pessoa {
    constructor(nome, dataNascimento, sexo, categoria) {
        super(nome, dataNascimento, sexo);
        this._categoria = categoria;
    }
    getExibiDescricao() {
        //throw new Error("Method not implemented.")
        console.log('Nome: ' + this.nome);
        console.log('Data Nascimento: ' + this.dataNascimento);
        console.log('Sexo: ' + this.sexo);
        console.log('Categoria: ' + this._categoria);
        console.log();
    }
}
class Turma {
    constructor(professor, aluno, codigo) {
        this._professor = professor;
        this._aluno = aluno;
        this._codigo = codigo;
    }
    get codigo() {
        return this._codigo;
    }
    get professor() {
        return this._professor;
    }
    get aluno() {
        return this._aluno;
    }
}
class Disciplina {
    constructor(nome, turma) {
        this._nome = nome;
        this._turma = turma;
    }
    get nome() {
        return this._nome;
    }
    get turma() {
        return this._turma;
    }
}
// Instaciando os objetos ------------------------------------
let prof = new Professor('Paulo Joaquim Tadeu', '18/07/1996', 'M', 'Doutorado');
var aluno1 = new Aluno('Mauricio Ricardo', '09/07/1999', 'M');
var aluno2 = new Aluno('Maria Aparecida', '04/05/2000', 'F');
var aluno3 = new Aluno('Mattos Nascimento', '04/08/1980', 'M');
var aluno4 = new Aluno('Paula Santana', '09/08/1999', 'F');
var aluno5 = new Aluno('Carlos Eduardo', '10/07/1990', 'M');
var listaAlunos1 = [aluno1, aluno2, aluno3];
var listaAlunos2 = [aluno4, aluno5];
let turma1 = new Turma(prof, listaAlunos1, 'SIN');
var turma2 = new Turma(prof, listaAlunos2, 'CCO');
var listaTurmas = [turma1, turma2];
var disc = new Disciplina('Desenvolvimento Web', listaTurmas);
//Imprimindo os atributos e métodos dos objetos ------------------------------------
console.log('PROFESSOR:...................................................');
prof.getExibiDescricao();
console.log();
console.log('ALUNOS:...................................................');
aluno1.getExibiDescricao();
aluno2.getExibiDescricao();
aluno3.getExibiDescricao();
aluno4.getExibiDescricao();
aluno5.getExibiDescricao();
console.log();
console.log('TURMAS:...................................................');
console.log('Código: ' + turma1.codigo + '\nProfessor: ' + turma1.professor.nome + '\nLista de Alunos:');
turma1.aluno.forEach(aluno => {
    console.log(`Aluno: ${aluno.nome} -- Nascimento: ${aluno.dataNascimento} -- Sexo: ${aluno.sexo}`);
});
console.log();
console.log('Código: ' + turma2.codigo + '\nProfessor: ' + turma2.professor.nome + '\nLista de Alunos:');
turma2.aluno.forEach(aluno => {
    console.log(`Aluno: ${aluno.nome} -- Nascimento: ${aluno.dataNascimento} -- Sexo: ${aluno.sexo}`);
});
console.log();
console.log('DISCIPLINAS:...................................................');
console.log(`Nome: ${disc.nome} \nLista de Turmas: `);
disc.turma.forEach(turma => {
    console.log(`Turma: ${turma.codigo} -- Professor: ${turma.professor.nome}`);
});
console.log();
