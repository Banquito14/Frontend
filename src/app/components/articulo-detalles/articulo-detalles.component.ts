import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticuloService } from '../../services/articulo.service';

@Component({
  selector: 'app-articulo-detalles',
  templateUrl: './articulo-detalles.component.html',
  styleUrls: ['./articulo-detalles.component.css']
})
export class ArticuloDetallesComponent implements OnInit {
  articulo: any;

  constructor(
    private route: ActivatedRoute,
    private articuloService: ArticuloService
  ) { }

  ngOnInit(): void {
    this.obtenerDetallesArticulo();
  }

  obtenerDetallesArticulo(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.articuloService.getArticulo(id as string).subscribe(
      (data) => {
        this.articulo = data;
      },
      (error) => {
        console.log('Error al obtener los detalles del artículo:', error);
      }
    );
  }
}
