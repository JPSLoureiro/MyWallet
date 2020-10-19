import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NovoPage } from './novo/novo.page';

@Component({
  selector: 'app-transferir',
  templateUrl: './transferir.page.html',
  styleUrls: ['./transferir.page.scss'],
})
export class TransferirPage implements OnInit {

  constructor(public modalctrl:ModalController) { }

  ngOnInit() {
  }


  async addContato(){
    const modalCartao = await this.modalctrl.create({
      component: NovoPage
    });

    modalCartao.present()
  }
}
