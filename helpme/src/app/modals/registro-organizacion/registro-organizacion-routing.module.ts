import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroOrganizacionPage } from './registro-organizacion.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroOrganizacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroOrganizacionPageRoutingModule {}
