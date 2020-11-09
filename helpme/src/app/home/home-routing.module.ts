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
        loadChildren: () => import('../paginas/informacion/informacion.module').then(m => m.InformacionPageModule)
      },
      {
        path: 'registro',
        loadChildren: () => import('../paginas/registro/registro.module').then(m => m.RegistroPageModule)
      },
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
