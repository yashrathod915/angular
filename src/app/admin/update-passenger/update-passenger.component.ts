import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Passenger } from 'src/app/Passenger';

@Component({
  selector: 'app-update-passenger',
  templateUrl: './update-passenger.component.html',
  styleUrls: ['./update-passenger.component.css']
})
export class UpdatePassengerComponent implements OnInit {

  local_data: any;
  ngOnInit(): void {
  }
  passenger: Passenger;
  constructor(public dialogRef: MatDialogRef<UpdatePassengerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Passenger) {
    this.passenger=data;
    console.log('in pop');
    console.log(this.passenger);
    
  }

  doAction(){
    console.log(this.passenger);
    
  this.dialogRef.close({data:this.passenger});
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }  

}
