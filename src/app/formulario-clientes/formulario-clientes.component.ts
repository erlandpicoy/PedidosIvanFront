import { Component, OnInit } from '@angular/core';
import {Cliente} from '../interface/Cliente';
import { ClienteService } from '../services/cliente.service';


@Component({
  selector: 'app-formulario-clientes',
  templateUrl: './formulario-clientes.component.html',
  styleUrls: ['./formulario-clientes.component.css']
})
export class FormularioClientesComponent implements OnInit {

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
