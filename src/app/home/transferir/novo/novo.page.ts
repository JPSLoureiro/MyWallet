import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-novo',
  templateUrl: './novo.page.html',
  styleUrls: ['./novo.page.scss'],
})
export class NovoPage implements OnInit {

  constructor(public modalctrl:ModalController, public alerta:AlertController) { }

  ngOnInit() {
  }

  public agencia;
  public conta;
  public banco;
  public cpf;
  public nome;
  public valor;

  close(){
    this.modalctrl.dismiss()
  }

  submit(){
    console.log(this.agencia, this.conta, this.banco, this.cpf, this.nome, this.valor)
  }

  async alertTransferencia() {
    const alertTransferencia = await this.alerta.create({
      header: 'Sucesso!',
      message: 'transferência enviada com sucesso.',
      buttons: ['OK']
    });

    await alertTransferencia.present();
  }
}
