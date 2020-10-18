import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home/inicio',
    pathMatch: 'full'
  },
  {
    path: 'adicionar',
    loadChildren: () => import('./adicionar/adicionar.module').then( m => m.AdicionarPageModule)
  },
  {
    path: 'remover',
    loadChildren: () => import('./remover/remover.module').then( m => m.RemoverPageModule)
  },
  {
    path: 'cartao',
    loadChildren: () => import('./cartao/cartao.module').then( m => m.CartaoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
