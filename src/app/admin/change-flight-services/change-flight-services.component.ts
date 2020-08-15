import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Flight } from 'src/app/Flight';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-change-flight-services',
  templateUrl: './change-flight-services.component.html',
  styleUrls: ['./change-flight-services.component.css']
})
export class ChangeFlightServicesComponent implements OnInit {
  options: FormGroup;
  local_data: any;
  services = new FormControl();
  serviceList : String[]=['extra baggage','air conditioning','special service','Special Meals','special assistance'];
  ngOnInit(): void {
  }
  flight:Flight;
  constructor(fb: FormBuilder,public dialogRef: MatDialogRef<ChangeFlightServicesComponent>,
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
    console.log(this.flight.flightAncillaryService);
    
 // this.flight.flightAncillaryService=this.flight.flightAncillaryService.split(',');
  //  this.flight.flightAncillaryService=this.options.value.services.split(',');
    console.log(this.flight.flightAncillaryService);
    
  this.dialogRef.close({data:this.flight});
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }  

}
