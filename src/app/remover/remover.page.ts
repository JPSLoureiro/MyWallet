import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-remover',
  templateUrl: './remover.page.html',
  styleUrls: ['./remover.page.scss'],
})
export class RemoverPage implements OnInit {

  constructor(public alerta:AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alerta.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK', 'cancelar']
    });

    await alert.present();
  }
}
