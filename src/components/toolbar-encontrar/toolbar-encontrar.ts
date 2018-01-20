import { Component } from '@angular/core';

/**
 * Generated class for the ToolbarEncontrarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'toolbar-encontrar',
  templateUrl: 'toolbar-encontrar.html'
})
export class ToolbarEncontrarComponent {

  text: string;

  constructor() {
    console.log('Hello ToolbarEncontrarComponent Component');
    this.text = 'Hello World';
  }

}
