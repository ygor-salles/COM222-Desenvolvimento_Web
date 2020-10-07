import { Component } from '@angular/core';
import { Order } from './order'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Awesome Shop';
  authors = 'Upsorn';

  drinks = ['Coffee', 'Tea', 'Milk'];

  orderModel = new Order('someone', 'someone@uva.edu', 999, '', '', true);

  confirm_msg = 'before confirm';
  data_submitted = '';

  confirmOrder(data) {
     console.log(data);
     this.confirm_msg = 'Thank you, ' + data.name + '(' + data.name.length + ')';
     this.confirm_msg += '. You ordered ' + data.drink_option;
  }

}
