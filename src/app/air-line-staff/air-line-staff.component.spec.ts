import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AirLineStaffComponent } from './air-line-staff.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AirLineStaffComponent', () => {
  let component: AirLineStaffComponent;
  let fixture: ComponentFixture<AirLineStaffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirLineStaffComponent ],
      imports:[RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirLineStaffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should create', () => {
    expect(component.checkIn).toBeTruthy();
  });


  it('should check In',()=>{


    component.checkIn();

  });

  it('should inFlight',()=>{
    component.inFlight();

  });
});
