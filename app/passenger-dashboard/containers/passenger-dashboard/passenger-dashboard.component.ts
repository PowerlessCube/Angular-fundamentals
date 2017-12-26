import { Component, OnInit } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['passenger-dashboard.component.scss'],
    template: `
        <div>
            <passenger-count
                [items]="passengers">
            </passenger-count>
            <passenger-detail
                *ngFor="let passenger of passengers"
                [detail]="passenger"
                (edit)="handleEdit($event)"
                (remove)="handleRemove($event)">
            </passenger-detail>
        </div>
    `
})

export class PassengerDashboardComponent implements OnInit {
    passengers: Passenger[];
    constructor() {}
    ngOnInit() {
        console.log('ngOnInit');
        this.passengers = [{
            id: 1,
            fullname: 'Stephen',
            checkedIn: true,
            checkedInDate:  1490742000000,
            children: null
          }, {
            id: 2,
            fullname: 'Rose',
            checkedIn: false,
            checkedInDate:  null,
            children: [{ name: 'Ted', age: 12 }, { name: 'Chloe', age: 7 }]
          }, {
            id: 3,
            fullname: 'James',
            checkedIn: true,
            checkedInDate:  1490742000000,
            children: null
          }, {
            id: 4,
            fullname: 'Louise',
            checkedIn: true,
            checkedInDate:  1490742000000,
            children: [{ name: 'Jessica', age: 1 }]
          }, {
            id: 5,
            fullname: 'Tina',
            checkedIn: false,
            checkedInDate:  null,
            children: null
          }]
    }

    handleEdit(event) {
        this.passengers = this.passengers.map((passenger: Passenger) => {
            // Checks if the passenger has been edited
            if (passenger.id === event.id) {
                // Immutable object: returns a new passenger with edits.
                passenger = Object.assign({}, passenger, event)
            }
            return passenger;
        })
        console.log(this.passengers);
    }

    handleRemove(event: Passenger) {
        console.log(event); // Log event to dashboard.
        this.passengers = this.passengers.filter((passenger: Passenger) => passenger.id !== event.id)}
}