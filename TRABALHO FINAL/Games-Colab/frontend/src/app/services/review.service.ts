import { DialogComponent } from './dialog/dialog.component';
import { Review } from '../models/review.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ReviewService {

    baseUrl = 'http://localhost:3001/ratings'

    constructor(private snackBar: MatSnackBar, private http: HttpClient, private dialog: MatDialog) { }

    showMessage(msg: string, isError: boolean = false): void {
        this.snackBar.open(msg, "X", {
            duration: 3000,
            horizontalPosition: "right",
            verticalPosition: "top",
            panelClass: isError ? ["msg-error"] : ["msg-success"],
        });
    }

    openDialog(commentCapture: string) {
        this.dialog.open(DialogComponent, { data: { summary: commentCapture } })
    }

    create(review: Review): Observable<Review> {
        return this.http.post<Review>(this.baseUrl, review).pipe(
            map((obj) => obj),
            catchError((e) => this.errorHandler(e))
        );
    }

    read(game_id: string): Observable<Review[]> {
        return this.http.get<Review[]>(`${this.baseUrl}?game_id=${game_id}`).pipe(
            map((obj) => obj),
            catchError((e) => this.errorHandler(e))
        );
    }

    readById(_id: string): Observable<Review> {
        const url = `${this.baseUrl}/${_id}`;
        return this.http.get<Review>(url).pipe(
            map((obj) => obj),
            catchError((e) => this.errorHandler(e))
        );
    }

    update(review: Review): Observable<Review> {
        const url = `${this.baseUrl}/${review._id}`;
        return this.http.put<Review>(url, review).pipe(
            map((obj) => obj),
            catchError((e) => this.errorHandler(e))
        );
    }

    delete(_id: string): Observable<Review> {
        const url = `${this.baseUrl}/${_id}`;
        return this.http.delete<Review>(url).pipe(
            map((obj) => obj),
            catchError((e) => this.errorHandler(e))
        );
    }

    review(review: Review): Observable<Review> {
        const url = `${this.baseUrl}?game_id=${review.game_id}`;
        return this.http.put<Review>(url, review).pipe(
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

