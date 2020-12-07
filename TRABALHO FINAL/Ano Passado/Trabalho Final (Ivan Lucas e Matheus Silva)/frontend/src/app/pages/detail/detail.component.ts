import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import {Location} from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit{
  product: any;
  optionRadio: any;
  optionCheckbox: any;
  qtd: number;
  total: number;
  obs: string;
  url = 'http://localhost:3000';

  constructor(private httpClient: HttpClient,
              private route: ActivatedRoute,
              private nav: Router,
              private toastr: ToastrService,
              private _location: Location) { }

  ngOnInit() {
    this.qtd = 1;
    this.total = 0;
    this.optionCheckbox = {
      rice_and_bean: [],
      side_dish: [],
    };

    const req = this.httpClient.get(`${this.url}/products/${this.route.snapshot.params['id']}`).toPromise();
    req.then((p)=>{
      this.product = p;
      this.optionRadio = {
        name: '',
        value: this.product.value
      };

      if(this.product.options.length == 0)
        this.total = this.product.value;
      // console.log(this.product);
    }).catch((erro) => {
      console.log(erro);
    });
  }

  increase(){
    this.qtd += 1;
    this.updateTotal(this.optionRadio);
  }

  decrease(){
    if(this.qtd != 1){
      this.qtd -= 1;
      this.updateTotal(this.optionRadio);
    }
    // this.toastr.error('Hello world!', 'Toastr fun!');
  }

  radioChoose(name: string, value: number){
    this.optionRadio = {
      name: name,
      value: value
    };

    console.log(this.optionRadio)
    this.updateTotal(this.optionRadio);
  }

  checkboxChoose(title: string, obj: any, e){
    if(e.target.checked){
      if(title === 'Arroz e Feijão'){
        if(this.optionCheckbox.rice_and_bean.length == 2){
          e.target.checked = false;
          obj.check = false;
          this.toastr.error('', 'Apenas 2 opções são permitidas!');
        }
        else{
          obj.check = true;
          this.optionCheckbox.rice_and_bean.push(
            {
              name: obj.name,
              value: obj.value
            }
          );
        }
      }
      else{
        if(this.optionCheckbox.side_dish.length == 4){
          e.target.checked = false;
          obj.check = false;
          this.toastr.error('', 'Apenas 4 opções são permitidas!');
        }
        else{
          obj.check = true;
          this.optionCheckbox.side_dish.push(
            {
              name: obj.name,
              value: obj.value
            }
          );
        }
      }
    }
    else{
      obj.check = false;

      if(title === 'Arroz e Feijão'){
        let pos = this.optionCheckbox.rice_and_bean.findIndex(o => o.name === name);
        this.optionCheckbox.rice_and_bean.splice(pos, 1);
      }
      else{
        let pos = this.optionCheckbox.side_dish.findIndex(o => o.name === name);
        this.optionCheckbox.side_dish.splice(pos, 1);
      }
    }
    // console.log(this.optionCheckbox)
  }

  updateTotal(option){
    if(option.value != 0){
      if(option.name == 'Filé mignon ao gorgonzola')
        this.total = (this.product.value + 3.5) * this.qtd;
      else
        this.total = option.value * this.qtd;
    }
    else
      this.total = this.product.value * this.qtd;
  }

  add(){
    let cart = JSON.parse(sessionStorage.getItem('products'));
    cart.push(
      {
        product: new Product(this.product._id, this.product.name, this.product.description, this.product.options, this.product.value, this.product.img),
        amount: this.qtd,
        opt: {
          radio: this.optionRadio,
          checkbox: this.optionCheckbox,
          obs: this.obs,
        },
        total: this.total
      }
    );

    sessionStorage.setItem('products', JSON.stringify(cart));
    // console.log(JSON.parse(sessionStorage.getItem('products')))
    this.toastr.success('Consulte seu pedido no carrinho de compras.', 'Produto adicionado!');
    this.nav.navigate(['/']);
  }

  back() {
    this._location.back();
  }

}
