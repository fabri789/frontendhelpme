import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { RegistroOrganizacionPage } from 'src/app/modals/registro-organizacion/registro-organizacion.page';
import { RegistroUsuarioPage } from 'src/app/modals/registro-usuario/registro-usuario.page';

import { HttpClientModule } from '@angular/common/http';
import { HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http'

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    RegistroOrganizacionPage,
    RegistroUsuarioPage,
    HttpClient,
    HttpClientModule,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
