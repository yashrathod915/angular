import { Component, OnInit,Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Passenger } from 'src/app/Passenger';
import { Flight } from 'src/app/Flight';

@Component({
  selector: 'app-online-service',
  templateUrl: './online-service.component.html',
  styleUrls: ['./online-service.component.css']
})
export class OnlineServiceComponent implements OnInit {
  options: FormGroup;
  local_data: any;
  services = new FormControl();
  foodList : String[]=['wallet', 'belt', 'Shirt', 'pant', 'jacket', 'towel'];
  ngOnInit(): void {
  }
  flight:Flight;
  constructor(fb: FormBuilder,public dialogRef: MatDialogRef<OnlineServiceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Flight) {
    this.flight=data;
    console.log('in pop');
    console.log(this.flight);
    this.options = fb.group({
      services: this.services
    });
  }
  doAction(){
    console.log(this.options.value.services);
    // this.flight.flightAncillaryService=this.options.value.services;
   this.dialogRef.close({data:this.flight});
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }  
}

