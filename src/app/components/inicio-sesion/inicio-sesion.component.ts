import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {
  username: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    this.http.post('/api/login', { username: this.username, password: this.password })
      .subscribe(
        (response: any) => {
          console.log('Inicio de sesión exitoso', response);
          this.username = '';
          this.password = '';
          this.router.navigate(['/articulos']);
        },
        (error) => {
          console.error('Error en el inicio de sesión', error);
          this.username = '';
          this.password = '';
        }
      );
  }  
}