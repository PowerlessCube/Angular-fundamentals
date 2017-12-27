import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

// Containers
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';
import { PassengerViewerComponent } from './containers/passenger-viewer/passenger-viewer.component';

// Components
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component'
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component'

// Service
import { PassengerDashboardService } from './passenger-dashboard.service';

@NgModule({
    declarations: [
        // Contaier Components
        PassengerDashboardComponent,
        PassengerCountComponent,
        // Generic Components
        PassengerViewerComponent,
        PassengerDetailComponent
    ],
    imports: [
        CommonModule,
        HttpModule
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