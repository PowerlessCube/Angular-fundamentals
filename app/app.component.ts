import { Component } from '@angular/core';

//Decorator - which is a type script feature
@Component({
  //Selector creates the element in the html
  selector: 'app-root',
  //Contains a reference to our Sass file.  
  styleUrls: ['app.component.scss'],
  // Creates a template in a string that is rendered to our index.html.
  template: `
    <div class="app">
      {{ title }}
    </div>
  `
})

export class AppComponent {
  title: string;
  constructor() {
    this.title = 'Ultimate Angular'
  }
}