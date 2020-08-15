import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModuleModule } from '../../material-module/material-module.module';
import { InFlightRoutingModule } from './in-flight-routing.module';
import { InFlightComponent } from './in-flight.component';
import { FlightDetailsMealsComponent } from './flight-details-meals/flight-details-meals.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ActionsComponent } from './actions/actions.component';
import { ChangeMealComponent } from './change-meal/change-meal.component';
import { InflightServicesComponent } from './inflight-services/inflight-services.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
@NgModule({
  declarations: [InFlightComponent, FlightDetailsMealsComponent, ActionsComponent, ChangeMealComponent, InflightServicesComponent],
  imports: [
    CommonModule,
    InFlightRoutingModule,
    MaterialModuleModule,
    MatPaginatorModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [ActionsComponent,InflightServicesComponent,ChangeMealComponent],
})
export class InFlightModule { }
