import { Component, OnInit, Optional, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Passenger } from 'src/app/Passenger';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-seat-change-popup',
  templateUrl: './seat-change-popup.component.html',
  styleUrls: ['./seat-change-popup.component.css']
})
export class SeatChangePopupComponent implements OnInit {
  options: FormGroup;
  seatNo = new FormControl();
  local_data: any;
  seats:String[]=[]
  passenger: Passenger;
  constructor(fb: FormBuilder,public dialogRef: MatDialogRef<SeatChangePopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    // Update view with given values
   // this.passenger=data;
    console.log('in pop');
    this.seats=data;
    console.log(data);
    console.log(this.seats);
    this.options = fb.group({
      seatNo: this.seatNo,
    });
    
  }
  ngOnInit(): void {
    
  }



  doAction(){
    // console.log(this.passenger);
    console.log(this.options.value.seatNo);
    
   this.dialogRef.close({data:this.options.value.seatNo});
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }  


}
