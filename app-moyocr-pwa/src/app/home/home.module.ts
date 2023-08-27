import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { PagesSincronizacionComponent } from './pages/pages-sincronizacion/pages-sincronizacion.component';
import { PagesSucursalesComponent } from './pages/pages-sucursales/pages-sucursales.component';
import { PagesPuntoVentaComponent } from './pages/pages-punto-venta/pages-punto-venta.component';
import { PagesTicketsComponent } from './pages/pages-tickets/pages-tickets.component';
import { PagesCorteCajaComponent } from './pages/pages-corte-caja/pages-corte-caja.component';


@NgModule({
  declarations: [
    PagesSincronizacionComponent,
    PagesSucursalesComponent,
    PagesPuntoVentaComponent,
    PagesTicketsComponent,
    PagesCorteCajaComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
