import { NotaFiscal } from '../models/nota-fiscal.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotaFiscalService {
  
  baseUrl = 'http://localhost:3000/invoice' 

  constructor(private http: HttpClient) { }

  create(notaFiscal: NotaFiscal): Observable<NotaFiscal> {
    return this.http.post<NotaFiscal>(this.baseUrl, notaFiscal)
  }

  read(): Observable<NotaFiscal[]> {
    return this.http.get<NotaFiscal[]>(this.baseUrl)
  }
}
