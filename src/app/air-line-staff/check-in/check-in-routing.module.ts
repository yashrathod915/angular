import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Flight } from '../../Flight'
import { CheckInComponent } from './check-in.component'
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { FlightPassengersComponent } from './flight-passengers/flight-passengers.component'
import { SeatChangePopupComponent } from './seat-change-popup/seat-change-popup.component';
const routes: Routes = [
  { path: '', component: CheckInComponent },
  { path: 'flight-details', component: FlightDetailsComponent },
  { path: 'flight-passenger', component: FlightPassengersComponent },
  { path: 'seat-change', component: SeatChangePopupComponent }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CheckInRoutingModule { }
