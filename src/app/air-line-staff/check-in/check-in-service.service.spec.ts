import { TestBed } from '@angular/core/testing';

import { CheckInServiceService } from './check-in-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Flight } from 'src/app/Flight';
import { Component } from '@angular/core';

describe('CheckInServiceService', () => {
  let service: CheckInServiceService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CheckInServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all flights', () => {
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
    spyOn(service, 'getAllFlights').and.callFake(() => {
      console.log(flights.length);
      return flights;
    });
    // let l = service.getAllFlights();
    expect(service.getAllFlights()).toEqual(flights);
  });
  it('should get  flight by flight id', () => {
    const flight: Flight = 
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
    spyOn(service, 'getFlightByFlightId').withArgs(1).
    and.callFake(() => {
      console.log(flight);
      return flight;
    });
    // let l = service.getAllFlights();
    expect(service.getAllFlights()).toEqual(flight);
  });


  it('should update passenger',()=>{

    let flightId:number;
    let flight:any;
    service.updatePassengerStatus(flightId,flight);
    expect(service.updatePassengerStatus(flightId,flight)).toEqual(flight.length);
  })

  it('should get flight By Id',()=>{
    let flight:any;
    let flightId:number;
    service.getFlightByFlightId(flightId);
    expect(service.getFlightByFlightId(flightId)).toEqual(flight.length);
  })


});
