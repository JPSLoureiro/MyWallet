import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransferirPage } from './transferir.page';

const routes: Routes = [
  {
    path: '',
    component: TransferirPage
  },
  {
    path: 'novo',
    loadChildren: () => import('./novo/novo.module').then( m => m.NovoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransferirPageRoutingModule {}
