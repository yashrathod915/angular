import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { AdminComponent } from './admin.component';

import { Component, OnInit} from '@angular/core';
import { Flight } from 'src/app/Flight';
import { CheckInServiceService } from 'src/app/air-line-staff/check-in/check-in-service.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;
  let checkIn;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminComponent ],
      imports:[HttpClientTestingModule,RouterTestingModule],
      providers:[]
    })
    .compileComponents();
  }));

  beforeEach(inject([CheckInServiceService],(checkin: void) => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    checkIn : checkin
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should initialize NgOnit',()=>{
  //   let data={};
  //   component.ngOnInit();
  // })

  it('should initialize getReocrd',()=>{
    let selectRow:Flight;
    component.getRecord(selectRow);
  })

  it('should get all flights',()=>{
    // component =new FlightDetailsComponent(service,null);
      const flights: Flight[] = [
        {
          "flightId": 2,
          "flightName": "Air Asia",
          "departurePlace": "Bangalore",
          "arrivalPlace": "Bbsr",
          "departureTime": "10:00 A.M",
          "arrivalTime": "1:00 P.M",
          "passengers": [],
          "onlineShopitems":[],
          "foodItems":[],
          "flightAncillaryService" :[]
        }
      ];
      // spyOn(checkIn, 'getAllFlights').and.callFake(() => {
      //   console.log(flights.length);
      //   return flights;
      // });
      //spyOn(checkIn, 'getAllFlights').and.returnValue(of(flights));
      // let l = service.getAllFlights();
      // console.log(service.getAllFlights()); 
      component.ngOnInit();
      //fixture.detectChanges();
      //console.log(component.flight.length);
      // expect(service.getAllFlights()).toEqual(flights);
     // expect(component.flights).toEqual(flights);
    });

});
