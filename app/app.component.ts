import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  // template ref - create a reference to a particular dom node.
  template: `
    <div class="app">
      <input 
        type="text"
        [value]="name"
        (input)="handleChange($event.target.value)"
      />

      <!-- https://www.webcomponents.org/specs -->
      <!-- The * is syntax sugar for the template tag -->
      <template [ngIf]="name.length > 2">
        <div>
          Searching for... {{ name }}
        </div>
      </template>
      
      <!-- structural directive - we can add directives to components or templates -->
      <div *ngIf="name.length > 2">
        Searching for... {{ name }}
      </div>

    </div>
  `
})

export class AppComponent {
  name: string = ''
  
  handleChange(value: string) {
    this.name = value;
  }

}