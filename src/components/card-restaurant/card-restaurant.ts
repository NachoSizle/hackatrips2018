import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProcesoReservaPage } from '../../pages/proceso-reserva/proceso-reserva';
import { ModalController } from 'ionic-angular';

@Component({
  selector: 'card-restaurant',
  templateUrl: 'card-restaurant.html'
})
export class CardRestaurantComponent {

  resMode: boolean = true;

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController) {
    console.log('Hello CardRestaurantComponent Component');
  }

  goToReservation() {
    let modal = this.modalCtrl.create(ProcesoReservaPage);
    modal.onDidDismiss(() => {
      this.resMode = false;
    });
    modal.present();
  }
}