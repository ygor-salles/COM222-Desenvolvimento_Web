import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public items: any;

  constructor() { }

  ngOnInit() {
    this.items = JSON.parse(sessionStorage.getItem('products'));
    if(this.items == null)
      sessionStorage.setItem('products', JSON.stringify([]));
  }
}
