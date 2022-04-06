import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-formulario-productos',
  templateUrl: './formulario-productos.component.html',
  styleUrls: ['./formulario-productos.component.css']
})
export class FormularioProductosComponent implements OnInit {

  public enviado: boolean = false;

  model = {nombre: "", precioBase: 0, impuesto: 0, idProducto: 0, descripcion: ""};

  constructor(private productoService: ProductoService) {}

  ngOnInit(): void {

  }

  onSubmit() {

    console.log("PASO POR ACA")

    console.log(this.model);

    this.productoService.guardarProducto(this.model).subscribe(data => {});

    this.enviado = true;
    
  }
}
