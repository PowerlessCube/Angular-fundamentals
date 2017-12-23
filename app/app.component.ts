import { Component } from '@angular/core';

//Typescript - setting up an interface for Passenger object.
interface Passenger {
  id: number,
  fullname: string,
  checkedIn: boolean
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <h3>Airline Passengers</h3>
      <ul>
      <!-- Under the hood of *ngFor - template with ngForOf -->
        <template ngFor let-passenger let-i="index" [ngForOf]="passengers">
          <li>
            {{ i }}: {{ passenger.fullname }}
          </li>
        </template>
      </ul>
      <h3>Airline Passengers</h3>
      <ul>
        <!-- How to For loop an array of objects (with index) -->
        <li *ngFor="let passenger of passengers; let i = index;">
          {{ i }}: {{ passenger.fullname }}
        </li>
      </ul>
    </div>
  `
})

export class AppComponent {
  //Typescript Passengers array.
  passengers: Passenger[] = [{
    id: 1,
    fullname: 'Stephen',
    checkedIn: true
  }, {
    id: 2,
    fullname: 'Rose',
    checkedIn: false    
  }, {
    id: 3,
    fullname: 'James',
    checkedIn: true
  }, {
    id: 4,
    fullname: 'Louise',
    checkedIn: true
  }, {
    id: 5,
    fullname: 'Tina',
    checkedIn: false
  }]
}