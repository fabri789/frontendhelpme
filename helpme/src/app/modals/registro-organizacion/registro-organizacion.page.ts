import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-registro-organizacion',
  templateUrl: './registro-organizacion.page.html',
  styleUrls: ['./registro-organizacion.page.scss'],
})
export class RegistroOrganizacionPage implements OnInit {

  constructor(public modal :ModalController) { }

  ngOnInit() {
  }

  dismiss(){
    this.modal.dismiss();

  }

}
