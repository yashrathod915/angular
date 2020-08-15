import { Component, OnInit, Inject } from '@angular/core';
import { Passenger } from 'src/app/Passenger';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { InflightServiceService } from 'src/app/air-line-staff/in-flight/inflight-service.service';

@Component({
  selector: 'app-add-services',
  templateUrl: './add-services.component.html',
  styleUrls: ['./add-services.component.css']
})
export class AddServicesComponent implements OnInit {
  local_data: any;
  options: FormGroup;
  services = new FormControl();
  flightServices: String[]=[];
  passenger: Passenger;
  constructor(fb: FormBuilder, private inFlightService: InflightServiceService, public dialogRef: MatDialogRef<AddServicesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    // Update view with given values
    this.passenger = data;
    console.log('in action');
    console.log(data);
    this.options = fb.group({
      services:this.services
    });
  }
  ngOnInit(): void {
     this.flightServices=this.inFlightService.selectedFlight.flightAncillaryService;
  }
  doAction() {
    console.log(this.options.value.services);
    this.passenger.ancillaryService=this.options.value.services.split(',');
    this.dialogRef.close({ data: this.passenger });
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }


}
