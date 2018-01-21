import { Component } from '@angular/core';

/**
 * Generated class for the CardRestaurantReservaComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'card-restaurant-reserva',
  templateUrl: 'card-restaurant-reserva.html'
})
export class CardRestaurantReservaComponent {

  text: string;

  constructor() {
    console.log('Hello CardRestaurantReservaComponent Component');
    this.text = 'Hello World';
  }

}
