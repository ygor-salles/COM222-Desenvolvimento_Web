import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: any;
  detail: any;
  products: any;
  optionRadio: any;
  optionCheckbox: any;
  qtd: number;
  total: number;
  obs: string;
  url = 'http://localhost:3000';

  constructor(private route: ActivatedRoute,
              private nav: Router,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.products = JSON.parse(sessionStorage.getItem('products'));

    let pos = this.products.findIndex(o => o.product._id === this.route.snapshot.params['id']);
    this.detail = this.products[pos];
    this.product = this.detail.product;

    this.obs = this.detail.opt.obs;
    this.qtd = this.detail.amount;
    this.total = this.detail.total;

    this.optionCheckbox = {
      rice_and_bean: this.detail.opt.checkbox.rice_and_bean,
      side_dish: this.detail.opt.checkbox.side_dish,
    };
    this.optionRadio = this.detail.opt.radio;
    console.log(this.detail, this.product, this.detail.opt.checkbox.rice_and_bean)
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
  }

  radioChoose(name: string, value: number){
    this.optionRadio = {
      name: name,
      value: value
    };

    console.log(this.optionRadio)
    this.updateTotal(this.optionRadio);
  }

  checkboxChoose(title: string, name: string, value: number, e){
    if(e.target.checked){
      if(title === 'Arroz e Feijão'){
        if(this.optionCheckbox.rice_and_bean.length == 2){
          e.target.checked = false;
          this.toastr.error('', 'Apenas 2 opções são permitidas!');
        }
        else{
          this.optionCheckbox.rice_and_bean.push(
            {
              name: name,
              value: value
            }
          );
        }
      }
      else{
        if(this.optionCheckbox.side_dish.length == 4){
          e.target.checked = false;
          this.toastr.error('', 'Apenas 4 opções são permitidas!');
        }
        else{
          this.optionCheckbox.side_dish.push(
            {
              name: name,
              value: value
            }
          );
        }
      }
    }
    else{
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

  edit(){
    this.products = JSON.parse(sessionStorage.getItem('products'));

    this.products.map((order) => {
      if(order.product._id == this.product._id){
        order.product = new Product(this.product._id, this.product.name, this.product.description, this.product.options, this.product.value, this.product.img);
        order.amount =  this.qtd;
        order.opt.radio = this.optionRadio;
        order.opt.checkbox = this.optionCheckbox;
        order.opt.obs = this.obs;
        order.total = this.total;
        return;
      }
    });

    sessionStorage.setItem('products', JSON.stringify(this.products));
    // console.log(JSON.parse(sessionStorage.getItem('products')))
    this.toastr.success('Consulte seu pedido no carrinho de compras.', 'Produto editado!');
    this.nav.navigate(['/carShopping']);
  }

}
