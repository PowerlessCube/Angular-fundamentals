import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';

@NgModule({
    // Hold all the components relevant to this module
    declarations: [
        PassengerDashboardComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        // Export it so we can use it in our other modules
        PassengerDashboardComponent
    ]
})

export class PassengerDashboardModule {}