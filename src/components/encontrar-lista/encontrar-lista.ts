import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestaurantInfoPage } from '../../pages/restaurant-info/restaurant-info';

@Component({
  selector: 'encontrar-lista',
  templateUrl: 'encontrar-lista.html'
})
export class EncontrarListaComponent {


  constructor(public navCtrl: NavController) {
    console.log('Hello EncontrarListaComponent Component');
  }

  showMarket(){
    this.navCtrl.push(RestaurantInfoPage);
  }
}
