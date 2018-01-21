import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-encontrar',
  templateUrl: 'encontrar.html',
})
export class EncontrarPage {

  mapMode: boolean;
  mapModePoi: boolean;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public events: Events) {
    events.subscribe('mapMode:changed', (mode) => {
      this.mapMode = mode;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EncontrarPage');
  }

}
