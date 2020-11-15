import { Component, OnInit } from '@angular/core';
import {TraerpublicacionesService} from '../lista-publicacion/servicios/traerpublicaciones.service'

@Component({
  selector: 'app-lista-publicacion',
  templateUrl: './lista-publicacion.page.html',
  styleUrls: ['./lista-publicacion.page.scss'],
})
export class ListaPublicacionPage implements OnInit {
  rootPage:any = 'ListaPublicacionPage';

  listaPublicaciones : any;

  constructor( public publicaciones : TraerpublicacionesService) { }

  ngOnInit() {
    this.traerPublicaciones();
  }


  traerPublicaciones(){
    this.publicaciones.traerPublicaciones().subscribe(
      (data) => {
        if(data.hasOwnProperty("result")){
          this.listaPublicaciones = data;
          this.listaPublicaciones = this.listaPublicaciones.result;
          console.log(this.listaPublicaciones);
        }
      },
      (error) => {
        console.log(error);
      }
    ) 
  }

}
