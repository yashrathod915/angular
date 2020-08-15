import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { MaterialModuleModule } from '../material-module/material-module.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { AddServicesComponent } from './add-services/add-services.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ChangeMealsPrefrencesComponent } from './change-meals-prefrences/change-meals-prefrences.component';
import { OnlineServiceComponent } from './online-service/online-service.component';
import { UpdatePassengerComponent } from './update-passenger/update-passenger.component';
import { AddPassengerComponent } from './add-passenger/add-passenger.component';
import { ChangeFlightServicesComponent } from './change-flight-services/change-flight-services.component';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [AdminComponent, DashBoardComponent, AddServicesComponent, ChangeMealsPrefrencesComponent, OnlineServiceComponent, UpdatePassengerComponent, AddPassengerComponent, ChangeFlightServicesComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModuleModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatInputModule
  ]
})
export class AdminModule { }
