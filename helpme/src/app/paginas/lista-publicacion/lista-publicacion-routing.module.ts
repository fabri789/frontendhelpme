import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaPublicacionPage } from './lista-publicacion.page';

const routes: Routes = [
  {
    path: '',
    component: ListaPublicacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaPublicacionPageRoutingModule {}
