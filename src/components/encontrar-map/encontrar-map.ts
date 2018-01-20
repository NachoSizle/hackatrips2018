import { Component , ViewChild ,ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'encontrar-map',
  templateUrl: 'encontrar-map.html'
})
export class EncontrarMapComponent {
  lat: number = 40.4655151;
  long: number = -3.6187617;

  constructor(public navCtrl: NavController) {
  } 
  ionViewDidLoad() {
    console.log('ionViewDidLoad EncontrarMapComponent');
  }
}
