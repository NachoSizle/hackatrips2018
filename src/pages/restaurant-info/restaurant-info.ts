import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-restaurant-info',
  templateUrl: 'restaurant-info.html',
})
export class RestaurantInfoPage {

  restaurantName: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
    this.restaurantName = 'Tagliatella';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RestaurantInfoPage');
  }

}
