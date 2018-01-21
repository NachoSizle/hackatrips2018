import { Component, Input } from '@angular/core';

@Component({
  selector: 'toolbar-encontrar',
  templateUrl: 'toolbar-encontrar.html'
})
export class ToolbarEncontrarComponent {

  @Input('mapMode') mapMode: boolean;

  constructor() {
    console.log('Hello ToolbarEncontrarComponent Component');
  }

  changeMode() {
    console.log(this.mapMode);
    this.mapMode = !this.mapMode;
  }

  selectedRestaurants() {

  }

  selectedPoints() {

  }

}
