import { Turma } from './models/turma.model';
import { Aluno } from './models/aluno.model';
import { Disciplina } from './models/disciplina.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Aplicação Prova'
  showNotes: boolean

  ngOnInit() {
    this.showNotes = false
  }

  listaDisciplinas = [
    new Disciplina(110, 'Funcamentos de Programação'),
    new Disciplina(111, 'Estrutura de Dados'),
    new Disciplina(210, 'Orientada a Objetos')
  ]
  listaAluno = [
    new Aluno(201701, 'Matias José'),
    new Aluno(201702, 'Pedro Matheus'),
    new Aluno(201703, 'Fernando Noronha'),
    new Aluno(201704, 'Patricia Aguiar'),
    new Aluno(201705, 'Lucas José'),
    new Aluno(201706, 'João Almeida'),
    new Aluno(201707, 'Luana Fernandes'),
    new Aluno(201708, 'Paula Silva')
  ]

  //Lista de Turmas para Relatório
  listaTurma = []

  //Capturado do formulário para cadastro de turma
  codigoTurma: number
  escolhaDisciplina: Disciplina
  selecaoAluno: Aluno
  
  //Para alocação de alunos para uma turma
  listaAlunosTurma = [] 

  //Relatorio
  consultaRelatorio: Turma
  indice: number

  removeAlunoMatriculado(): number {
    this.listaAluno.forEach((aluno: Aluno, index: number) => {
      if (this.selecaoAluno == aluno) this.indice = index
    })
    return this.indice
  }

  matricular() {
    this.listaAlunosTurma.push(this.selecaoAluno) 
    this.listaAluno.splice(this.removeAlunoMatriculado(), 1)     
    this.selecaoAluno = null
  }

  validaFormulario(): boolean {
    if (this.codigoTurma==null || this.escolhaDisciplina==null || this.selecaoAluno==null)
      return false
    return true
  }

  validarDuplicacaoDeTurma(): any {
    return this.listaTurma.find(turma => turma.codigo==this.codigoTurma)
  }

  fecharTurma() {
    if (this.validarDuplicacaoDeTurma() == undefined){
      this.listaTurma.push(new Turma(this.codigoTurma, this.escolhaDisciplina, this.listaAlunosTurma))
      this.listaAlunosTurma = []
      this.escolhaDisciplina = null
    }
    else
      alert('Turma já existe, favor cadastrar com outro código de turma!')
    this.codigoTurma = null
    this.selecaoAluno = null
  }

  verificarTurma() {
    this.consultaRelatorio = this.listaTurma.find(turma => turma.codigo==this.codigoTurma)
    if(this.consultaRelatorio == undefined) alert('Turma não existe')
    this.codigoTurma = null
  }

  consultaTurmas() {
    this.showNotes = true
  }

  back() {
    this.showNotes = false
    this.codigoTurma = null
  }

}
