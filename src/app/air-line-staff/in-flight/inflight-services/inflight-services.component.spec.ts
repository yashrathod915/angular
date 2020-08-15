import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InflightServicesComponent } from './inflight-services.component';

import { Component,Inject, Input, NgModule } from '@angular/core';
import { MatDialog, MatDialogModule, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Passenger } from 'src/app/Passenger';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { InflightServiceService } from '../inflight-service.service';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('InflightServicesComponent', () => {
  let component: InflightServicesComponent;
  let fixture: ComponentFixture<InflightServicesComponent>;
  let dataService:InflightServiceService;
  let flight:any
  const dialogMock = {
    close: () => { }
    };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InflightServicesComponent ],
      imports :[MatDialogModule,HttpClientTestingModule, FormsModule,ReactiveFormsModule,MatSelectModule,BrowserAnimationsModule],
      providers:[Passenger,
        {
          provide: MAT_DIALOG_DATA, useValue:{}
           },{provide: MatDialogRef, useValue: dialogMock}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InflightServicesComponent);
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
  //   let spy = spyOn(component.dialogRef, 'close').and.callThrough();
  //   component.doAction();
  //   expect(spy).toHaveBeenCalled(); 
  // });

  // it('should Add passenger',()=>{
  //   let passenger:Passenger;
  //   let spy = spyOn(component.dialogRef, 'close').and.callThrough();
  //   component.closeDialog();
  //   expect(spy).toHaveBeenCalled(); 
  // });
});
