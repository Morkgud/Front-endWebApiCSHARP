import { Usuario } from './components/Usuario';
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
  export class UsuariosService {

    constructor(private http: HttpClient) {}
  
    apiUrl = 'http://localhost:5000/Usuario';
  
    listarUsuarios(): Observable<Usuario[]> {
      return this.http.get<Usuario[]>(`${this.apiUrl}/Usuarios`);
    }
    
    cadastrarUsuario(usuario: Usuario): Observable<Usuario> {
      return this.http.post<Usuario>(this.apiUrl, usuario, httpOptions);
    }
    
    buscarUsuario(id: number): Observable<Usuario> {
      return this.http.get<Usuario>(`${this.apiUrl}/${id}`);
    }
    
    alterarUsuario(usuario: Usuario): Observable<Usuario> {
      return this.http.put<Usuario>(`${this.apiUrl}/${usuario.id}`, usuario, httpOptions);
    }
    
    excluirUsuario(id: number): Observable<void> {
      return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
    }
