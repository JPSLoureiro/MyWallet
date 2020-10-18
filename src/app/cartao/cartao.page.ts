import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-cartao',
  templateUrl: './cartao.page.html',
  styleUrls: ['./cartao.page.scss'],
})
export class CartaoPage implements OnInit {

  constructor( public modalctrl: ModalController) { }

  ngOnInit() {
  }

  close(){
    this.modalctrl.dismiss();
  }
}
