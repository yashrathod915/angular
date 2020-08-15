import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Passenger } from 'src/app/Passenger';
import { InflightServiceService } from '../inflight-service.service';


@Component({
  selector: 'app-change-meal',
  templateUrl: './change-meal.component.html',
  styleUrls: ['./change-meal.component.css']
})
export class ChangeMealComponent implements OnInit {
  passenger: Passenger;
  options: FormGroup;
  mealsList: any
  Meals = new FormControl();
  constructor(fb: FormBuilder,private inFlightService: InflightServiceService, public dialogRef: MatDialogRef<ChangeMealComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    // Update view with given values
    this.passenger = data;
    console.log('in action');
    console.log(data);
    this.options = fb.group({
      meals: this.Meals
    });
  }

  ngOnInit(): void {
    this.mealsList=this.inFlightService.selectedFlight.foodItems;
    this.mealsList=this.mealsList.split(',');
  }
  doAction() {
    console.log(this.Meals.value);
    this.dialogRef.close({ data: this.passenger });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }

}
