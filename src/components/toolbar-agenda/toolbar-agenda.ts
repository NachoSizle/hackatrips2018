import { Component } from '@angular/core';

/**
 * Generated class for the ToolbarAgendaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'toolbar-agenda',
  templateUrl: 'toolbar-agenda.html'
})
export class ToolbarAgendaComponent {

  text: string;

  constructor() {
    console.log('Hello ToolbarAgendaComponent Component');
    this.text = 'Hello World';
  }

  showThisDay() {
    console.log("Hello");
  }
}
