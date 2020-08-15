import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, OnInit,Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { Passenger } from 'src/app/Passenger';
import { OnlineServiceComponent } from './online-service.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('OnlineServiceComponent', () => {
  let component: OnlineServiceComponent;
  let fixture: ComponentFixture<OnlineServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineServiceComponent ],
      imports : [FormsModule,MatInputModule,ReactiveFormsModule,MatDialogModule,MatSelectModule,BrowserAnimationsModule],
      providers : [Passenger,FormControl,
        {
          provide: MAT_DIALOG_DATA, useValue:{}
           },{
          provide: MatDialogRef,
          useValue: {}
           }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineServiceComponent);
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
