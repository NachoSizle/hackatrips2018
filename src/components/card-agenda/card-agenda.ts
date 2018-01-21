import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestaurantInfoPage } from '../../pages/restaurant-info/restaurant-info';

@Component({
  selector: 'card-agenda',
  templateUrl: 'card-agenda.html'
})
export class CardAgendaComponent {

  @Input('imagen') img: any;
  @Input('nameRes') nameRestaurant: any;
  @Input('numRes') numRes: number;
  @Input('dirRes') dirRes: any;
  @Input('imgProfile') imgProfile: any;

  constructor(public navCtrl: NavController) {
    console.log('Hello CardAgendaComponent Component');
  }

  goToRestaurantInfo() {
    this.navCtrl.push(RestaurantInfoPage);
  }

}
