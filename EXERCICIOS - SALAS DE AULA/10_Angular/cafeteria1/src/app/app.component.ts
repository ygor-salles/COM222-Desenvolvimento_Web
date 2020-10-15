import { Component } from '@angular/core';
import { Order } from './order'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cafetaria do Baldochi';
  authors = 'Laercio Baldochi';

  drinks = ['Café', 'Chá', 'Leite'];

  orderModel = new Order('alguém', 'alguém@unifei.edu.br', 987654321, '', '', true);

  confirm_msg = 'Antes de confirmar';
  data_submitted = '';

  onSubmit(value){

  }

  confirmOrder(data) {
     console.log(data);
     this.confirm_msg = 'Obrigado, ' + data.name + '(' + data.name.length + ')';
     this.confirm_msg += '. Você pediu ' + data.drink_option;
  }

}
