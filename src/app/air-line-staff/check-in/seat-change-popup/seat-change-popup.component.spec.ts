import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { Passenger } from 'src/app/Passenger';
import { SeatChangePopupComponent } from './seat-change-popup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';

describe('SeatChangePopupComponent', () => {
  let component: SeatChangePopupComponent;
  let fixture: ComponentFixture<SeatChangePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeatChangePopupComponent ],
      imports : [MatDialogModule,MatSelectModule,BrowserAnimationsModule,FormsModule,ReactiveFormsModule],
      providers : [Passenger,
        {
          provide: MAT_DIALOG_DATA, useValue:{}
           },{
          provide: MatDialogRef,
          useValue: {}
           }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatChangePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it('should Add passenger',()=>{
  //   let passenger:Passenger;
  //   component.doAction();
  // });

  // it('should Add passenger',()=>{
  //   let passenger:Passenger;
  //   component.closeDialog();
  // });
});
