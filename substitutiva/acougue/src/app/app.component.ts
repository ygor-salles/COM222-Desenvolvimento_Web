import { Tabelapreco } from './models/tabela-preco';
import { Item } from './models/item';
import { Pedido } from './models/pedido';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Açougue Boi Bão'
  mostraPedido: boolean
  valorTotalPedido = 0

  ngOnInit(): void {
    this.mostraPedido = false
  }

  pedido: Pedido
  
  nome: string
  endereco: string
  escolhaCarne: Tabelapreco
  peso: string
  itens = []

  opcaoesCarne = [
    new Tabelapreco('Acém', 22),
    new Tabelapreco('Patinho', 35),
    new Tabelapreco('Contra-Filé', 42),
    new Tabelapreco('Alcatra', 45),
    new Tabelapreco('Fraldinha', 30),
    new Tabelapreco('Filé Mignon', 60)
  ]

  validarItem(): boolean {
    if(this.nome==null || this.endereco==null || this.escolhaCarne==null || this.peso==null) return false
    return true
  }

  validarPedido(): boolean {
    if(this.itens.length == 0) return false
    return true
  }

  incluirItem(): void {
    this.itens.push(new Item(this.escolhaCarne.carne, parseFloat(this.peso), (this.escolhaCarne.preco*parseFloat(this.peso))))
    this.valorTotalPedido += (this.escolhaCarne.preco*parseFloat(this.peso))
    //alert('Item incluído com sucesso!')
    this.peso = null
    this.escolhaCarne = null
    console.log(this.itens)
  }

  fecharPedido(): void {
    this.pedido = new Pedido(this.nome, this.endereco, this.itens)
    //this.valorTotalPedido = this.itens.map(item => item.precoTotal).reduce((soma, atual, i) => {return soma+atual})
    console.log(this.pedido)
    this.mostraPedido = true
  }

  novoPedido(): void {
    window.location.reload()
  }

  voltar(): void {
    this.mostraPedido = false
  }
}
