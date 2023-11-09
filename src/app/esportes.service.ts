import { Esportes } from './components/Esportes';
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
  export class EsportesService {

    constructor(private http: HttpClient) {}
  
    apiUrl = 'http://localhost:5000/Esportes';
  
    listarEsportes(): Observable<Esportes[]> {
      return this.http.get<Esportes[]>(this.apiUrl);
    }
  
    buscarEsporte(id: number): Observable<Esportes> {
      return this.http.get<Esportes>(`${this.apiUrl}/${id}`);
    }
  
    cadastrarEsporte(esporte: Esportes): Observable<Esportes> {
      return this.http.post<Esportes>(this.apiUrl, esporte, httpOptions);
    }
  
    alterarEsporte(esporte: Esportes): Observable<Esportes> {
      return this.http.put<Esportes>(`${this.apiUrl}/${esporte.id}`, esporte, httpOptions);
    }
  
    excluirEsporte(id: number): Observable<void> {
      return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
  }


