import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../../models/order';
import { Product } from '../../models/product';
import { Type } from '../../models/type';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements AfterViewInit {
  products: any;
  types: any;
  list: any;
  typeProducts: any;
  url = 'http://localhost:3000';

  constructor(private httpClient: HttpClient,
    private cdr: ChangeDetectorRef) { }

  ngAfterViewInit() {
    this.list = [];
    this.products = [];
    this.types = [];
    this.typeProducts = [];
    this.getTypes();
    this.getProducts();
    this.cdr.detectChanges();
    // console.log(this.list);
  }

  getTypes(){
    const req = this.httpClient.get(`${this.url}/types`).toPromise();
    req.then((types)=>{
      this.types = types;

      this.types.map((t) => {
        this.list.push(new Type(t._id, t.name, []));
      });
      // console.log(this.types);
    }).catch((erro) => {
      console.log(erro);
    });
  }

  getProducts(){
    const req = this.httpClient.get(`${this.url}/products`).toPromise();
    req.then((products)=>{
      this.products = products;

      this.products.map((p) => {
        this.list.map((l) => {
          if(l._id === p.types_id){
            l.products.push(new Product(p._id, p.name, p.description, p.options, p.value, p.img));
          }
        });
      });

      this.typeProducts = this.list;
    }).catch((erro) => {
      console.log(erro);
    });
  }

  onChange(e){
    let id = e.target.options[e.target.options.selectedIndex].value;

    if(id != ''){
      this.list = this.typeProducts.filter((l) => {
        return l._id === id;
      });
    }
    else{
      this.list = this.typeProducts;
    }
  }
}
