import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let flight :any[]
  let role :any[]
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports :[RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    role=[
      {
        "roleId": 2,
        "roleName": "user"
      }
    ]
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
      localStorage['role']= JSON.stringify(role[0])
      localStorage['flight'] = JSON.stringify(flight[0]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should logout',()=>{
    component.logout();
  })

  it('should userHome',()=>{
    component.userHome();
  })

  it('should undo',()=>{
    component.undo();
  })

  it('should undo Meal',()=>{
    component.undoMeal();
  })

  it('should adminHome',()=>{
    component.adminHome();
  })


  it('should load ngOnit',()=>{
    let role:any;
  
   // component.role=JSON.parse(localStorage[role])
    component.ngOnInit();

  })
});
