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
      <!-- Approach 1: property binding-->
      <ul>
        <li *ngFor="let passenger of passengers; let i = index;">
          <span 
            class="status"
            [class.checked-in]="passenger.checkedIn"
          ></span>
          {{ i }}: {{ passenger.fullname }}
        </li>
      </ul>

      <!-- Approach 2: ngClass way to setup multiple classes on an element -->
      <h3>Airline Passengers</h3>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index;">
          <span 
            class="status"
            [ngClass]="{ 
              'checked-in': passenger.checkedIn,
              'checked-out': !passenger.checkedIn
            }"
          ></span>
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