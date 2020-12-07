import { Component, OnInit, LOCALE_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {formatDate } from '@angular/common';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  order: any;
  products: any;
  data: any;
  total: number;
  url = 'http://localhost:3000';

  constructor(private httpClient: HttpClient,
              private nav: Router,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.products = JSON.parse(sessionStorage.getItem('products'));
    if(this.products.length == 0){
      this.toastr.error('', 'Seu carrinho está vazio!');
      this.nav.navigate(['/']);
    }

    this.data = {
      name: null,
      phone: null,
      delivery: null
    };
    this.total = this.products.reduce((total, obj) => total + obj.total, 0);
    // console.log(this.products, this.total, formatDate(new Date(), 'dd-MM-yyyy hh:mm:ss', 'en-US'))
  }

  send(){
    // console.log(this.data)
    this.order = {
      products: this.products,
      total: this.total,
      client: this.data,
      delivered: false,
      date: formatDate(new Date(), 'dd-MM-yyyy hh:mm:ss', 'en-US')
    };

    const req = this.httpClient.post(`${this.url}/orders`, this.order).toPromise();
    // req.then((res)=>{
      // console.log('Pedido salvo.');
      sessionStorage.setItem('products', JSON.stringify([]));
      this.toastr.success('Agradecemos a preferência! Volte sempre!', 'Pedido enviado!');
      this.nav.navigate(['/']);
    // }).catch((erro) => {
    //   console.log(erro);
    // });
  }

  onItemChange(value){
    this.data.delivery = value;
  }

  remove(id){
    // console.log(this.products, id)
    let pos = this.products.findIndex(o => o.product._id === id);
    this.products.splice(pos, 1);
    sessionStorage.setItem('products', JSON.stringify(this.products));

    if(this.products.length == 0)
      this.nav.navigate(['/']);
  }
}
