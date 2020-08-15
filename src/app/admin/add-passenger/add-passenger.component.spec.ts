import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AddPassengerComponent } from './add-passenger.component';
import { Passenger } from 'src/app/Passenger';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { InflightServiceService } from 'src/app/air-line-staff/in-flight/inflight-service.service';


describe('AddPassengerComponent', () => {
  let component: AddPassengerComponent;
  let fixture: ComponentFixture<AddPassengerComponent>;
  let dataService:InflightServiceService;
  let flight:any[];
  const dialogMock = {
    close: () => { }
    };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPassengerComponent ],
      imports : [ FormsModule,MatDialogModule,HttpClientTestingModule,
        ReactiveFormsModule,MatSelectModule,MatInputModule,BrowserAnimationsModule],
      providers:[Passenger,
        {
          provide: MAT_DIALOG_DATA, useValue:{}
           },{provide: MatDialogRef, useValue: dialogMock}
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPassengerComponent);
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
  // it('should close tab',()=>{
  //   let passenger:Passenger;
  //   let spy = spyOn(component.dialogRef, 'close').and.callThrough();
  //   component.closeDialog();
  //   expect(spy).toHaveBeenCalled(); 
  // });

});
