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

  relationship: any;

  constructor() {
    console.log('Hello ToolbarAgendaComponent Component');
    this.relationship = "public";
  }

  selectedPrivates() {
    this.relationship = "private";
  }

  selectedPublics() {
    this.relationship = "public";
  }

  showThisDay() {
    console.log("Hello");
  }
}
