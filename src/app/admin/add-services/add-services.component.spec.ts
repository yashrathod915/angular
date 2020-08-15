import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Inject, NgModule } from '@angular/core';
import { Passenger } from 'src/app/Passenger';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AddServicesComponent } from './add-services.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InflightServiceService } from 'src/app/air-line-staff/in-flight/inflight-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AddServicesComponent', () => {
  let component: AddServicesComponent;
  let fixture: ComponentFixture<AddServicesComponent>;
  let dataService:InflightServiceService;
  let flight:any[];
  const dialogMock = {
    close: () => { }
    };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddServicesComponent ],
      imports:[HttpClientTestingModule,BrowserAnimationsModule,MatSelectModule,FormsModule,ReactiveFormsModule,MatDialogModule],
      providers:[Passenger,
        {
          provide: MAT_DIALOG_DATA, useValue:{}
           },
           {provide: MatDialogRef, useValue: dialogMock},]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddServicesComponent);
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
  it('should Add passenger',()=>{
    let passenger:Passenger;
    let spy = spyOn(component.dialogRef, 'close').and.callThrough();
    component.doAction();
    expect(spy).toHaveBeenCalled(); 
  });

  it('should Add passenger',()=>{
    let passenger:Passenger;
    let spy = spyOn(component.dialogRef, 'close').and.callThrough();
    component.closeDialog();
    expect(spy).toHaveBeenCalled(); 
  });
});
