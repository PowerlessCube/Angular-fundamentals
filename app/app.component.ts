import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <!-- router-outlet is a directive via the router, a place holder for where our components will be injected. -->
      <router-outlet></router-outlet>
    </div>
  `
})

export class AppComponent {
  
}