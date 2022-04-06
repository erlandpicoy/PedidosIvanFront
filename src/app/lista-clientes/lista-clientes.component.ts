import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../interfaces/cliente';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {


  public listaDeClientes: Cliente[];

  public clienteAModificar = {};

  constructor(public clienteService: ClienteService) { 
    this.listaDeClientes = [];
  }

  ngOnInit(): void {
    this.clienteService.listarClientes().subscribe(
      (response) => {
        this.listaDeClientes = response;
      }
    );
  }

  modificar(idCliente: any){
    this.clienteService.obtenerCliente(idCliente).subscribe(
      (response) => {
        this.clienteAModificar = response;
      }
    );
  }

  eliminar(idCliente: any){
    this.clienteService.eliminarCliente(idCliente).subscribe(
      (response) => {
        console.log(response);
      }
    )
  }

}
