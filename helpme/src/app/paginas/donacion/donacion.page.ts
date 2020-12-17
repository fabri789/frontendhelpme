import { Component, OnInit } from '@angular/core';
import{DonacionesService} from '../donacion/servicios/donaciones.service'
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-donacion',
  templateUrl: './donacion.page.html',
  styleUrls: ['./donacion.page.scss'],
})
export class DonacionPage implements OnInit {

  donacion : any;
  monto : any;
  id_publicacion

  constructor( public donaciones: DonacionesService, public alerta :AlertController) { }

  ngOnInit() {
  }


  realizarDonacion(){
    this.donacion = {
      'id_publicacion':this.id_publicacion,
      'id_usuario': 1,
      'metodo_pago': "mercado pago",
      'fecha_donacion':"10/12/2020",
      'monto': this.monto
    }
    this.donaciones.donar(this.donacion).subscribe(
      (data) =>{
        console.log(data)
        let result : any
        result = data;
        if(result.status == 'OK'){
          console.log("Donado Exitosamente")
          this.presentarAlerta();
        }else{
          alert("Error en la Donacion")
        }
      },
      error =>{
        console.log(error)
      }
    )
  }

  async presentarAlerta(){
    const alert = await this.alerta.create({
      message: 'Donado Exitosamente',
      buttons : ['OK']
    });
    await alert.present()
  }

}



