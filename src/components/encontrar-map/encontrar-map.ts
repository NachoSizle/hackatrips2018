import { Component, ViewChild, ElementRef } from '@angular/core';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker
} from '@ionic-native/google-maps';

declare var google;

@Component({
  selector: 'encontrar-map',
  templateUrl: 'encontrar-map.html'
})
export class EncontrarMapComponent {

  @ViewChild('myMap') mapElement: ElementRef;
  myMap: GoogleMap;

  constructor(private googleMaps: GoogleMaps) {}

  ionViewDidLoad(){
    this.loadMap();
  }

  loadMap(){
    var lat: 43.0741904;
    var long: -89.3809802;

    let latLng = new google.maps.LatLng(lat, long);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.myMap = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    // Wait the MAP_READY before using any methods.
    this.myMap.one(GoogleMapsEvent.MAP_READY).then(() => {
      console.log("Ready");
      //this.getPosition();
    }).catch(error =>{
      console.log(error);
    });

  }

  getPosition(): void{
    this.myMap.getMyLocation()
    .then(response => {
      this.myMap.moveCamera({
        target: response.latLng
      });
      this.myMap.addMarker({
        title: 'My Position',
        icon: 'blue',
        animation: 'DROP',
        position: response.latLng
      });
    })
    .catch(error =>{
      console.log(error);
    });
  }
}