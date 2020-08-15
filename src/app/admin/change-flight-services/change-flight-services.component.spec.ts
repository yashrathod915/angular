import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeFlightServicesComponent } from './change-flight-services.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialog, MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Passenger } from 'src/app/Passenger';
import { MatInputModule } from '@angular/material/input';

describe('ChangeFlightServicesComponent', () => {
  let component: ChangeFlightServicesComponent;
  let fixture: ComponentFixture<ChangeFlightServicesComponent>;
  const dialogMock = {
    close: () => { }
    };
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeFlightServicesComponent ],
      imports :[HttpClientTestingModule,BrowserAnimationsModule,MatSelectModule,FormsModule,ReactiveFormsModule,MatDialogModule,MatInputModule],
      providers:[Passenger,
        {
          provide: MAT_DIALOG_DATA, useValue:{}
           },
           {provide: MatDialogRef, useValue: dialogMock},]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeFlightServicesComponent);
    component = fixture.componentInstance;
  
    const flight= [
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
