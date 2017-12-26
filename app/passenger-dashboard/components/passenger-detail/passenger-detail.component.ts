//Input: allows the passing of data into a component, Output and EventEmitter: allows the passing of data out of a component.
import { Component, Input, Output, EventEmitter } from '@angular/core';

import {  Passenger } from '../../models/passenger.interface'

@Component({
    selector: 'passenger-detail',
    styleUrls: ['passenger-detail.component.scss'],
    template: `
        <div>
            <span class="status" [class.checked-in]="detail.checkedIn"></span>
            <div *ngIf="editing">
                <!-- one way databinding with event listener on input-->
                <input 
                    type="text" 
                    [value]="detail.fullname"
                    (input)="onNameChange(name.value)"
                    #name>
            </div>    
            <div *ngIf="!editing">
                {{ detail.fullname }}
            </div>
            <div class="date">
                Check in date: 
                {{detail.checkedIn ? (detail.checkedInDate | date: "yMMMMd" | uppercase) : 'Not Checked In' }}
            </div>
            <div class="children">
                Children: {{ detail.children?.length || 0 }}
            </div>
            <button (click)="toggleEdit()">
                {{ editing ? 'Done' : 'Edit' }}
            </button>
            <button (click)="onRemove()">
                Remove
            </button>
        </div>
    `
})

export class PassengerDetailComponent {
    @Input()
    detail: Passenger;
    
    // Create a custom property, called edit and remove
    @Output()
    // Created new instance of eventEmitter.
    edit: EventEmitter<any> = new EventEmitter();
    
    @Output()
    remove: EventEmitter<any> = new EventEmitter();
        
    editing: boolean = false;
    
    constructor() {}

    onNameChange(value: string) {
        this.detail.fullname = value;
    }

    toggleEdit() {
        if (this.editing) {
            // Fire event to the parent to say we're done editing.
            this.edit.emit(this.detail);
        }
        this.editing = !this.editing;
    }

    onRemove() {
        // Fire event to the parent to say 'remove this'.
        this.remove.emit(this.detail);
    }
}