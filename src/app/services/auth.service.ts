import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = '/api/auth'; // Asegúrate de que sea la ruta correcta para la autenticación en tu backend

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post(`${this.apiUrl}/login`, { username, password });
  }

  register(username: string, password: string, email: string) {
    return this.http.post(`${this.apiUrl}/register`, { username, password, email });
  }  
}
