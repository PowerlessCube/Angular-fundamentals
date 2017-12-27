import { Component, Input } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
    selector: 'passenger-form',
    styleUrls: ['passenger-form.component.scss'],
    template: `
        <!-- ngForm and adding noValidate so we can use Angulars validation-->
        <form #form="ngForm" novalidate>
            {{ detail | json }}
            <div>
                <!-- Template driven: every input needs a name -->
                Passenger name:
                <input
                    type="text"
                    name="fullname"
                    [ngModel]="detail?.fullname">
            </div>
            <div>
                Passenger ID:
                <input
                    type="number"
                    name="id"
                    [ngModel]="detail?.id">
            </div>

            <div>
                <label>
                    <input
                        type="checkbox"
                        name="checkedIn"
                        [ngModel]="detail?.checkedIn"
                        (ngModelChange)="toggleCheckIn($event)">
                </label>
            </div>

            <div *ngIf="form.value.checkedIn">
                Check in date:
                <input
                    type="number"
                    name="checkInDate"
                    [ngModel]="detail?.checkedInDate">
            </div>

            {{ form.value | json }}
        </form>
    `
})

export class PassengerFormComponent {
    @Input()
    detail: Passenger;
    toggleCheckIn(checkedIn: boolean) {
        if (checkedIn) {
            this.detail.checkedInDate = Date.now(); // Milliseconds value.
        }
    }
}