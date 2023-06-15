import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent{
  username: string = '';
  password: string = '';

  login() {
    // Aquí puedes implementar la lógica para verificar el inicio de sesión
    // Por ejemplo, puedes hacer una solicitud HTTP al backend para autenticar al usuario

    // Reinicia los campos de usuario y contraseña después del inicio de sesión
    this.username = '';
    this.password = '';
  }
}
