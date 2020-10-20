import { NotaFiscalService } from './services/nota-fiscal.service';
import { ProdutoService } from './services/produto.service';
import { Produto } from './models/produto.model';
import { NotaFiscal } from './models/nota-fiscal.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //Lista de produtos e notas fiscais que vem do banco
  produtos: Produto[]
  notasFiscais: NotaFiscal[]

  constructor(private produtoService: ProdutoService, private notaFiscalService: NotaFiscalService) { }

  ngOnInit(): void {
    //Preenchendo a lista de produtos que vem do banco
    this.produtoService.read().subscribe(produto => this.produtos = produto)
    this.showNotes = false
  }

  title = 'Loja de Confecções'
  confirm_msg = ''
  nomeClienteTabela = ''
  showNotes: boolean

  //Capturado do formulário
  nomeCliente: string
  produtoComprado: Produto
  quantidade: number

  //listas de inserção para produtos comprados e suas respectivas quantidades
  listaProdutosComprados = []
  listaQuantidade = []

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
    this.notaFiscalService.create(new NotaFiscal(this.nomeCliente, this.listaProdutosComprados)).subscribe(() => {
      alert('Nota Fiscal emitida com sucesso')
      this.listaProdutosComprados = []
      this.listaQuantidade = []
      this.confirm_msg = '$' + this.totalFinal.toFixed(2)
      this.nomeClienteTabela = 'Cliente ' + this.nomeCliente
      this.nomeCliente = ''
    })
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
  }

  clickNotes() {
    this.showNotes = true
    this.notaFiscalService.read().subscribe(nf => this.notasFiscais = nf)
  }

  back(){
    this.showNotes = false
  }

}
