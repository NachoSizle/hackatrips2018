import { Component, Input } from '@angular/core';

@Component({
  selector: 'toolbar-encontrar',
  templateUrl: 'toolbar-encontrar.html'
})
export class ToolbarEncontrarComponent {

  @Input('mapMode') mapMode: boolean;
  mapModeActive: any;

  constructor() {
    console.log('Hello ToolbarEncontrarComponent Component');
    this.mapModeActive = "restaurant";
  }

  changeMode() {
    console.log(this.mapMode);
    this.mapMode = !this.mapMode;
  }

  selectedRestaurants() {
    this.mapModeActive = "restaurant";
  }

  selectedPoints() {
    this.mapModeActive = "poi";
  }

}
