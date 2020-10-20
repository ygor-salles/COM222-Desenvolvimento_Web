import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  baseUrl = 'http://localhost:3000/product'

  constructor(private http: HttpClient) { }

  read(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.baseUrl)
  }

}
