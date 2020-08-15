import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActionsComponent } from './actions.component';

import { Component, Inject } from '@angular/core';
import { Passenger } from 'src/app/Passenger';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { InflightServiceService } from '../inflight-service.service';

describe('ActionsComponent', () => {
  let component: ActionsComponent;
  let fixture: ComponentFixture<ActionsComponent>;
  let dataService:InflightServiceService;
  let flight:any

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionsComponent ],
      imports:[FormsModule,MatDialogModule,ReactiveFormsModule,HttpClientTestingModule ],
      providers :[Passenger,
        {
          provide: MAT_DIALOG_DATA, useValue:{}
           },{
          provide: MatDialogRef,
          useValue: {}
           }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsComponent);
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
        "flightAncillaryService": ["extra baggage,air conditioning,special service,xyz"],
      
        
      } ]
    
    dataService.selectedFlight=flight[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it('should Add passenger',()=>{
  //   let passenger:Passenger;
  //   component.doAction();
  // });

  
});
