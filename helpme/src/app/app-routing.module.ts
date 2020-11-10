import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'informacion',
    loadChildren: () => import('./paginas/informacion/informacion.module').then( m => m.InformacionPageModule)
  },
  {
    path: 'sobre-nosotros',
    loadChildren: () => import('./paginas/sobre-nosotros/sobre-nosotros.module').then( m => m.SobreNosotrosPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./paginas/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'publicacion',
    loadChildren: () => import('./paginas/publicacion/publicacion.module').then( m => m.PublicacionPageModule)
  },
  {
    path: 'usuario',
    loadChildren: () => import('./paginas/usuario/usuario.module').then( m => m.UsuarioPageModule)
  },
  {
    path: 'registro-usuario',
    loadChildren: () => import('./modals/registro-usuario/registro-usuario.module').then( m => m.RegistroUsuarioPageModule)
  },
  {
    path: 'registro-organizacion',
    loadChildren: () => import('./modals/registro-organizacion/registro-organizacion.module').then( m => m.RegistroOrganizacionPageModule)
  },
  {
    path: 'lista-publicacion',
    loadChildren: () => import('./paginas/lista-publicacion/lista-publicacion.module').then( m => m.ListaPublicacionPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
