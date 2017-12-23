import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <button (click)="handleClick()">
        Change Name
      </button>
      <input 
        type="text" 
        [value]="name"
        (input)="handleInput($event)"
        (blur)="handleBlur($event)"
      />
      <div>{{ name }}</div>
    </div>
  `
})

export class AppComponent {
  name: string = 'Alistair'
  
  // Example of one way data flow with an event emmiting from component and updates a value.
  handleInput(event: any) {
    this.name = event.target.value;
  }

  handleClick() {
    this.name = 'Mackay';
  }

  handleBlur(event: any) {
    this.name = event.target.value;
    console.log(event);
  }

}