import { NgModule } from '@angular/core';
// typically these are the two that you will need to include in your base ng module.

// since we're rendering our app in the browser we use this BrowserModule
import { BrowserModule } from '@angular/platform-browser';
// Gives us directives that we'll need later.
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';

// Tells angular that appmodule is a NgModule (special module)
@NgModule({
  //register the appComponetn in the module
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  //we tell the module to bootstrap this component
  bootstrap: [AppComponent]
})
export class AppModule {}
