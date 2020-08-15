import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangeMealsPrefrencesComponent } from './change-meals-prefrences.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef  } from '@angular/material/dialog';
import { Passenger } from 'src/app/Passenger';
describe('ChangeMealsPrefrencesComponent', () => {
  let component: ChangeMealsPrefrencesComponent;
  let fixture: ComponentFixture<ChangeMealsPrefrencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeMealsPrefrencesComponent ],
      imports:[FormsModule,ReactiveFormsModule,MatDialogModule],
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
    fixture = TestBed.createComponent(ChangeMealsPrefrencesComponent);
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
