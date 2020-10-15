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

  nf: NotaFiscal = {
    nomeCliente: '',
    produtosComprados: []
  }

  produtos = [
    new Produto(1, 'Calça Jeans', 10, 0), 
    new Produto(2, 'Blusa Jeans', 50, 0), 
    new Produto(3, 'Camisa Polo', 10, 0),
    new Produto(4, 'Bermuda nilon', 5, 1)
  ]
  
  
}
