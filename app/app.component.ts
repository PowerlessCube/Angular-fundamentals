import { Component } from '@angular/core';

interface Passenger {
  id: number,
  fullname: string,
  checkedIn: boolean,
  //Typescript: ? makes it an optional value, if it exists it must be a number.
  checkedInDate?: number
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <h3>Airline Passengers</h3>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index;">
          <span 
            class="status"
            [class.checked-in]="passenger.checkedIn"
          ></span>
          {{ i }}: {{ passenger.fullname }}
          <!-- Pipe: example of using the json pipe -->
          <!-- <p>{{ passenger | json }}</p> -->
          <div class="date">
            Check in date: 
            <!-- Pipe: example of using the date pipe and chaining it with uppercase -->
            {{passenger.checkedIn ? (passenger.checkedInDate | date: "yMMMMd" | uppercase) : 'Not Checked In' }}
          </div>
        </li>
      </ul>
    </div>
  `
})

export class AppComponent {
  passengers: Passenger[] = [{
    id: 1,
    fullname: 'Stephen',
    checkedIn: true,
    checkedInDate:  1490742000000
  }, {
    id: 2,
    fullname: 'Rose',
    checkedIn: false,
    checkedInDate:  null
  }, {
    id: 3,
    fullname: 'James',
    checkedIn: true,
    checkedInDate:  1490742000000
  }, {
    id: 4,
    fullname: 'Louise',
    checkedIn: true,
    checkedInDate:  1490742000000
  }, {
    id: 5,
    fullname: 'Tina',
    checkedIn: false,
    checkedInDate:  null
  }]
}