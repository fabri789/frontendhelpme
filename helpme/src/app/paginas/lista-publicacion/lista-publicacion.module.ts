import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaPublicacionPageRoutingModule } from './lista-publicacion-routing.module';

import { ListaPublicacionPage } from './lista-publicacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaPublicacionPageRoutingModule
  ],
  declarations: [ListaPublicacionPage]
})
export class ListaPublicacionPageModule {}
