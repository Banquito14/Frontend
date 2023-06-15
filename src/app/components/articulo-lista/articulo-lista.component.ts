import { Component, OnInit } from '@angular/core';
import { ArticuloService } from '../../services/articulo.service';

@Component({
  selector: 'app-articulo-lista',
  templateUrl: './articulo-lista.component.html',
  styleUrls: ['./articulo-lista.component.css']
})
export class ArticuloListaComponent implements OnInit {
  articulos: any[] = [];

  constructor(private articuloService: ArticuloService) { }

  ngOnInit(): void {
    this.obtenerArticulos();
  }

  obtenerArticulos(): void {
    this.articuloService.getArticulos().subscribe(
      (data) => {
        this.articulos = data;
      },
      (error) => {
        console.log('Error al obtener los artículos:', error);
      }
    );
  }
}
