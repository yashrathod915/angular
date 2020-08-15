import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InFlightComponent } from './in-flight.component';
import { FlightDetailsMealsComponent } from './flight-details-meals/flight-details-meals.component';


const routes: Routes = [
  {
    path: '', component: InFlightComponent
  },
  {
    path:'flight-Detail-meals-layout',component:FlightDetailsMealsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InFlightRoutingModule { }
