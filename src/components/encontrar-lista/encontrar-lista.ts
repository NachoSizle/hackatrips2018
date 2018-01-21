import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { RestaurantInfoPage } from '../../pages/restaurant-info/restaurant-info';

@Component({
  selector: 'encontrar-lista',
  templateUrl: 'encontrar-lista.html'
})
export class EncontrarListaComponent {
  mapPoi: boolean;

  constructor(public navCtrl: NavController,
              public events: Events) {
    console.log('Hello EncontrarListaComponent Component');
    events.subscribe('mapPoi:changed', (mode) => {
      this.mapPoi = mode;
    });
  }

  showMarket(){
    this.navCtrl.push(RestaurantInfoPage);
  }
}
