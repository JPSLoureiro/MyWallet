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

  public valor;

  async retirarAlert() {
    const alert = await this.alerta.create({
      header: 'Sucesso!',
      message: 'Os valores serão enviados para a sua conta.',
      buttons: ['OK']
    });

    await alert.present();
  }

  submit(){
    console.log(this.valor)
  }
}
