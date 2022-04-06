import { Component, OnInit } from '@angular/core';
import {Cliente} from '../interfaces/cliente';
import { ClienteService } from '../services/cliente.service';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  public enviado: boolean = false;

  model = {nombre: "", apellido: "", dni: 0, idCliente: 0};

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {

  }

  onSubmit() {

    console.log("PASO POR ACA")

    console.log(this.model);

    this.clienteService.guardarCliente(this.model).subscribe(data => {});

    this.enviado = true;
    
  }

}
