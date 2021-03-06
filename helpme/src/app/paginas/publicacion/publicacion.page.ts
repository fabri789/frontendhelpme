import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {PublicacionService} from '../publicacion/servicios/publicacion.service'
import {ModalController, NavParams} from '@ionic/angular';
import {DonacionPage} from 'src/app/paginas/donacion/donacion.page'
import { ViewChild } from '@angular/core';
import { IonSlides} from '@ionic/angular';
import { DonacionPageModule } from '../donacion/donacion.module';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.page.html',
  styleUrls: ['./publicacion.page.scss'],
})
export class PublicacionPage implements OnInit {

  slideOpts = {
    spaceBetween: 1,
    centeredSlide: false,
    slidesPerView: 1.5
  }

  id_publicacion : any;
  mipublicacion : any ;
  misdonaciones : any;
  totalMonto : any;

  constructor(public route: ActivatedRoute, public publicacion: PublicacionService, public modalDonacion: ModalController, pageDonacion:DonacionPageModule) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.id_publicacion = params.id;
      this.traerPublicacionId();
      this.traerTotalDonacion();
    })
    console.log("fafa", this.id_publicacion);
  }

  traerPublicacionId(){
    this.publicacion.publicacionesporId(this.id_publicacion).subscribe(
      (data) => {
        if(data.hasOwnProperty("result")){
          this.mipublicacion = data;
          this.mipublicacion = this.mipublicacion.result;
          this.mipublicacion =this.mipublicacion[0];
          console.log(this.mipublicacion);
        }
      },
      (error) => {
        console.log(error);
      }
    ) 
  }
  traerTotalDonacion(){
    this.publicacion.donacionesPorId(this.id_publicacion).subscribe(
      (data) =>{
        if(data.hasOwnProperty("result")){
          this.misdonaciones = data;
          this.misdonaciones = this.misdonaciones.result;
          console.log(this.misdonaciones);
          this.totalDonaciones();

        }
      },
      (error) =>{
        console.log(error);
      }
    )
  }

 async abrirModal(){
    const modal = await this.modalDonacion.create({
      component : DonacionPage,
      componentProps: {
        id_publicacion : this.id_publicacion
      }
    }).then(modal =>{
      modal.onDidDismiss()
      modal.present()
    })
  }

 totalDonaciones(){
   this.totalMonto =0;
   for(let i = 0; i< this.misdonaciones.length;i++ ){
     this.totalMonto = this.totalMonto + parseInt(this.misdonaciones[i].monto)
   }

 }
 
}
