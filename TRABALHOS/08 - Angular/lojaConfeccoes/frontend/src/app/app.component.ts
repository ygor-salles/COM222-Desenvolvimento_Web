import { ProdutoService } from './produto.service';
import { Produto } from './produto.model';
import { NotaFiscal } from './nota-fiscal.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //Lista de produtos que vem do banco
  produtos: Produto[]

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    //Preenchendo a lista de produtos que vem do banco
    this.produtoService.read().subscribe(produto => this.produtos = produto)
  }

  title = 'loja de Confecções'
  confirm_msg = ''
  nomeClienteTabela = ''

  //Capturado do formulário
  nomeCliente: string
  produtoComprado: Produto
  quantidade: number

  //listas de inserção para produtos comprados e suas respectivas quantidades
  listaProdutosComprados = []
  listaQuantidade = []

  //Lista de Notas Fiscais
  listaNF = []

  //Lista para a tabela que será exibida - Relatório unindo objeto NF + quantidade + totalItem
  tabela = []

  //total
  totalItem: number
  totalFinal: number = 0

  //Lendo produtos que vem do banco

  incluirItem() {
    if (this.quantidade > 0) {
      this.listaProdutosComprados.push(this.produtoComprado)
      this.listaQuantidade.push(this.quantidade)
      this.totalItem = parseFloat(((this.produtoComprado.valorUnitario - (this.produtoComprado.valorUnitario * (this.produtoComprado.desconto / 100))) * this.quantidade).toFixed(2))
      this.tabela.push({
        qtd: this.quantidade,
        produto: this.produtoComprado,
        totalItem: this.totalItem
      })
      this.totalFinal += this.totalItem
    }
    else {
      alert('Quantidade deve ser maior ou igual a 1')
    }
    this.produtoComprado = null
    this.quantidade = null
  }

  fecharNota() {
    this.listaNF.push(new NotaFiscal(this.nomeCliente, this.listaProdutosComprados))
    this.listaProdutosComprados = []
    this.listaQuantidade = []
    this.confirm_msg = '$' + this.totalFinal
    this.nomeClienteTabela = 'Cliente ' + this.nomeCliente
    this.nomeCliente = ''
  }

  novaNota() {
    this.listaProdutosComprados = []
    this.listaQuantidade = []
    this.confirm_msg = ''
    this.nomeClienteTabela = ''
    this.nomeCliente = ''
    this.produtoComprado = null
    this.quantidade = null
    this.tabela = []
    this.totalFinal = 0
    console.log(this.listaNF)
  }

}
