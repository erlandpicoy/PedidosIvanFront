import { Component, OnInit } from '@angular/core';
import { Producto } from '../interfaces/producto';
import { ProductoService } from '../services/producto.service';


@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {


  public listaDeProductos: Producto[];

  public productoAModificar = {};

  constructor(public productoService: ProductoService) { 
    this.listaDeProductos = [];
  }

  ngOnInit(): void {
    this.productoService.listarProductos().subscribe(
      (response) => {
        this.listaDeProductos = response;
      }
    );
  }

  modificar(idProducto: any){
    this.productoService.obtenerProducto(idProducto).subscribe(
      (response) => {
        this.productoAModificar = response;
      }
    );
  }

  eliminar(idProducto: any){
    this.productoService.eliminarProducto(idProducto).subscribe(
      (response) => {
        console.log(response);
      }
    )
  }
}
