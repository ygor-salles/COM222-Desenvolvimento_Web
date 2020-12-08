import { DialogComponent } from './dialog/dialog.component';
import { Game } from './../models/game.model';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType  } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  baseUrl = 'http://localhost:3001/games'

  constructor(private snackBar: MatSnackBar, private http: HttpClient, private dialog: MatDialog) {}

  upload(formData) {
    return this.http.post<any>(`${this.baseUrl}/upload/`, formData, {  
        reportProgress: true,  
        observe: 'events'  
      });  
  }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  openDialog(summaryCapture: string) {
    this.dialog.open(DialogComponent, {data: {summary: summaryCapture}})
  }

  create(game: Game): Observable<Game> {
    return this.http.post<Game>(this.baseUrl, game).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  read(): Observable<Game[]> {
    return this.http.get<Game[]>(`${this.baseUrl}`).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  gameByConsole(plataforma): Observable<Game[]> {
    return this.http.get<Game[]>(`${this.baseUrl}/most_rated/${plataforma}`).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  //teste
  readById(_id: string): Observable<Game> {
    const url = `${this.baseUrl}/${_id}`;
    return this.http.get<Game>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  update(game: Game): Observable<Game> {
    const url = `${this.baseUrl}/${game._id}`;
    return this.http.put<Game>(url, game).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  delete(_id: string): Observable<Game> {
    const url = `${this.baseUrl}/${_id}`;
    return this.http.delete<Game>(url).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    let message = 'Ocorreu um erro!'
    if (e.error.message) message = e.error.message
    this.showMessage(message, true)
    return EMPTY
  }
}
