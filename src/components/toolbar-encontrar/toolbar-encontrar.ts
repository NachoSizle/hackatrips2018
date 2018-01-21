import { Component } from '@angular/core';
import { Events } from 'ionic-angular';

@Component({
  selector: 'toolbar-encontrar',
  templateUrl: 'toolbar-encontrar.html'
})
export class ToolbarEncontrarComponent {

  mapMode: boolean = false;
  mapModeActive: any;
  mapModePoi: boolean = false;

  constructor(public events: Events) {
    console.log('Hello ToolbarEncontrarComponent Component');
    console.log(this.mapMode);
    this.mapModeActive = "restaurant";
  }

  changeMode() {
    this.mapMode = !this.mapMode;
    this.events.publish('mapMode:changed', this.mapMode);
  }

  selectedRestaurants() {
    this.mapModePoi = false;
    this.events.publish('mapPoi:changed', this.mapModePoi);
  }

  selectedPoints() {
    this.mapModePoi = true;
    this.events.publish('mapPoi:changed', this.mapModePoi);
  }
}
