import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckInRoutingModule } from './check-in-routing.module';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { MaterialModuleModule} from '../../material-module/material-module.module';
import { FlightPassengersComponent } from './flight-passengers/flight-passengers.component';
import { SeatChangePopupComponent } from './seat-change-popup/seat-change-popup.component';
import {  MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    FlightDetailsComponent,
    FlightPassengersComponent,
    SeatChangePopupComponent
  ],
  imports: [
    CommonModule,
    CheckInRoutingModule,
    MaterialModuleModule,
    MatPaginatorModule,
    MatDialogModule,
    FormsModule,
    NgHttpLoaderModule,
    ReactiveFormsModule
  ],
  entryComponents: [SeatChangePopupComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})

export class CheckInModule { }
