import { Filmes } from './components/Filmes';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  constructor(private http: HttpClient) {}

  apiUrl = 'http://localhost:4200/filmes';

  listarFilmes(): Observable<Filmes[]> {
    return this.http.get<Filmes[]>(`${this.apiUrl}`).pipe(
      catchError(this.handleError)
    );
  }
  
  cadastrarFilme(filme: Filmes): Observable<Filmes> {
    return this.http.post<Filmes>(`${this.apiUrl}`, filme, httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  
  buscarFilme(id: number): Observable<Filmes> {
    return this.http.get<Filmes>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }
  
  alterarFilme(filme: Filmes): Observable<Filmes> {
    return this.http.put<Filmes>(`${this.apiUrl}/${filme.id}`, filme, httpOptions).pipe(
      catchError(this.handleError)
    );
  }
  
  excluirFilme(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      
      console.error('Ocorreu um erro:', error.error.message);
    } else {
      
      console.error(
        `Código de erro do back-end ${error.status}, ` +
        `corpo do erro: ${error.error}`);
    }
    return throwError(
      'Algo deu errado; por favor, tente novamente mais tarde.');
  }
}

