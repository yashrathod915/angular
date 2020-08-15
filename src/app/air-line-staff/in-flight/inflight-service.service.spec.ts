import { TestBed } from '@angular/core/testing';

import { InflightServiceService } from './inflight-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('InflightServiceService', () => {
  let service: InflightServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(InflightServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should update passenger',()=>{
    let flightId:number;
    let flight:any;

    service.updatePassengerStatus(flightId,flight);
  })


  it('should update passenger',()=>{
    let flightId:number;
    let flight:any;

    service.getAllFlights();
  })

  it('should update passenger',()=>{
    let flightId:number;
    let flight:any;

    service.getFlightByFlightId(flightId);
  })
});
