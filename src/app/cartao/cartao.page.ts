import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-cartao',
  templateUrl: './cartao.page.html',
  styleUrls: ['./cartao.page.scss'],
})
export class CartaoPage implements OnInit {

  constructor(public alerta:AlertController, public modalctrl: ModalController) { }

  ngOnInit() {
  }

  public numero;
  public nome;
  public data;
  public codigo;
  public valor;

  close(){
    this.modalctrl.dismiss();
  }

  submit(){
    console.log(this.numero)
    console.log(this.nome)
    console.log(this.data)
    console.log(this.codigo)
    console.log(this.valor)
  }

  async alertAdiciona() {
    const alertAdiciona = await this.alerta.create({
      header: 'Sucesso!',
      message: 'O valor será adicionado em sua conta em instantes',
      buttons: ['OK']
    });

    await alertAdiciona.present();
  }
}
