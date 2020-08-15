import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { FlightDetailsComponent } from './flight-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CheckInServiceService } from '../check-in-service.service';
import { Flight } from '../../../Flight';
import { Router, ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('FlightDetailsComponent', () => {
  let component: FlightDetailsComponent;
  let fixture: ComponentFixture<FlightDetailsComponent>;
  let service : CheckInServiceService;
  let router : Router;
  let checkIn;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightDetailsComponent ],
      imports :[HttpClientTestingModule,RouterTestingModule],
      providers :[]
    })
    .compileComponents();
  }));

  beforeEach(inject([CheckInServiceService],(checkin) => {
  //   service= new CheckInServiceService(null);
  //  component = new FlightDetailsComponent(service,null);
    checkIn=checkin;
    fixture = TestBed.createComponent(FlightDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should Add passenger',()=>{
    let data:any;
    component.getRecord(data);
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
    spyOn(checkIn, 'getAllFlights').and.returnValue(of(flights));
    // let l = service.getAllFlights();
    // console.log(service.getAllFlights()); 
    component.ngOnInit();
    //fixture.detectChanges();
    //console.log(component.flight.length);
    // expect(service.getAllFlights()).toEqual(flights);
    expect(component.flight).toEqual(flights);
  });
});
