import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'

// Containers
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
import { PassengerViewerComponent } from './containers/passenger-viewer/passenger-viewer.component';

// Components
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
import { PassengerFormComponent } from './components/passenger-form/passenger-form.component';

// Service
import { PassengerDashboardService } from './passenger-dashboard.service';

@NgModule({
    declarations: [
        // Contaier Components
        PassengerDashboardComponent,
        PassengerCountComponent,
        // Generic Components
        PassengerViewerComponent,
        PassengerDetailComponent,
        PassengerFormComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule
    ],
    exports: [
        PassengerViewerComponent
    ],
    providers: [
        // Adds are Service 
        PassengerDashboardService
    ]
})

export class PassengerDashboardModule {}