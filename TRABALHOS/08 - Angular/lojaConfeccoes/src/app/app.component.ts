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
    new Produto(1234, 'Calça Jeans', 10, 0), 
    new Produto(2345, 'Blusa Jeans', 50, 0), 
    new Produto(3456, 'Camisa Polo', 10, 5.5),
    new Produto(4567, 'Bermuda nilon', 5, 1)
  ]

  incluirItem(){
    if (this.quantidade > 0){
      this.listaProdutosComprados.push(this.produtoComprado)
      this.listaQuantidade.push(this.quantidade)
      this.tabela.push({
        qtd: this.quantidade,
        produto: this.produtoComprado,
        totalItem: parseFloat(((this.produtoComprado.valorUnitario - (this.produtoComprado.valorUnitario * (this.produtoComprado.desconto/100))) * this.quantidade).toFixed(2))
      })
    }
    else {
      alert('Quantidade deve ser maior ou igual a 1')
    }
    this.produtoComprado = null
    this.quantidade = null
  }
  
  fecharNota(){
    this.listaNF.push(new NotaFiscal(this.nomeCliente, this.listaProdutosComprados))
    this.listaProdutosComprados = []
    this.listaQuantidade = []
    this.nomeCliente = ''
  }

}
