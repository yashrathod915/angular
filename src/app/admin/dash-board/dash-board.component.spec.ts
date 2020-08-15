import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { DashBoardComponent } from './dash-board.component';
import { Passenger } from 'src/app/Passenger';
import { InflightServiceService } from 'src/app/air-line-staff/in-flight/inflight-service.service';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { AddServicesComponent } from '../add-services/add-services.component';
import { ChangeMealsPrefrencesComponent } from '../change-meals-prefrences/change-meals-prefrences.component';
import { OnlineServiceComponent } from '../online-service/online-service.component';
import { UpdatePassengerComponent } from '../update-passenger/update-passenger.component';
import { AddPassengerComponent } from '../add-passenger/add-passenger.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { Flight } from 'src/app/Flight';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('DashBoardComponent', () => {
  let component: DashBoardComponent;
  let fixture: ComponentFixture<DashBoardComponent>;
  let dataService:InflightServiceService;
  let flight:any[];
 
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashBoardComponent],
      imports: [MatDialogModule,ReactiveFormsModule,FormsModule, RouterTestingModule,BrowserAnimationsModule, HttpClientTestingModule],
      providers: [Passenger, InflightServiceService, AddServicesComponent, ChangeMealsPrefrencesComponent,
        OnlineServiceComponent, UpdatePassengerComponent, AddPassengerComponent,
        {
          provide: MAT_DIALOG_DATA, useValue: {}
        }, {
          provide: MatDialogRef,
          useValue: {}
        }]
    })
      .compileComponents();
  }));

  beforeEach(inject([InflightServiceService], (inflight: InflightServiceService) => {
    fixture = TestBed.createComponent(DashBoardComponent);
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
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should add passenger', () => {
  //   // let data = [{
  //   //   passengers: []
  //   // }]
  //   spyOn(inflightService, 'updatePassengerStatus').and.returnValue(of(flight));
  //   //jasmine.createSpy('updatePassengerStatus').and.callThrough();
  //   component.addPassenger();
  // });

  // it('should return flight by id', inject([InflightServiceService], (service: InflightServiceService) => {
  //   let flight =    {
  //     "flightId": 2,
  //     "flightName": "Air Asia",
  //     "departurePlace": "Bangalore",
  //     "arrivalPlace": "Bbsr",
  //     "departureTime": "10:00 A.M",
  //     "arrivalTime": "1:00 P.M",
  //     "passengers": [],
  //     "onlineShopitems":[],
  //     "foodItems":[],
  //     "flightAncillaryService" :[]
  //   }
  //   service.getFlightByFlightId(1).subscribe(value => {
  //     expect(value).toBe(flight);
  //     component.ngOnInit();
  //   });
  // }));



  it('should Add passenger',()=>{
    let passenger:Passenger;
    let data1:string;
    let data2:any
    component.inflightServices();
  });


  it('should Add passenger',()=>{
    let passenger:Passenger;
    let data1:string;
    let data2:any
    component.changeMeals();
  });
  it('should Add passenger',()=>{
    let passenger:Passenger;
    let data1:string;
    let data2:any
    component.changeService();
  });



 



  it('should Add passenger',()=>{
    let passenger:Passenger;
    let data1:string;
    let data2:any
    component.updateDetails(data1,data2);
  });


  it('should Add passenger',()=>{
    let passenger:Passenger;
    let data1:string;
    let data2:any
    component.addPassenger();
  });


  it('should Add passenger',()=>{
    let passenger:Passenger;
    let data1:string;
    let data2:any
    component.filterselect("No Passport No");
  });
  it('should Add passenger',()=>{
    let passenger:Passenger;
    let data1:string;
    let data2:any
    component.filterselect("No address");
  });
  it('should Add passenger',()=>{
    let passenger:Passenger;
    let data1:string;
    let data2:any
    component.filterselect("none");
  });
  it('should Add passenger',()=>{
    let passenger:Passenger;
    let data1:string;
    let data2:any
    component.filterselect("No Date of birth");
  });
});

