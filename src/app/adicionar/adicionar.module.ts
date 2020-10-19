import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdicionarPageRoutingModule } from './adicionar-routing.module';

import { AdicionarPage } from './adicionar.page';
import { CartaoPage } from '../cartao/cartao.page';
import { TransferState } from '@angular/platform-browser';
import { TransferenciaPage } from './transferencia/transferencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdicionarPageRoutingModule
  ],
  declarations: [AdicionarPage, CartaoPage, TransferenciaPage],
  entryComponents: [CartaoPage, TransferenciaPage]
})
export class AdicionarPageModule {}
