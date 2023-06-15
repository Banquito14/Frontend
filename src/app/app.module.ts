import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ArticuloListaComponent } from './components/articulo-lista/articulo-lista.component';
import { ArticuloDetallesComponent } from './components/articulo-detalles/articulo-detalles.component';
import { ArticuloService } from './services/articulo.service';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticuloListaComponent,
    ArticuloDetallesComponent,
    InicioSesionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ArticuloService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
