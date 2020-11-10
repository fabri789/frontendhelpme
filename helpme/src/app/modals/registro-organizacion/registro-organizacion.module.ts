import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroOrganizacionPageRoutingModule } from './registro-organizacion-routing.module';

import { RegistroOrganizacionPage } from './registro-organizacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroOrganizacionPageRoutingModule
  ],
  declarations: [RegistroOrganizacionPage]
})
export class RegistroOrganizacionPageModule {}
