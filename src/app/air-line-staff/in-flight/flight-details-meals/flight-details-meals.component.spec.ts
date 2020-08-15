import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FlightDetailsMealsComponent } from './flight-details-meals.component';

import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute,ParamMap } from '@angular/router';
import { Passenger } from 'src/app/Passenger';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ActionsComponent } from '../actions/actions.component';
import { InflightServiceService } from '../inflight-service.service';
import { InflightServicesComponent } from '../inflight-services/inflight-services.component';
import { ChangeMealComponent } from '../change-meal/change-meal.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
describe('FlightDetailsMealsComponent', () => {
  let component: FlightDetailsMealsComponent;
  let fixture: ComponentFixture<FlightDetailsMealsComponent>;
  let dataService:InflightServiceService;
  let flight:any[];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightDetailsMealsComponent ],
      imports:[ RouterTestingModule,BrowserAnimationsModule, ReactiveFormsModule,FormsModule ,MatDialogModule,HttpClientTestingModule],
      
      providers:[ActionsComponent,Passenger,InflightServiceService,InflightServicesComponent,ChangeMealComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightDetailsMealsComponent);
    component = fixture.componentInstance;
    dataService = fixture.debugElement.injector.get(InflightServiceService);
    flight= [
      {
        "id": 1,
        "flightId": 1,
        "flightName": "Air India",
        "onlineShopitems": "wallet,belt,Shirt,phone",
        "foodItems": "Mushroom,Sausage,sam",
        "departurePlace": "Bangalore",
        "arrivalPlace": "Bbsr",
        "departureTime": "9:00 A.M",
        "arrivalTime": "12:00 P.M",
        "flightAncillaryService": "extra baggage,air conditioning,special service,xyz",
        "passengers": [
          {
            "passengerId": 1,
            "checkinStatus": true,
            "name": "yash rathod",
            "age": 23,
            "category": "normal",
            "dob": "2020-08-18T18:30:00.000Z",
            "ancillaryService": [
              "air conditioning",
              "special service",
              "xyz"
            ],
            "gender": "male",
            "colour": "green",
            "inflightshop": [
              "wallet",
              "belt",
              "Shirt"
            ],
            "action": "InFlight",
            "passport": "123456789",
            "address": "abc",
            "mealsList": null,
            "seatNo": "2C",
          },
          {
            "passengerId": 2,
            "checkinStatus": false,
            "name": "yash rathod",
            "age": 23,
            "category": "normal",
            "dob": "2020-08-18T18:30:00.000Z",
            "ancillaryService": [
              "air conditioning",
              "special service",
              "xyz"
            ],
            "gender": "male",
            "colour": "green",
            "inflightshop": [
              "wallet",
              "belt",
              "Shirt"
            ],
            "action": "InFlight",
            "passport": "123456789",
            "address": "abc",
            "mealsList": [],
            "seatNo": "1C"
          }]
        
      } ]

      let spy = spyOn(dataService, 'getFlightByFlightId')
      .and.returnValue(of(flight[0]));
      localStorage['flight'] = JSON.stringify(flight[0]);
      // localStorage['flight']=flight[0];
      component.flight=flight[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should Add passenger',()=>{
    let passenger={
      action:"2C"
     }
   
    component.changeMeals("action",passenger);
  });
  it('should Add passenger',()=>{
    let passenger={
      action:"2C"
     }
   
    component.inflightServices("action",passenger);
  });
  it('should Add passenger',()=>{
    let passenger={
      action:"2C"
     }
   
    component.addServices("action",passenger);
  });
});
