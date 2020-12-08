import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuarioAutenticado: string = null

  constructor() { }

  auth(nameUser: string) {
    this.usuarioAutenticado = nameUser
  }

}
