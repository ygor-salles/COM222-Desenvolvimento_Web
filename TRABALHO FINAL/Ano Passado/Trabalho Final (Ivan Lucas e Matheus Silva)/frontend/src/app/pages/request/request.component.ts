import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Location} from '@angular/common';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  orders: any;
  saldo: any;
  url = 'http://localhost:3000';

  constructor(private httpClient: HttpClient,
              private _location: Location) { }

  ngOnInit() {
    this.updateSaldo({opt: true, id: 1, value: false});
  }

  payed(id, value){
    // console.log(id, value)
    const req = this.httpClient.patch(`${this.url}/orders/${id}`, {option: value}).toPromise();
    this.updateSaldo({opt: false, id: id, value: value});

  }

  updateSaldo(option){
    this.saldo = {
      totalPayed:  0,
      totalLoss:  0
    };

    if(option.opt){
      const req = this.httpClient.get(`${this.url}/orders`).toPromise();
      req.then((o)=>{
        this.orders = o;
  
        this.orders.map((order) => {
          if(order.delivered)
            this.saldo.totalPayed += order.total;
          else
            this.saldo.totalLoss += order.total;
        });
        console.log(this.orders);
      }).catch((erro) => {
        console.log(erro);
      });
    }
    else{
      this.orders.map((order) => {
        if(order._id == option.id)
          order.delivered = option.value;

        if(order.delivered)
          this.saldo.totalPayed += order.total;
        else
          this.saldo.totalLoss += order.total;
      });
    }
  }

  back() {
    this._location.back();
  }

}
