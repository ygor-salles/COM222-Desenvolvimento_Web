import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from './models/order';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: any;
  notes: any;
  orderModel: any;
  order: any;
  nameProduct: string;
  valueProduct: number;
  total: number;
  hideTable: boolean;
  hideTotal: boolean;
  showNotes: boolean;
  url = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.products = [];
    this.notes = [];
    this.orderModel = {};
    this.order = new Order('', [], 0);

    this.hideTable = false;
    this.hideTotal = false;
    this.showNotes = false;
    this.total = 0;

    const req = this.httpClient.get(`${this.url}/products`).toPromise();
    req.then((products)=>{
      this.products = products;
      this.getNotes();
      // console.log(this.products);
    }).catch((erro) => {
      console.log(erro);
    });
  }

  getNotes(){
    const req3 = this.httpClient.get(`${this.url}/notes`).toPromise();
    req3.then((notes)=>{
      this.notes = notes;
      // console.log(this.notes);
    }).catch((erro) => {
      console.log(erro);
    });
  }

  addItem(){
    this.hideTable = true;

    this.total = this.orderModel.discount <= 0 || this.orderModel.discount == null ? (parseFloat(this.orderModel.amount) * this.valueProduct) : (parseFloat(this.orderModel.amount) * this.valueProduct) - (parseFloat(this.orderModel.amount) * this.valueProduct * this.orderModel.discount / 100);
    this.order.name = this.orderModel.name;
    this.order.products.push(
      new Product(this.orderModel.product, this.nameProduct, this.orderModel.amount, this.orderModel.discount, this.valueProduct, this.total)
    );
    this.order.total += this.orderModel.discount <= 0 || this.orderModel.discount == null ? (parseFloat(this.orderModel.amount) * this.valueProduct) : (parseFloat(this.orderModel.amount) * this.valueProduct) - (parseFloat(this.orderModel.amount) * this.valueProduct * this.orderModel.discount / 100);

    this.orderModel.product = null;
    this.orderModel.amount = null;
    this.orderModel.discount = null;
    // console.log(this.order);
  }

  onChange($event){
    let selected = $event.target.options[$event.target.options.selectedIndex].text;
    this.nameProduct = selected.split(' - R$')[0];
    this.valueProduct = parseFloat(selected.split(' - R$')[1]);
  }

  closeNote(){
    this.hideTotal = true;
  }

  saveNote(){
    const req2 = this.httpClient.post(`${this.url}/notes`, this.order).toPromise();
    req2.then(()=>{
      console.log('Nota salva.');
    }).catch((erro) => {
      console.log(erro);
    });

    location.reload();
  }

  clickNotes(){
    this.showNotes = true;
    this.getNotes();
  }

  back(){
    this.showNotes = false;
  }
}