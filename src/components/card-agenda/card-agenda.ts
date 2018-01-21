import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProcesoReservaPage } from '../../pages/proceso-reserva/proceso-reserva';

@Component({
  selector: 'card-agenda',
  templateUrl: 'card-agenda.html'
})
export class CardAgendaComponent {

  @Input('imagen') img: any;
  @Input('nameRes') nameRestaurant: any;
  @Input('numRes') numRes: number;
  @Input('dirRes') dirRes: any;

  constructor(public navCtrl: NavController) {
    console.log('Hello CardAgendaComponent Component');
  }

  goToReservation() {
    this.navCtrl.push(ProcesoReservaPage);
  }

}
