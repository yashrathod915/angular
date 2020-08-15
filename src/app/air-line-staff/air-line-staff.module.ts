import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModuleModule} from '../material-module/material-module.module'
import { AirLineStaffRoutingModule } from './air-line-staff-routing.module';
import { AirLineStaffComponent } from './air-line-staff.component';
import {CheckInModule } from './check-in/check-in.module'
import { InFlightModule } from './in-flight/in-flight.module';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { NgHttpLoaderModule } from "ng-http-loader";
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [AirLineStaffComponent
  ],
  imports: [
    CommonModule,
    AirLineStaffRoutingModule,
    MaterialModuleModule,
    CheckInModule,
    InFlightModule,
    NgHttpLoaderModule,
    MatDialogModule
    
  ]
})
export class AirLineStaffModule { }
