import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { HttpClientModule } from '@angular/common/http'
import { ClienteService } from './services/cliente.service';
import { FormularioClientesComponent } from './formulario-clientes/formulario-clientes.component';
import { FormsModule } from '@angular/forms';
import { ClientesComponent } from './clientes/clientes.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { FormularioProductosComponent } from './formulario-productos/formulario-productos.component';
@NgModule({
  declarations: [
    AppComponent,
    ListaClientesComponent,
    FormularioClientesComponent,
    ClientesComponent,
    ProductosComponent,
    ListaProductosComponent,
    FormularioProductosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'clientes',
        component: ClientesComponent
      },
      {
        path: 'productos',
        component: ProductosComponent
      }
    ]),
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
