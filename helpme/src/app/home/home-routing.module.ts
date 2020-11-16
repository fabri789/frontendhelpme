import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:
    [
      {
        path: 'sobre-nosotros',
        loadChildren: () => import('../paginas/sobre-nosotros/sobre-nosotros.module').then(m => m.SobreNosotrosPageModule)
      },
      {
        path: 'registro',
        loadChildren: () => import('../paginas/registro/registro.module').then(m => m.RegistroPageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('../paginas/lista-publicacion/lista-publicacion.module').then(m => m.ListaPublicacionPageModule)
      },
      {
        path: 'login',
        loadChildren: () => import('../paginas/login/login.module').then(m => m.LoginPageModule)
      },
      {
        path: 'preguntas-respuestas',
        loadChildren: () => import('../paginas/informacion/informacion.module').then(m => m.InformacionPageModule)
      }

    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
