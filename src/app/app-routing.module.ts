import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegistroComponent } from './components/registro/registro.component';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { ArticuloListaComponent } from './components/articulo-lista/articulo-lista.component';

const routes: Routes = [
  { path: 'api/login', component: InicioSesionComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'articulos', component: ArticuloListaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

