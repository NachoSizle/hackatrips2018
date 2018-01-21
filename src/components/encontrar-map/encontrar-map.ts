import { Component , ViewChild ,ElementRef, Input } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { RestaurantInfoPage } from '../../pages/restaurant-info/restaurant-info';
import { GoogleMapsAPIWrapper } from '@agm/core';

@Component({
  selector: 'encontrar-map',
  templateUrl: 'encontrar-map.html'
})
export class EncontrarMapComponent {
  lat: number = 40.463357;
  long: number = -3.691769;
  zoom: number = 17;
  markers = [];
  markersInitial = {
    lat: this.lat,
    long: this.long,
    iconType: './assets/imgs/iconMap1_40px.png'
  }
  markersInitialTwo = {
    lat: 40.463067,
    long: -3.691070,
    iconType: './assets/imgs/iconMap2_40px.png'
  }
  markersInitialThree = {
    lat: 40.464191, 
    long: -3.689960,
    iconType: './assets/imgs/iconMap4_40px.png'
  }

  @Input('poiMode') mapPoiMode: boolean;

  constructor(public navCtrl: NavController,
              public events: Events,
              public gMaps: GoogleMapsAPIWrapper) {

    this.markers.push(this.markersInitialThree);
    this.markers.push(this.markersInitialTwo);
    this.markers.push(this.markersInitial);
    this.gMaps.setCenter({ lat: 40.463928, lng: -3.690918 });

    events.subscribe('mapPoi:changed', (mode) => {
      console.log(mode);
      if (mode) {
        this.markers = [];
        this.addMarkers();
      } else {
        this.markers = [];
        this.markers.push(this.markersInitial);
        this.markers.push(this.markersInitialTwo);
        this.markers.push(this.markersInitialThree);

      }
    });
  }

  addMarkers() {
    var mark = {
      lat: 40.465870,
      long: -3.689375,
      iconType: './assets/imgs/iconMap3_40px.png'
    };

    var markTwo = {
      lat:40.464985,
      long:-3.690184,
      iconType: './assets/imgs/iconMap3_40px.png'
    };

    var markThree = {
      lat: 40.464556,
      long: -3.687387,
      iconType: './assets/imgs/iconMap3_40px.png'
    };
    this.gMaps.panTo({ lat: 40.465870, lng: -3.689375 });
    this.markers.push(mark);
    this.markers.push(markTwo);
    this.markers.push(markThree);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EncontrarMapComponent');
  }

  showMarket(){
    this.navCtrl.push(RestaurantInfoPage);
  }
}
