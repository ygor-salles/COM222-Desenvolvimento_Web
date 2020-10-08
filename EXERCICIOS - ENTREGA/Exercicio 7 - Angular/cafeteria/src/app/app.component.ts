import { Component } from '@angular/core';
import { Order } from './order'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Cafeteria do Ygor';
  authors: string = 'Ygor Salles'
  
  drinks = ['Café', 'Chá', 'Leite']
  foods = ['Bolo de Cenoura', 'Pão de Sal', 'Rosquinha de creme', 'Coxinha', 'Pastel', 'Pão de Queijo']

  orderModel = new Order('ygor', 'ygor.unifei@edu.br', 987654321, '', 1, '', 1, '', false)

  confirm_msg: string = 'Antes de confirmar'
  data_submitted: string = ''

  onSubmit(value) {
    console.log(value)
  }

  confirmOrder(data) {
    console.log(data)
    this.confirm_msg = `Obrigado ${data.name} (${data.name.length})`
    this.confirm_msg += ` Você pediu ${data.drink_option} e ${data.food_option}`
  }

}
