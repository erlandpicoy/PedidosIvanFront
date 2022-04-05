import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Cliente } from '../interface/Cliente';

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

}
