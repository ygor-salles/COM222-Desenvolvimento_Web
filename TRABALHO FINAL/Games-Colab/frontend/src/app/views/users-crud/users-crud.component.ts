import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-crud',
  templateUrl: './users-crud.component.html',
  styleUrls: ['./users-crud.component.css']
})
export class UsersCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    Object.assign(headerService.headerData, {
      title: 'Cadastro de Usuários',
      icon: 'person',
      routeUrl: '/users'
    })
  }

  ngOnInit(): void {
  }

  navigateToUserCreate(): void {
    this.router.navigate(['users/create'])
  }

}