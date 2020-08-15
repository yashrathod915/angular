import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { FlightPassengersComponent } from './flight-passengers.component';

import { Component, ViewChild } from '@angular/core';
import { Passenger } from 'src/app/Passenger';
import { CheckInServiceService } from '../check-in-service.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { Flight } from 'src/app/Flight';
import { MatPaginator } from '@angular/material/paginator';
import { SeatChangePopupComponent } from '../seat-change-popup/seat-change-popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CheckInComponent } from '../check-in.component';
import { of } from 'rxjs';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('FlightPassengersComponent', () => {
  let component: FlightPassengersComponent;
  let fixture: ComponentFixture<FlightPassengersComponent>;
  let dataService:CheckInServiceService;
  let flight:any[];
  //let service: CheckInServiceService;
  let checkIn;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightPassengersComponent ],
      imports :[ReactiveFormsModule,MatSelectModule,BrowserAnimationsModule,
        FormsModule,MatDialogModule,HttpClientTestingModule,RouterTestingModule],
      providers :[]
    })
    .compileComponents();
  }));

  beforeEach(inject([CheckInServiceService],(checkin) => {
    //   service= new CheckInServiceService(null);
    //  component = new FlightDetailsComponent(service,null);
      checkIn=checkin;
      fixture = TestBed.createComponent(FlightPassengersComponent);
      component = fixture.componentInstance;
      dataService = fixture.debugElement.injector.get(CheckInServiceService);
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
              "mealsList": [],
              "seatNo": "2C"
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
    }));
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should Add passenger',()=>{
    component.options.value.filterCategory="normal";
   
    component.doAction();
  });
  it('should Add passenger',()=>{
    component.options.value.filterCategory="infant";
   
    component.doAction();
  });
  it('should Add passenger',()=>{
    component.options.value.filterCategory="wheel chair";
   
    component.doAction();
  });
  it('should Add passenger',()=>{
    component.options.value.filterCategory="infant + wheel chair";
   
    component.doAction();
  });
  it('should Add passenger',()=>{
    component.options.value.filterCategory="normal";
    component.options.value.filterStatus="Checked-In";
   
    component.doAction();
  });
  it('should Add passenger',()=>{
    component.options.value.filterCategory="normal";
    component.options.value.filterStatus="Not Checked-In";
   
    component.doAction();
  });
  it('should Add passenger',()=>{
    component.options.value.filterCategory="wheel chair";
    component.options.value.filterStatus="Checked-In";
   
    component.doAction();
  });
  it('should Add passenger',()=>{
    component.options.value.filterCategory="wheel chair";
    component.options.value.filterStatus="Not Checked-In";
   
    component.doAction();
  });
  it('should Add passenger',()=>{
    component.options.value.filterCategory="infant";
    component.options.value.filterStatus="Checked-In";
   
    component.doAction();
  });
  it('should Add passenger',()=>{
   
   
    component.doAction();
  });
  it('should Add passenger',()=>{
    component.options.value.filterCategory="infant";
    component.options.value.filterStatus="Not Checked-In";
   
    component.doAction();
  });
  it('should Add passenger',()=>{
    component.options.value.filterCategory="none";
    component.options.value.filterStatus="Checked-In";
   
    component.doAction();
  });
  it('should Add passenger',()=>{
    component.options.value.filterCategory="none";
    component.options.value.filterStatus="Not Checked-In";
   
    component.doAction();
  });
  it('should Add passenger',()=>{
    component.options.value.filterCategory="infant + wheel chair";
    component.options.value.filterStatus="Not Checked-In";
   
    component.doAction();
  });
  it('should Add passenger',()=>{
    component.options.value.filterCategory="infant + wheel chair";
    component.options.value.filterStatus="Checked-In";
   
    component.doAction();
  });

  it('should Add passenger',()=>{
    let passenger:any;
    component.applyFilter("infant");
  });


  it('should Add passenger',()=>{
    // let passenger:any;
    component.seatAction("2C");
  });
  it('should Add passenger',()=>{
    // let passenger:any;
    component.seatAction("1C");
  });

  it('should Add passenger',()=>{
     let passenger={
      seatNo:"2C"
     }
    //  component.dialogData.seatNo="2C";
    component.openDialog("2C",passenger);
  });

  

  // it('should Add passenger',()=>{
  //   let passenger:number;
  //   // component.onSeatClicked(passenger);
  // });
  // it('should on ngoninit',()=>{
  //   const flight: Flight= 
  //     {
  //       "flightId": 2,
  //       "flightName": "Air Asia",
  //       "departurePlace": "Bangalore",
  //       "arrivalPlace": "Bbsr",
  //       "departureTime": "10:00 A.M",
  //       "arrivalTime": "1:00 P.M",
  //       "passengers": [],
  //       "onlineShopitems":[],
  //       "foodItems":[],
  //       "flightAncillaryService" :[]
  //     };
  //   spyOn(checkIn, 'getFlightByFlightId').withArgs(1).and.returnValue(of(flight));
  //  component.ngOnInit();
  //  fixture.detectChanges();
  //   // expect(checkIn.getFlightByFlightId(1)).toEqual(flight);
  //  // console.log(component.flight);
  //   // expect(component.flight).toEqual(flight);
  // });

  // it('should Add passenger',()=>{
  //   let data1:any;
  //   let data2:any;
  //   component.openDialog(data2,data1);
  // });



});
