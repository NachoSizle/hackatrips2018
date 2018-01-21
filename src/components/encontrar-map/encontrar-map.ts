import { Component , ViewChild ,ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestaurantInfoPage } from '../../pages/restaurant-info/restaurant-info';

@Component({
  selector: 'encontrar-map',
  templateUrl: 'encontrar-map.html'
})
export class EncontrarMapComponent {
  lat: number = 40.4655151;
  long: number = -3.6187617;
  zoom: number = 15;

  constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EncontrarMapComponent');
  }

  showMarket(){
    this.navCtrl.push(RestaurantInfoPage);
  }
}
