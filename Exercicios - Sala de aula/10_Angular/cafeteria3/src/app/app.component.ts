import { Component } from '@angular/core';
import { Order } from './order';
import { OrderItem } from './order-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Café do Baldochi';

  authorName = 'Laercio Baldochi';

  drinks = ['Café Espresso', 'Café coado', 'Café com leite', 'Capuccino', 'Suco de laranja'];

  foods = ['Bolo de chocolate', 'Bolo de cenoura', 'Pão de queijo', 'Misto quente'];

  orderItems = [];

  orderModel = new Order('someone', 'someone@uva.edu', 9991234567, '', 0, '', 0, true);

  confirm_msg = '';

  confirmOrder() {
    this.confirm_msg = this.orderModel.name + ' fez o seguinte pedido:';
  }

  addItem() {
    if (this.orderModel.quantDrink > 0) {
      this.orderItems.push(new OrderItem(this.orderModel.quantDrink, this.orderModel.drink));
    }

    if (this.orderModel.quantFood > 0) {
      this.orderItems.push(new OrderItem(this.orderModel.quantFood, this.orderModel.food));
    }
    this.orderModel.quantDrink = 0;
    this.orderModel.drink = '';
    this.orderModel.quantFood = 0;
    this.orderModel.food = '';
    console.log(this.orderItems);
  }


}
