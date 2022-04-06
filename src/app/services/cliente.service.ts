import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Cliente } from '../interfaces/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  
  constructor(private http: HttpClient) { 

  }

  listarClientes() : Observable<any>{
    return this.http.get("http://localhost:8080/clientes/listarClientes")
  }

  guardarCliente(cliente : Cliente){
    return this.http.post("http://localhost:8080/clientes/nuevoCliente", cliente)
  }

  modificarCliente(idCliente: number, cliente : Cliente){
    return this.http.put(`http://localhost:8080/clientes/actualizarCliente/${idCliente}`, cliente)
  }
  
  eliminarCliente(idCliente: number){
    return this.http.delete(`http://localhost:8080/clientes/eliminarCliente/${idCliente}`)
  }

  obtenerCliente(idCliente:number){
    return this.http.get(`http://localhost:8080/clientes/cliente/${idCliente}`)
  }

}
