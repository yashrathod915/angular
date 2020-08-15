import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { InFlightComponent } from './in-flight.component';
import { Component, NgModule} from '@angular/core';
import { Flight } from 'src/app/Flight';
import { Router  } from '@angular/router';
import { InflightServiceService } from './inflight-service.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('InFlightComponent', () => {
  let component: InFlightComponent;
  let fixture: ComponentFixture<InFlightComponent>;
  let inFlight;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InFlightComponent ],
      imports : [RouterTestingModule,HttpClientTestingModule],
      providers : [InflightServiceService,Flight]
    })
    .compileComponents();
  }));

  beforeEach(inject([InflightServiceService],(inflight) => {
    inFlight=inflight;
    fixture = TestBed.createComponent(InFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
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
      // spyOn(service, 'getAllFlights').and.callFake(() => {
      //   console.log(flights.length);
      //   return flights;
      // });
      spyOn(inFlight, 'getAllFlights').and.returnValue(of(flights));
      // let l = service.getAllFlights();
      // console.log(service.getAllFlights()); 
      component.ngOnInit();
      //fixture.detectChanges();
      //console.log(component.flight.length);
      // expect(service.getAllFlights()).toEqual(flights);
      expect(component.flight).toEqual(flights);
    });


    it('should get record',()=>{

      let selectedRow:any;
      component.getRecord(selectedRow);
    })
});
