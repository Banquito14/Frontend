import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  username: string = '';
  password: string = '';
  email: string = '';

  constructor(private http: HttpClient) {}

  registro() {
    this.http.post('/api/registro', { username: this.username, password: this.password, email: this.email })
      .subscribe(
        (response: any) => {
          console.log('Registro exitoso', response);
          // Aquí puedes realizar las acciones necesarias después de un registro exitoso, como redireccionar al usuario a otra página.
        },
        (error) => {
          console.error('Error en el registro', error);
          // Aquí puedes manejar el error y mostrar un mensaje al usuario si el registro falla.
        }
      );
  }
}
