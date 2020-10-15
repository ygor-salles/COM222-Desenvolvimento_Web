import { Produto } from './produto.model';
import { NotaFiscal } from './nota-fiscal.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lojaConfeccoes'
  confirm_msg = ''

  //Capturado do formulário
  nomeCliente: string
  produtoComprado: Produto
  quantidade: number

  //listas de inserção para produtos comprados e suas respectivas quantidades
  listaProdutosComprados = []
  listaQuantidade = []

  //Lista de Notas Fiscais
  listaNF = []
  tabela = []

  //Lista de produtos pré-definidas que terão que vir do banco
  produtos = [
    new Produto(1, 'Calça Jeans', 10, 0), 
    new Produto(2, 'Blusa Jeans', 50, 0), 
    new Produto(3, 'Camisa Polo', 10, 5.5),
    new Produto(4, 'Bermuda nilon', 5, 1)
  ]

  incluirItem(){
    console.log(this.nomeCliente)
    console.log(this.quantidade)
    console.log(this.produtoComprado.codigo)
    if (this.quantidade > 0){
      this.listaProdutosComprados.push(this.produtoComprado)
      this.listaQuantidade.push(this.quantidade)
    }
    this.produtoComprado = null
    this.quantidade = null
  }
  
  fecharNota(){
    /*
    for(let i=0; i<=this.listaQuantidade.length; i++){
      this.tabela = {quantidade: this.listaQuantidade, produto: this.listaQuantidade}
    }*/
    this.listaNF.push(new NotaFiscal(this.nomeCliente, this.listaProdutosComprados, this.listaQuantidade))
    this.listaProdutosComprados = []
    this.listaQuantidade = []
  }

}
