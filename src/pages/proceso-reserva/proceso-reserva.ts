import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProcesoReservaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-proceso-reserva',
  templateUrl: 'proceso-reserva.html',
})
export class ProcesoReservaPage {

  numberPerson:number = 1;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProcesoReservaPage');
  }

  selectedMinus() {
    if (this.numberPerson > 1) {
      this.numberPerson--;
    }
  }

  selectedPluses() {
    if (this.numberPerson < 6) {
      this.numberPerson++;
    }
  }

}
