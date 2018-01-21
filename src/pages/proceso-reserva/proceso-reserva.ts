import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ReservationConfirmPage} from '../reservation-confirm/reservation-confirm';
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

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public ldng: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProcesoReservaPage');
  }

  confirmRes() {
    let loading = this.ldng.create({
      content: 'Espere...'
    });

    loading.onDidDismiss(() => {
      this.navCtrl.push(ReservationConfirmPage);
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 5000);
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
