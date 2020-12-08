import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consoles',
  templateUrl: './consoles.component.html',
  styleUrls: ['./consoles.component.css']
})
export class ConsolesComponent implements OnInit {

  constructor(private headerService: HeaderService) {
    Object.assign(headerService.headerData, {
      title: 'Escolha do console',
      icon: 'videogame_asset',
      routeUrl: '/consoles'
    })
  }

  ngOnInit(): void {
  }

}
