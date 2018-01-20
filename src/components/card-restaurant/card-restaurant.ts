import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProcesoReservaPage } from '../../pages/proceso-reserva/proceso-reserva';

@Component({
  selector: 'card-restaurant',
  templateUrl: 'card-restaurant.html'
})
export class CardRestaurantComponent {

  constructor(public navCtrl: NavController) {
    console.log('Hello CardRestaurantComponent Component');
  }

  goToReservation() {
    this.navCtrl.push(ProcesoReservaPage);
  }
}