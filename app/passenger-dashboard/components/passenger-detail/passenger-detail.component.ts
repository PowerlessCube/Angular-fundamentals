import { Component, Input } from '@angular/core';

import {  Passenger } from '../../models/passenger.interface'

@Component({
    selector: 'passenger-detail',
    styleUrls: ['passenger-detail.component.scss'],
    template: `
        <span class="status" [class.checked-in]="detail.checkedIn"></span>
        {{ detail.fullname }}
        <div class="date">
            Check in date: 
            {{detail.checkedIn ? (detail.checkedInDate | date: "yMMMMd" | uppercase) : 'Not Checked In' }}
        </div>
        <div class="children">
            Children: {{ detail.children?.length || 0 }}
        </div>
    `
})

export class PassengerDetailComponent {
    @Input()
    detail: Passenger;
    constructor() {}
}