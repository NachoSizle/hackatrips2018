import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProcesoReservaPage } from '../../pages/proceso-reserva/proceso-reserva';
/**
 * Generated class for the CardAgendaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'card-agenda',
  templateUrl: 'card-agenda.html'
})
export class CardAgendaComponent {

  constructor(public navCtrl: NavController) {
    console.log('Hello CardAgendaComponent Component');
  }

  goToReservation() {
    this.navCtrl.push(ProcesoReservaPage);
  }

}
