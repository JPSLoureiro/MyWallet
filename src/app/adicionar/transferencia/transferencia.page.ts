import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.page.html',
  styleUrls: ['./transferencia.page.scss'],
})
export class TransferenciaPage implements OnInit {

  constructor(public modalctrl: ModalController) { }

  ngOnInit() {
  }

  close(){
    this.modalctrl.dismiss()
  }
  
}
