import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  // ngModel is taking a property binding
  // ngModelChange is taking an event binding
  template: `
    <div class="app">
      <button (click)="handleClick()">
        Change Name
      </button>
      <input 
        type="text"
        [ngModel]="name"
        (ngModelChange)="handleChange($event)"
      />
      <input 
        type="text"
        [(ngModel)]="name"
      />
      <div>{{ name }}</div>
    </div>
  `
})

export class AppComponent {
  name: string = 'Alistair'
  
  handleClick() {
    this.name = 'Mackay';
  }

  handleChange(value: string) {
    this.name = value;
  }


}