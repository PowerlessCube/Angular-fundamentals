import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  // template ref - create a reference to a particular dom node.
  template: `
    <div class="app">
      <button (click)="handleClick(username.value)">
        Get Value
      </button>
      <input type="text" #username/>
      <button (click)="handleClick(signinDate.value)">
        Get Date
      </button>
      <input type="date" #signinDate />
      <div>{{ name }}</div>
    </div>
  `
})

export class AppComponent {
  name: string = 'Alistair'
  
  handleClick(value: string) {
    console.log(value);
  }

}