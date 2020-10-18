import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { CartaoPage } from '../cartao/cartao.page';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.page.html',
  styleUrls: ['./adicionar.page.scss'],
})
export class AdicionarPage implements OnInit {

  constructor(public alerta:AlertController, public modalctrl:ModalController) { }

  ngOnInit() {
  }

  async cartaoDebito(){
    const modalCartao = await this.modalctrl.create({
      component: CartaoPage
    });

    modalCartao.present()
  }

  async alertPix() {
    const alertPix = await this.alerta.create({
      header: 'Pix',
      message: 'Adicionar saldo através do Pix estará disponível a partir de 16 de Novembro de 2020',
      buttons: ['OK']
    });

    await alertPix.present();
  }

  async alertTransferencia() {
    const alertTransferencia = await this.alerta.create({
      header: 'Transferência Banária',
      message: 'Para adicionar saldo através de transferência envie os valores para a conta:\n Agencia:0000\n Conta:000000-0\n Banco:000\n CPF:000.000.000-00',
      buttons: ['OK']
    });

    await alertTransferencia.present();
  }

  
}
