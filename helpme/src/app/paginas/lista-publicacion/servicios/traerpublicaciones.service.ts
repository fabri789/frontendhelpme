import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { HttpClientModule } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TraerpublicacionesService {

  private requestOptions
  headers : any

  private apiDir = "https://backendhelpme.herokuapp.com";


  constructor(public http: HttpClient) {
    this.requestOptions = {
      headers : new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
   }

   traerPublicaciones(){
     return this.http.get(this.apiDir+'/publicaciones');
   }
  
}
