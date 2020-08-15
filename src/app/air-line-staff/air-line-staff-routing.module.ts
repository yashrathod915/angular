import { NgModule } from '@angular/core';
import { Routes, RouterModule, ChildrenOutletContexts } from '@angular/router';
import { AirLineStaffComponent } from './air-line-staff.component'

const routes: Routes = [
  { path: '', component: AirLineStaffComponent },
  {
    path: 'CheckIn',loadChildren: () => import('./check-in/check-in.module').then(m => m.CheckInModule)
  },
  {
    path: 'InFlight',loadChildren: () => import('./in-flight/in-flight.module').then(m => m.InFlightModule)
  },
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AirLineStaffRoutingModule { }
