//Tell angular how we are going to bootstrap it, specific ways to tell it how via on server, client etc.
//contains the client side code that processes our templates, bindings and depencies injections
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// get our created Module
import { AppModule } from './app/app.module';

// Tell our MOdule what to bootstrap.
platformBrowserDynamic().bootstrapModule(AppModule);