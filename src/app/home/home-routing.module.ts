import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'pagar',
        loadChildren: () => import('./pagar/pagar.module').then( m => m.PagarPageModule)
      },
      {
        path: 'transferir',
        loadChildren: () => import('./transferir/transferir.module').then( m => m.TransferirPageModule)
      },
      {
        path: 'inicio',
        loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
      },
    ]
  },
  
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
