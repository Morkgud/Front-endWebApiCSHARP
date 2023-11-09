import { Series } from './components/Series';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
  'Content-Type' : 'application/json'
  })
  }
  @Injectable({
  providedIn: 'root'
  })
  export class SeriesService {

    constructor(private http: HttpClient) {}
  
    apiUrl = 'http://localhost:5000/Series';
  
    listarSeries(): Observable<Series[]> {
      return this.http.get<Series[]>(`${this.apiUrl}/Series`);
    }
    
    cadastrarSerie(serie: Series): Observable<Series> {
      return this.http.post<Series>(this.apiUrl, serie, httpOptions);
    }
    
    buscarSerie(id: number): Observable<Series> {
      return this.http.get<Series>(`${this.apiUrl}/${id}`);
    }
    
    alterarSerie(serie: Series): Observable<Series> {
      return this.http.put<Series>(`${this.apiUrl}/${serie.id}`, serie, httpOptions);
    }
    
    excluirSerie(id: number): Observable<void> {
      return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
    }
    
