import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'api/v1/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ExemploRestService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getPost(id): Observable<any> {
    return this.http.get(endpoint + 'posts/' + id).pipe(
      map(this.extractData));
  }

  getPosts(): Observable<any> {
    return this.http.get(endpoint + 'posts').pipe(
      map(this.extractData));
  }

  curtidaPost(id): Observable<any> {
    return this.http.put<any>(endpoint + '/posts/adicionaCurtida/' + id, JSON.stringify({}), httpOptions).pipe(
      tap((feedback) => console.log(`updated feedback w/ id=${feedback.id}`)),
      catchError(this.handleError<any>('addFeedback'))
    );
  }

  curtidaFeed(id): Observable<any> {
    return this.http.put<any>(endpoint + '/feedbacks/adicionaCurtida/' + id, JSON.stringify({}), httpOptions).pipe(
      tap((feedback) => console.log(`updated feedback w/ id=${feedback.id}`)),
      catchError(this.handleError<any>('addFeedback'))
    );
  }

  addFeedback(feedback): Observable<any> {
    return this.http.post<any>(endpoint + 'feedbacks', JSON.stringify(feedback), httpOptions).pipe(
      tap((feedback) => console.log(`added feedback w/ id=${feedback.id}`)),
      catchError(this.handleError<any>('addFeedback'))
    );
  }

  getFeedback(id): Observable<any> {
    return this.http.get(endpoint + 'feedbacks/' + id).pipe(
      map(this.extractData));
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
