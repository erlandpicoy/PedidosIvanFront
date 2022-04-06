import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private http: HttpClient) { 

  }

  listarProductos() : Observable<any>{
    return this.http.get("http://localhost:8080/productos/listarProductos")
  }

  guardarProducto(producto : Producto){
    return this.http.post("http://localhost:8080/productos/nuevoProducto", producto)
  }

  modificarProducto(idProducto: number, producto : Producto){
    return this.http.put(`http://localhost:8080/productos/actualizarProducto/${idProducto}`, producto)
  }
  
  eliminarProducto(idProducto: number){
    return this.http.delete(`http://localhost:8080/productos/eliminar-producto/${idProducto}`)
  }

  obtenerProducto(idProducto:number){
    return this.http.get(`http://localhost:8080/productos/producto/${idProducto}`)
  }
}
