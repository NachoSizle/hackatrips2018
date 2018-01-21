import { Component, Output } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-encontrar',
  templateUrl: 'encontrar.html',
})
export class EncontrarPage {

  @Output('mapMode') mapMode: boolean;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
              this.mapMode = true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EncontrarPage');
  }

}
