import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/users.model';
import { UserService } from '../../../services/user.service';


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user: User = {
    _id: '',
    email: '',
    name: '',
    password: ''
  }

  hide = true;
  senha1: string
  senha2: string

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  createUser(): void {
    if(this.senha1 == this.senha2){
      this.user.password = this.senha1
      this.userService.create(this.user).subscribe(() => {
        this.userService.showMessage('Usuário cadastrado com sucesso')
        this.router.navigate(['users'])
      })
    }
    else{
      this.userService.showMessage('As senhas dos campos devem ser iguais', true)
    }
  }

  cancel(): void {
    this.router.navigate(['users'])
  }

}
