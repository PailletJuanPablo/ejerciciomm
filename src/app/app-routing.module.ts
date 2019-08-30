import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactoComponent } from './contacto/contacto.component';

// {path: 'ruta', component: ClaseComponent }
const routes: Routes = [
  {
    path: 'inicio', component: InicioComponent
  },
  {
    path: 'nosotros', component: NosotrosComponent
  },
  {
    path: 'servicios', component: ServiciosComponent
  },
  {
    path: 'contacto', component: ContactoComponent
  },
  {
    path: '', component: InicioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
