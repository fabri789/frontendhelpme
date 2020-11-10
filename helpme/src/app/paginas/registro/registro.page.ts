import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import { RegistroOrganizacionPage } from 'src/app/modals/registro-organizacion/registro-organizacion.page';
import { RegistroUsuarioPage } from 'src/app/modals/registro-usuario/registro-usuario.page';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(public modal:ModalController,registroOrg:RegistroOrganizacionPage, registroUsuario :RegistroUsuarioPage) { }

  ngOnInit() {
  }

  async abrirOrg(){
    const modal = await this.modal.create({
      component : RegistroOrganizacionPage,
      cssClass: 'my-custom-modal-css'
    }).then(modal =>{
      modal.onDidDismiss()
      modal.present()
    })
  }

  async abrirUsuario(){
    const modal = await this.modal.create({
      component : RegistroUsuarioPage,
      cssClass: 'my-custom-modal-css'
    }).then(modal =>{
      modal.onDidDismiss()
      modal.present()
    })
  }

  

}
