import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {
  private apiUrl = 'http://localhost:3000/api/articulos';

  constructor(private http: HttpClient) { }

  getArticulos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getArticulo(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get(url);
  }

  crearArticulo(articulo: any): Observable<any> {
    return this.http.post(this.apiUrl, articulo);
  }

  actualizarArticulo(id: string, articulo: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, articulo);
  }

  eliminarArticulo(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
