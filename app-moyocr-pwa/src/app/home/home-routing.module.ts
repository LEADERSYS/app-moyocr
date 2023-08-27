import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './pages/home-layout/home-layout.component';
import { PagesSincronizacionComponent } from './pages/pages-sincronizacion/pages-sincronizacion.component';
import { PagesSucursalesComponent } from './pages/pages-sucursales/pages-sucursales.component';
import { PagesPuntoVentaComponent } from './pages/pages-punto-venta/pages-punto-venta.component';
import { PagesTicketsComponent } from './pages/pages-tickets/pages-tickets.component';
import { PagesCorteCajaComponent } from './pages/pages-corte-caja/pages-corte-caja.component';

const routes: Routes = [
  	{
      path: '',
      component: HomeLayoutComponent,
      children: [
        { path: '', redirectTo: 'sync', pathMatch: 'full' },
        { path: 'sync', component: PagesSincronizacionComponent },
        { path: 'suc', component: PagesSucursalesComponent },
        { path: 'pos', component: PagesPuntoVentaComponent },
        { path: 'tickets', component: PagesTicketsComponent },
        { path: 'cash-flow', component: PagesCorteCajaComponent }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
