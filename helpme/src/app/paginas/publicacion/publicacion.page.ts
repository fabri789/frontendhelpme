import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {PublicacionService} from '../publicacion/servicios/publicacion.service'
import { ViewChild } from '@angular/core';
import { IonSlides} from '@ionic/angular';

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

  constructor(public route: ActivatedRoute, public publicacion: PublicacionService) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.id_publicacion = params.id;
      this.traerPublicacionId();
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
 
}
