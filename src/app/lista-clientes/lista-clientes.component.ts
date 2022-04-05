import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../interface/Cliente';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {


  public listaDeClientes: Cliente[];


  constructor(public clienteService: ClienteService) { 
    this.listaDeClientes = [];
  }

  ngOnInit(): void {
    this.clienteService.listarClientes().subscribe(
      (response) => {
        this.listaDeClientes = response;
        console.log(this.listaDeClientes);
      }
    );
  }




}
