import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdatePassengerComponent } from './update-passenger.component';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit, Optional, Inject } from '@angular/core';
import { Passenger } from 'src/app/Passenger';

describe('UpdatePassengerComponent', () => {
  let component: UpdatePassengerComponent;
  let fixture: ComponentFixture<UpdatePassengerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePassengerComponent ],
      imports :[MatDialogModule],
      providers :[Passenger,
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
    fixture = TestBed.createComponent(UpdatePassengerComponent);
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
